import express, { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { UrlRepository } from '../repositories';
import validUrl from 'valid-url';
import { createUrlShortenedSuccessResponse } from '../factories';
import { ErrorResponse, CreateUrlSuccessResBody } from '../types/responses';
import { CreateUrlReqBody } from '../types/requests';

const urlController = express.Router();

urlController.post(
  '/',
  async (
    req: Request<
      ParamsDictionary,
      CreateUrlSuccessResBody | ErrorResponse,
      CreateUrlReqBody
    >,
    res: Response<CreateUrlSuccessResBody | ErrorResponse>,
  ) => {
    if (!req.body || !req.body.longUrl) {
      return res.status(400).send({ message: 'Insufficient data' });
    }

    const { longUrl } = req.body;

    if (!validUrl.isWebUri(longUrl)) {
      return res.status(400).send({ message: 'Invalid url' });
    }

    try {
      const url = await UrlRepository.findOne({ longUrl });
      if (url) {
        const response = createUrlShortenedSuccessResponse(url);
        return res.send(response);
      }

      const newUrl = await UrlRepository.create(longUrl);
      const response = createUrlShortenedSuccessResponse(newUrl);
      return res.send(response);
    } catch (error) {
      res.status(500).send({ message: 'Server error' });
    }
  },
);

export default urlController;

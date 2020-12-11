import express, { Request, Response } from 'express';
import { UrlRepository } from '../repositories';
import { ErrorResponse } from '../types/responses';
import { GetUrlReqParams } from '../types/requests';

const indexController = express.Router();

indexController.get('/', (_req, res: Response<string>) => {
  res.send('Service up and running!');
});

indexController.get(
  '/:code',
  async (
    req: Request<GetUrlReqParams, void | ErrorResponse>,
    res: Response<void | ErrorResponse>,
  ) => {
    try {
      const url = await UrlRepository.findOne({ code: req.params.code });

      if (!url) {
        return res.status(404).send({ message: 'Url not found' });
      }

      return res.redirect(url.longUrl);
    } catch (error) {
      res.status(500).send({ message: 'Server error' });
    }
  },
);

export default indexController;

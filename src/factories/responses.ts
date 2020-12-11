import { Url } from '../types/models';
import { createShortUrl } from '../utils';
import { CreateUrlSuccessResBody } from '../types/responses';

export const createUrlShortenedSuccessResponse = ({
  longUrl,
  code,
  createdAt,
}: Url): CreateUrlSuccessResBody => ({
  longUrl,
  shortUrl: createShortUrl(code),
  createdAt,
});

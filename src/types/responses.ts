import { Url } from './models';

export interface CreateUrlSuccessResBody {
  longUrl: Url['longUrl'];
  shortUrl: string;
  createdAt: Url['createdAt'];
}
export interface ErrorResponse {
  message: string;
}

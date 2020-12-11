import { Url } from './models';

export interface CreateUrlReqBody {
  longUrl: Url['longUrl'];
}
export interface GetUrlReqParams {
  code: string;
}

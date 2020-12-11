import { Document } from 'mongoose';

export interface Url extends Document {
  longUrl: string;
  code: string;
  createdAt: Date;
}

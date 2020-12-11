import mongoose, { Schema } from 'mongoose';
import { Url } from '../types/models';

const UrlSchema = new Schema({
  longUrl: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  createdAt: { type: Date, required: true },
});

const UrlModel = mongoose.model<Url>('Url', UrlSchema);

export default UrlModel;

import { UrlModel } from '../models';
import { Url } from '../types/models';
import { nanoid } from 'nanoid';

interface SearchConditions {
  code?: string;
  longUrl?: string;
}

export const findOne = async (
  searchConditions: SearchConditions,
): Promise<Url> => {
  const url = await UrlModel.findOne(searchConditions);
  return url;
};

export const create = async (longUrl: string): Promise<Url> => {
  const code = nanoid(10);
  const newUrl = await UrlModel.create({
    code,
    longUrl,
    createdAt: new Date(),
  });
  await newUrl.save();
  return newUrl;
};

export const createShortUrl = (code: string) => {
  return `${process.env.BASE_URL}/${code}`;
};

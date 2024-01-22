import { ObjectId } from 'mongodb';

const convertStringToObjectId = (text: string) => {
  return new ObjectId(text);
};

export default convertStringToObjectId;

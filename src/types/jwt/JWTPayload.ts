import { ObjectId } from 'mongoose';

export default interface JWTPayload {
  username: string;
  _id: ObjectId;
}

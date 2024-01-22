import { Document as MongooseDocument } from 'mongoose';
import Role from 'types/user/Role';

export default interface User extends MongooseDocument {
  username: string;
  password: string;
  password_changed_at?: Date;
  avatar_url?: string;
  role: Role;
  created_at: Date;
  updated_at: Date;
}

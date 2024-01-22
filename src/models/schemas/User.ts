import { Model, model, Schema } from 'mongoose';
import bcypt from 'bcrypt';

import User from 'models/types/User';
import Role from 'types/user/Role';
import MODELS from 'constants/model';

const UserSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    password_changed_at: { type: Date, default: new Date() },
    avatar_url: { type: String, default: '' },
    role: { type: String, default: Role.USER },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

UserSchema.index({ role: 1 });

UserSchema.pre('save', async function (this: User, next: (err?: Error | undefined) => void) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcypt.genSalt(10);
  const hashPassword = await bcypt.hash(this.password, salt);
  this.password = hashPassword;
  next();
});

const UserModel: Model<User> = model<User>(MODELS.user, UserSchema, MODELS.user);
export default UserModel;

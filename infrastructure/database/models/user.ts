import { HydratedDocument, Schema } from 'mongoose';


export interface IUser {
  telegram_id: number;
  username: string;
  first_name: string;
  last_name: string;
  locale: string;
  started: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type HydratedUser = HydratedDocument<IUser>;

export const UserSchema = new Schema<IUser>({
  telegram_id: {
    type: Number,
    unique: true,
    required: true,
    index: true,
  },
  username: String,
  first_name: String,
  last_name: String,
  locale: {
    type: String,
    default: 'ru',
  },
  started: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

import connection from './connection';
import middleware from './middleware';
import {
  IUser,
  UserSchema,
} from './models';


export const Database = {
  connection,
  User: connection.model<IUser>('User', UserSchema),
};

export const dbMiddleware = middleware(Database);

export * from './models';

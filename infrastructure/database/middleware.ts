import { NextFunction } from 'grammy';

import { Database } from './index';
import { MyContext } from '../../types';


const middleware = (db: typeof Database) => async (ctx: MyContext, next: NextFunction) => {
  ctx.db = db;

  return await next();
};

export default middleware;

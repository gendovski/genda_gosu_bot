import { HydrateFlavor, HydrateApiFlavor } from '@grammyjs/hydrate';
import { Context as BaseContext, Api, SessionFlavor } from 'grammy';
import {
  Database,
  HydratedUser,
} from '../infrastructure';
import { File } from 'grammy/out/types';


interface SessionData {
  phoneNumber?: string;
  user?: HydratedUser;
}

interface DatabaseContext {
  db: typeof Database;
}

type MyContext = BaseContext &
  HydrateFlavor<BaseContext> &
  SessionFlavor<SessionData> &
  DatabaseContext;

type MyApi = HydrateApiFlavor<Api>;

export { MyContext, MyApi, SessionData };
export type AnimatedStickerFile = File & { componentUniqueId: string };

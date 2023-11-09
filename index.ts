import 'dotenv/config'
import { Bot, Context, session } from "grammy";
import { limit } from "@grammyjs/ratelimiter";
import { setInlineQueries } from './inline-query';
import { setPrivateMessage } from './private-message';
import { hydrateApi, hydrateContext } from '@grammyjs/hydrate';
import userMiddleware from './middlewares/user-middleware';
import { Database, dbMiddleware } from './infrastructure';
import * as typesNode from 'grammy/out/types.node';
import { FileAdapter } from '@grammyjs/storage-file';

if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN is undefined')
}

const bot = new Bot(process.env.BOT_TOKEN);

async function onStartup (botInfo: typesNode.UserFromGetMe): Promise<void> {
  bot.use(session({
    initial: () => ({}),
    getSessionKey: (ctx) => String(ctx.from.id),
    storage: new FileAdapter({ dirName: 'sessions' }),
  }));

  bot.use(limit({ timeFrame: 2000, limit: 3 }))
  bot.use(hydrateContext());
  bot.use(dbMiddleware);
  bot.api.config.use(hydrateApi());
  bot.use(userMiddleware)
  setPrivateMessage(bot);
  setInlineQueries(bot);
  
  bot.errorHandler = console.log;
  bot.catch(console.log)
  
  console.info(JSON.stringify(botInfo, null, 2));
}
  
Database.connection.once('open', async () => {
  console.info('Connected to MongoDB');

  bot.start({
    drop_pending_updates: false,
    allowed_updates: ['message', 'inline_query'],
    onStart: onStartup,
  });
});
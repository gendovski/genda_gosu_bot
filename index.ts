import 'dotenv/config'
import { Bot } from "grammy";
import { limit } from "@grammyjs/ratelimiter";
import { setInlineQueries } from './inline-query';
import { setPrivateMessage } from './private-message';

if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN is undefined')
}

const bot = new Bot(process.env.BOT_TOKEN);

bot.use(limit({ timeFrame: 2000, limit: 3 }))
setPrivateMessage(bot);
setInlineQueries(bot);

bot.catch(console.log)

bot.start();

bot.api.getMe().then(console.log)
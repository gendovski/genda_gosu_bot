import 'dotenv/config'
import { Bot } from "grammy";
import { setInlineQueries } from './inline-query';

if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN is undefined')
}

const bot = new Bot(process.env.BOT_TOKEN);

setInlineQueries(bot);

bot.catch(console.log)

bot.start();
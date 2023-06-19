import { Bot } from "grammy";
import { curses } from './curses.json';
import { randomInt } from "crypto";

export const setInlineQueries = (bot: Bot) => {
bot.inlineQuery(/.*/, async (ctx) => {
  await ctx.answerInlineQuery(
    [
      {
        type: "article",
        id: "gosu",
        title: "Выебать мамку",
        input_message_content: {
          message_text: curses[randomInt(0, curses.length - 1)],
          parse_mode: "HTML",
        },
      },
    ],
    { cache_time: 0 },
  );
});
}
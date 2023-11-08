import { Bot } from 'grammy';
import { curses } from './curses.json';
import { randomInt } from 'crypto';
import type { InlineQueryResult } from 'grammy/types';

export const setInlineQueries = (bot: Bot) => {
  bot.inlineQuery(/.*/, async (ctx) => {
    const adType = Math.random() > 0.5;
    const text = [
      'Егор прислал мем',
      'Наши мемы',
      'Шитпостинг нового поколения',
      'Канал админа',
      'Канал мемов',
      'Секретный мем',
      'Лучший шитпост',
      'Мемный космос',
      'Анонс админа',
    ][randomInt(0, 3)];

    await ctx.answerInlineQuery([
      adType && {
        type: 'article',
        id: 'egorsentmeme',
        title: text,
        input_message_content: {
          description: 'memes',
          title: text,
          message_text:
            curses[randomInt(0, curses.length - 1)] +
            `\n<a href="t.me/egorsentmeme">${text}</a>`,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        },
      },
      {
        type: 'article',
        id: 'gosu',
        title: 'Выебать мамку',
        input_message_content: {
          message_text: curses[randomInt(0, curses.length - 1)],
          parse_mode: 'HTML',
        },
      },
    ].filter(Boolean) as InlineQueryResult[], {
      cache_time: 0,
      ...(!adType && {
        button: {
          text,
          start_parameter: '123',
        },
      }),
    });
  });
};

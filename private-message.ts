import { Bot } from 'grammy';

export const setPrivateMessage = (bot: Bot) => {
  bot.chatType(['private']).hears(/.*/, async (ctx) => {
    ctx.reply('Подпишись, друг: @egorsentmeme')
  })
}
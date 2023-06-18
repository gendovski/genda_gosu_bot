

const { Bot } = require("grammy");
const { Menu } = require("@grammyjs/menu");

// Load environment variables from .env file
require("dotenv").config();

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(process.env.BOT_TOKEN); // <-- put your bot token between the ""

// Handle '/start' command, can be used for other commands, see below.
bot.command('start', (ctx) => {
  ctx.reply('Welcome to the bot!');
});

const main = new Menu("root-menu")
  .text("Welcome", (ctx) => ctx.reply("Hi!"))
  .row()
  .submenu("Credits", "credits-menu");

const settings = new Menu("credits-menu")
  .text("credits", (ctx) => ctx.reply("You reached credits"))
  .submenu("Nextlevel", "nextlevel-menu")
  .row()
  .back("Go Back");

const nextlevel = new Menu("nextlevel-menu")
  .text("Nextlevel", (ctx) => ctx.reply("nextlevel"))
  .row()
  .submenu("navi", "movements")
  .row()
  .back("Go Back");


bot.use(main);
bot.start();











// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
//bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
//bot.on("message", (ctx) => ctx.reply("Got another message!"));

/*bot.inlineQuery(/best bot (framework|library)/, async (ctx) => {
    await ctx.answerInlineQuery(
      [
        {
          type: "article",
          id: "01",
          title: "Добавить вариант",
          input_message_content: {
            message_text:
  "<b>grammY</b> is the best way to create your own Telegram bots. \
  They even have a pretty website! 👇",
            parse_mode: "HTML",
          },
          reply_markup: new InlineKeyboard().url(
            "grammY website",
            "https://grammy.dev/",
          ),
          //url: "https://grammy.dev/",
          //description: "The Telegram Bot Framework.",
        }
      ],
      { cache_time: 30 * 24 * 3600 }, // one month in seconds
    );
  });
  
  // Return empty result list for other queries.
  bot.on("inline_query", (ctx) => ctx.answerInlineQuery([]));
*/
// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
//bot.start();






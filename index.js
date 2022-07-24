import nodeTelegramBotApi from "node-telegram-bot-api";
import { config } from "dotenv";
import { getVideoOrAudio } from './request.js'

config()

const TOKEN = process.env.TOKEN

const bot = new nodeTelegramBotApi(TOKEN, { polling: true })

bot.on('message', async (msg) => {
    const chatId = msg.chat.id
    if (msg.text === '/start') {
        bot.sendMessage(chatId, `Assalomu alekum botga hush kelibsiz videoni linkini\nyuboring biz sizga uni video formatini yuboramiz ${msg.from.first_name}`
        )
        await getVideoOrAudio()
    }
})
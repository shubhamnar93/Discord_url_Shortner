const { Client, GatewayIntentBits, messageLink } =require('discord.js');
const axios=require('axios');
require('dotenv').config()

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})

client.on('messageCreate', (message)=>{
    if (message.author.bot) return;
    message.reply({
        content:'use /create to short url and /url to see all the url you have created'
    })
})
client.on('interactionCreate', async(interaction)=>{
    if (interaction.commandName.startsWith('create')){
        const shortUrl=await axios.post('http://localhost:3000/url/',{url:interaction.options.getString('url'), user:interaction.user.username})
        return interaction.reply(shortUrl.data.url)
    }
    if (interaction.commandName.startsWith('url')){
        const shortUrl=await axios.post('http://localhost:3000/url/allUrl',{user:interaction.user.username})
        let allUrls = shortUrl.data.map(data => `http://localhost:3000/url/${data.shortId} - ${data.url} - ${data.visitHistory.length}`).join('\n\n');
        return interaction.reply(allUrls)
    }
    interaction.reply("pong!")
})

client.login(process.env.Bot_Token)
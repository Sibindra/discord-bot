const { Client , Events, GatewayIntentBits } = require('discord.js')
require('dotenv').config()
const token = process.env.DISCORD_TOKEN

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
})

client.once(Events.ClientReady , () =>{
    console.log(`logged in as ${client.user.tag}`)
})

client.login(token)
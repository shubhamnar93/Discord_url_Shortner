const { REST, Routes } = require('discord.js');
require('dotenv').config()

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'create',
    description: 'short url',
    options: [
        {
          name: 'url',
          type: 3,
          description: 'The word after the command',
          required: true
        }
      ]
  },
  {
    name:'url',
    description: 'show all urls created by you'
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.Bot_Token);

(async ()=>{
try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1346729374640111637'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}})();
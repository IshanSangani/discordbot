const {Client , GatewayIntentBits}= require("discord.js")
const axios = require('axios');

const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
]})
require('dotenv').config();


  
  client.on("messageCreate", (message) => {
    console.log(message)
    const content = message.content.toLowerCase();
    
    if(message.content.startsWith("hi kop ka bot")){
        message.reply({
            content:"Hello KING Kop"
        })
    }
    if (message.author.globalName === "Ishan" ) {
      message.reply({
        content: "Kya bolti Public"
      }).catch(console.error);
    }
  });
  
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
  
    const { commandName } = interaction;
  
    // Handle different command names
    if (commandName === 'ping') {
      interaction.reply('https://tenor.com/view/dankjerry-tom-and-jerry-jerry-dank-gif-18715520');
    }

    if (commandName === 'carry') {
        
      const members = await interaction.guild.members.fetch();
      const targetUser = members.get('391383359106056197'); // Replace with the user ID you want to mention
      if (targetUser) {
        await interaction.reply(`Hey <@${targetUser.id}>, NHK?`);
      }
    }

      if (commandName === 'spongebob') {
          await interaction.reply(`https://tenor.com/view/spongebob-backshots-gif-1172518849162068669`);
        }
  });



  client.login(process.env.TOKEN).catch(console.error)
  console.log("Discord Bot Executed");

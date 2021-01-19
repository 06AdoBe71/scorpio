const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.send('Made by **MEHCELHAT** with **Visual Studio Code** and **Glitch**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'Bot hakkında bilgi verir.',
  usage: 'botbilgi'
};
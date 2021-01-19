const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.send('**KAZANANLAR ...** <@613295853616103448>   **ve**   <@763146307338502174>');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-sonuç',
  description:'çekiliş sonucu',
  usage: 'çekiliş-sonuç'
};
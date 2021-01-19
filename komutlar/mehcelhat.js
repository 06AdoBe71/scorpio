const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const furki = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTitle("MEHCELHAT")
      .setTimestamp()
      return message.channel.sendEmbed(furki);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['MEHCELHAT', 'MCH'],
  permLevel: 0
};

exports.help = {
  name: 'MEHCELHAT',
  description: 'MEHCELHAT',
  usage: 'MEHCELHAT'
};

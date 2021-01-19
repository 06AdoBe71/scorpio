const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.send('**GENÇLER BAKIMA GİRİYORUM GİTMEK VAR DÖNMEK YOK DERLER İNŞ BAKIMDAN SAPASAĞLAM ÇIKARIM DUA EDİN** :pleading_face:');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bakım',
  description:'YEDEK KOMUT',
  usage: 'bakım'
};
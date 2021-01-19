const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.send('**Hey!** <@743566419714768917> **BENİM PRO VERSİYONUM ÇIKTI (Henüz tamamlanmadı ama yakında bitecek) ONU SUNUCUNA ALARAK BİZE DESTEK OLABİLİRSİN :) (içinde gizli komutlar var) Almak için** <@622021445337481222> **a DM den mesaj atabilirsin** :)');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pro',
  description:'YEDEK KOMUT',
  usage: 'pro'
};
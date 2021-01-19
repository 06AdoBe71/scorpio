const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args, params) => {
    const prefix = ("s-")
    const infomsj = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} - v2.1 `, client.user.avatarURL) 
  .setDescription(":calendar_spiral: **Kodlanma Tarihi: **" + "25/11/2020" + `\n${client.emojis.get('781411809680556053')} **Yapımcı: **` + "!                 MΣHCΣLHΛT#0001" + `\n${client.emojis.get('781412033618903080')} **Sahip: **` + "!                 MΣHCΣLHΛT#0001" + `\n${client.emojis.get('781411336751415296')} **Discord.js sürümü: ** ` + `v${Discord.version}`+ "\n\n:bust_in_silhouette: **Kullanıcı sayısı **" + `${client.users.size}` + "\n:bar_chart: **Sunucu sayısı **" + `${client.guilds.size}` + `\n${client.emojis.get('781412155919826986')} **RAM Kullanımı : ** ` + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB` +  "\n:military_medal: **Prefix : **" + prefix + "\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬" + "\n[ScOrPiO Pro](https://discord.com/oauth2/authorize?client_id=793842983007027200&scope=bot&permissions=805314622) | [Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=780055938274164736&scope=bot&permissions=2081422591) | [Destek Sunucusu](https://discord.gg/VY6rsT2p6J)")
  .setColor("#df70b7")
  .setTimestamp()
  message.channel.sendEmbed(infomsj);
  message.react(":white_check_mark:");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
    
exports.help = {
  name: 'info',
  description: 'ScOrPiO Info Commands',
  usage: 'info'
};
const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	const istatistikozel = new Discord.RichEmbed()
    .setColor(0x36393F)
.setDescription("Discord Helper Bot İstatistik")
  .addField(` Bot Sahipleri:`, `<@335005334231973889>`, true)
  .addField('<:white_check_mark:> Kırık Parça:', '0/0', true)
	.addField("<:white_check_mark:> Bellek Kullanımı:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("<:white_check_mark:> Sunucu Sayısı:", `${client.guilds.size.toLocaleString()}`, true)
  .addField("<:white_check_mark:> Kullanıcı Sayısı:", `${client.users.size}`, true)
  .addField("<:white_check_mark:> Toplam Kullanıcı Sayısı:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("<:ballot_box_with_check:> Kanal Sayısı:", `${client.channels.size.toLocaleString()}`, true)
  .addField(`<:ballot_box_with_check:> Ne Kadar Süredir Aktif:`, `${duration}`, true)
  .addField("<:ballot_box_with_check:> Ping:", `${client.ping}`, true)
  .addField("<:ballot_box_with_check:> Discord.js Sürümü:", `${Discord.version}`, true)
  .addField(`<:mag_right:> Premium:`, "Aktif", true)
  .addField(`Davet Et`, `[Tıkla](https://discordapp.com/oauth2/authorize?client_id=611195453660200992&scope=bot&permissions=2080767167)`, true)
  message.channel.sendEmbed(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};

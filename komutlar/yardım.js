const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Yardım Menüsü')
  .setDescription(`:white_small_square: \`d!yardım eğlence\` = Eğlence ve Kullanıcı Komutlarını Listeler. \n\n:white_small_square: \`d!yardım moderasyon\` = Moderasyon Komutlarını Listeler. \n\n:white_small_square: \`d!yardım kullanıcı\` = Kullanıcı Komutlarını Listeler. \n\n:white_small_square: \`d!yardım müzik\` = Müzik Komutlarını Gösterir  `)
  message.channel.send({embed})
  }
   if (arg === 'eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('Eğlence  Komutları')
  .setDescription(`:white_small_square: \`d!avatarım\` = Avatarınızı Gösterir. \n:white_small_square: \`d!ara155\` = Polisi Arar. \n:white_small_square: \`d!ascii\` = Ascii olarak yazarsınız. \n:white_small_square: \`d!herkesebendençay\` = Herkese Çay Ismarlarsınız. \n:white_small_square: \`d!çayiç\` = Çay İçersiniz. \n:white_small_square: \`d!çayaşekerat\` = Çaya Şeker Atarsınız. \n:white_small_square: \`d!yumruk-at\` = Yumruk Atarsınız. \n:white_small_square: \`d!wwegif\` = WWE Gifi Atar. \n:white_small_square: \`d!stresçarkı\` = Stres Çarkı Çevirirsin. \n:white_small_square: \`d!çekiç\` = İstediginiz Kişiye Çekiç Atarsınız. \n:white_small_square: \`d!koş\` = Koşarsınız. \n:white_small_square: \`d!yazı-tura\` = Yazı Tura Oynarsınız.  \n:white_small_square: \`d!simit\` = Simit Yersiniz.   \n:white_small_square: \`d!ping\` = Botun Pingini Gösterir. \n:white_small_square: \`d!fbi\` = FBI Gifi Atar. \n:white_small_square: \`d!wasted\` = Profilinize Wasted Efekti Ekler. \n:white_small_square: \`d!söv\` = Yakında.  `)
  message.channel.send(embed)
  }
  if (arg === 'moderasyon' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Moderasyon Komutları:')
      .setDescription(` :white_small_square: \`d!otorol\` = Sunucu için otorol ayarlar. \n:white_small_square: \`d!sayaç-ayarla\` = Sunucu için sayaç ayarlar. \n:white_small_square: \`d!ban\` = İstediginiz Kişiyi Banlar. \n:white_small_square: \`d!unban\` = İstediğiniz Kişini Banını  Açar. \n:white_small_square: \`d!küfür-engelle [aç-kapat]\` = Küfürü Engeller. \n:white_small_square: \`d!link-engelle [aç-kapat]\` = Link Paylaşılmasını Engeller.  \n:white_small_square: \`d!oylama\` = Oylama Yapar. \n:white_small_square: \`d!slowmode\` = Yavaş Modu Açar. \n:white_small_square: \`d!temizle\` = İstediniz Kadar Mesaj Siler. \n:white_small_square: \`d!çekiliş\` = Çekiliş Yaparsınız. \n:white_small_square: \`d!sustur\` = İstediğiniz Kişiyi Geçici Olarak Susturursunuz. \n:white_small_square: \`d!kayıt-sistemi\` = Yakında. `)
      return message.channel.send(embed);
}
   if (arg === 'kullanıcı' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Kullanıcı Komutları:')
      .setDescription(`:white_small_square: \`d!yaz\` = Bota İstediğiniz Şeyi Yazdırırsınız. \n:white_small_square: \`d!sunucuresmi\` = Sunucu Resmini Atar. \n:white_small_square: \`d!nsfw-gif\` = Nsfw Gifi Atar. \n:white_small_square: \`d!yetkilerim\` = Yetkilerinizi Gösterir. \n:white_small_square: \`d!kullanıcıbilgim\` = Bilgilerinizi Gösterir. \n:white_small_square: \`d!ping\` = Botun Pingini Gösterir.  \n:white_small_square: \`d!sunucubilgi\` = Sunucu Hakkında Bilgi Verir. \n:white_small_square: \`d!afk [sebep]\` = AFK Olursunuz. `)   
      return message.channel.send(embed);
}
   if (arg === 'müzik' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Müzik Komutları:')
      .setDescription(`:white_small_square: \`d!çal\` = Bota telifsiz Olan Bütün Şarkıları Açtırabilirsiniz. \n:white_small_square: \`d!geç\` = Sıradaki Şarkıya Geçer. \n:white_small_square: \`d!durdur\` = Şarkıyı Durdur ve Konuşmadan çıkar. \n:white_small_square: \`d!çık\` = Konuşma Yerinden Anında Çıkar. \n:white_small_square: \`d!ses\` = Ses Seviyesini 1 ile 10 arasında değiştirirsiniz. \n:white_small_square: \`d!çalan\` = O anda Çaldığı Şarkıyı Gösterir.  \n:white_small_square: \`d!sıra\` = Sırayı Gösterir. \n:white_small_square: \`d!devam\` = Şarkıya Devam Eder. \n:white_small_square: \`d!duraklat\` = Şarkıyı Duraklatır.`)   
      return message.channel.send(embed);
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};

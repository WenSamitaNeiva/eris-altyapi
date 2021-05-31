const eris = require('eris');
const db = global.client.db;
const ayarlar = global.client.ayarlar;

exports.run = function(client, message, args) {
    message.channel.createMessage("Test")
};

exports.config = {
    "name": "test", //buraya komut ismi
    "aliases": ["deneme", "merhaba"], //diğer kullanım şekilleri
    "usage": "!test", //komutun kullanım şekli
    "description": "Test komutu", //Yardım menüsünde komutun açıklaması
    "permLevel": "none" //burası için permLevels.txt ye bakın
};
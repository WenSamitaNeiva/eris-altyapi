const eris = require('eris');
const db = global.client.db;
const ayarlar = global.client.ayarlar;

exports.run = function(client, message, args) {
    let array = [];
    client.commands.forEach(cmd => {
        array.push(`\`${cmd.config.name}:\` ${cmd.config.description}`)
    })
    message.channel.createMessage(`Komutlar:\n${array}`)
};

exports.config = {
    "name": "yardım",
    "aliases": ["help", "y"],
    "usage": "!yardım",
    "description": "Yardım komutu",
    "permLevel": "none"
};
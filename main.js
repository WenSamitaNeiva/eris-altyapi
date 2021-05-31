const Eris = require("eris");
const ayarlar = require("./ayarlar.json")
const fs = require('fs');
const anticodeClient = new Eris(ayarlar.token);
anticodeClient.ayarlar = ayarlar;
const { Database } = require('npm.db')
const db = anticodeClient.db = new Database("database");
const client = global.client = anticodeClient;


client.commands = new Map();
client.aliases = new Map();

const reqEvent = (event) => require(`./events/${event}`);

client.on('ready', () => reqEvent('ready')(client));
client.on('messageCreate', reqEvent('message'));


fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    console.log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        console.log(`Yüklenen komut: ${props.config.name}.`);
        client.commands.set(props.config.name, props);
        props.config.aliases.forEach(alias => {
            client.aliases.set(alias, props.config.name);
        });
    });
});


client.on("error", (err) => {
  console.error(err);
});

client.connect();
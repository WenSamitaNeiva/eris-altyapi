module.exports = message => {
    let client = global.client;
    let content = message.content.toLowerCase();

    if (message.author.bot) return;
    if (!content.startsWith(client.ayarlar.prefix.toLowerCase())) return;

    let command = content.split(' ')[0].slice(client.ayarlar.prefix.length);
    let args = message.content.split(' ').slice(1);
    let cmd;
    if (client.commands.get(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.get(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    }
    if (cmd) {
        if (cmd.config.permLevel) {
            if(!cmd.config.permLevel == "none") {
                if (cmd.config.permLevel == "botOwner") {
                    if(message.author.id !== client.ayarlar.sahip) return;
                } else if (cmd.config.permLevel == "guildOwner") {
                    if(message.author.id !== message.guild.owner.id) return;
                } else {
                    if(!message.member.permissions.has(cmd.config.permLevel)) return;
                };
            };
        };
        cmd.run(client, message, args);
    }
}
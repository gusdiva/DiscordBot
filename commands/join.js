const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "join",
        aliases: ["j"],
        description: "Join The Voice Channel!",
        usage: "join",
    },
    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel!", message.channel);
    
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
          }
    
            const Embed = new MessageEmbed()
            .setAuthor("Join Voice Channel", "https://cdn.discordapp.com/attachments/817409484971573340/817409539342204999/ezgif.com-gif-maker_18.gif")
            .setColor("GREEN")
            .setTitle("Success")
            .setDescription("🎶 Join The Voice Channel.")
            .setTimestamp();

            return message.channel.send(Embed).catch(() => message.channel.send("🎶 Join The Voice Channel :D"));
    }
}
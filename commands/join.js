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
            .setAuthor("Join Voice Channel", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            .setColor("GREEN")
            .setTitle("Success")
            .setDescription("🎶 Join The Voice Channel.")
            .setTimestamp();

            return message.channel.send(Embed).catch(() => message.channel.send("🎶 Join The Voice Channel :D"));
    }
}
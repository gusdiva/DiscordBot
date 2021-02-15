const { MessageEmbed } = require("discord.js");
const { Collection, Client } = require("discord.js");

const client = new Client();
client.commands = new Collection();
client.queue = new Map()

module.exports = {
    info: {
        name: "embed",
        aliases:[""],
        description: "Message Embed (For Specific Role Member)",
        usage: "[For Mod]",
    },
    
    run:async(bot,message,args)=>{
        if(!message.member.roles.cache.some(r => ["Discord Admin","KING","BOY"].includes(r.name))) return message.channel.send({
            embed: {
                "color": 0xff4248, //Can be hex with 0x added at the start. Or you can use a decimal number, for example, 16711680
                "author": {
                  "name": "You do not have the correct permissions"
                }
              }
          })
        let Embed = new MessageEmbed()
        .setAuthor (`IZ*ONEkkoya`)
    .setTitle('Friendly Reminder / Sekedar Mengingatkan')
    .setImage("https://thumbs.gfycat.com/NegligibleGlitteringBats-size_restricted.gif")
    .setDescription(`:flag_gb: | Annyeonghaseyo Wijeuwon! Just a friendly reminder, let's donate for the online concert stream!

    :flag_id: | Annyeonghaseyo Wijeuwon! Sekedar mengingatkan, skuy donasi untuk streaming konser online!`)
    .setColor('BLUE')
    .setFooter()
    .setTimestamp();
    message.channel.send(Embed)
    }
}
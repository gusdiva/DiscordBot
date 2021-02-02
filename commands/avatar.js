const { MessageEmbed } = require("discord.js");
module.exports={
    info:{
        name: "avatar",
        description: "Get your own or someone else's avatar",
        usage: "[user mention]",
        category: "commands",
        aliases: ["av"]
    },


    run:async(bot,message,args)=>{
        let Embed = new MessageEmbed()
        if(!message.mentions.users.first()){
            Embed.setTitle(`Your Avatar!`)
            Embed.setImage(message.author.displayAvatarURL({size:2048}))
            Embed.setColor(`RANDOM`)
            return message.channel.send(Embed)
        }else{
            let User = message.mentions.users.first()
            Embed.setTitle(`${User.tag}'s avatar!`)
            Embed.setImage(User.displayAvatarURL({size:2048}))
            Embed.setColor(`RANDOM`)
            return message.channel.send(Embed)
        }
    }
}
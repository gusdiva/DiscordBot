require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()

client.config = {
  prefix: process.env.PREFIX
}

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});
client.on('message', msg=>{
  if(msg.content === '*embed'){
    
    let embed = new MessageEmbed()
    .setAuthor (`IZ*ONEkkoya`)
    .setTitle('Friendly Reminder / Sekedar Mengingatkan')
    .setImage("https://data.whicdn.com/images/335062504/original.gif")
    .setDescription(`:flag_gb: | Annyeonghaseyo Wijeuwon! Just a friendly reminder, let's donate for the online concert stream!

    :flag_id: | Annyeonghaseyo Wijeuwon! Sekedar mengingatkan, skuy donasi untuk streaming konser online!`)
    .setColor('BLUE')
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp();
    msg.channel.send(embed)
  }
})

//Logging in to discord
client.login(process.env.TOKEN)

const client = require("../index");
module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);

  const arrayOfStatus = [
    `IZ*ONE`,
    `ONE-REELER/ACT IV`,
    `ONEIRIC DIARY`,
    `BLOOM*IZ`,
    `HEART*IZ`,
    `COLOR*IZ`,
    `${client.guilds.cache.size} servers`,
    //`${client.channels.cache.size} channels`,
    `${client.users.cache.size} users`,
    //`${client.user.tag} discord bot!`,
    `${client.config.prefix}help`
  ];
  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index =0;
    const status = arrayOfStatus[index];
    console.log(status);
    client.user.setActivity(status,{type: "LISTENING"});
    index++;
  }, 10000)

};

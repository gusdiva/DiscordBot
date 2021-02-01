module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("IZ*ONE", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  
  });
};

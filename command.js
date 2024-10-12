const { REST, Routes }= require("discord.js");
const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];
  const rest = new REST({ version: '10' }).setToken("MTI5NDY1MTY5NjM2NTk2NTMzNA.Gt8VIc.0QTEDgnzu8o85dSnrf7gNX2SoF271Wg9IA3-pc");
  
  (async () =>{
    try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1294651696365965334"),
     { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
  
})();

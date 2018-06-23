const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.config = config;

console.log("Ready to level up!");

client.on("message", async message => {
  const prefix = co.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.author.id !== client.user.id || message.content.indexOf(client.config.prefix) !== 0) return;

  if (command === "1") {
    var count = 1; // Number of messages sent (modified by sendSpamMessage)
    var maxMessages = 100000; // Change based on how many messages you want sent

    function sendSpamMessage() {
  
      message.channel.send("leve" + count);

      if (count < maxMessages) {
   
        message.channel.send("");
        count++;

    
        let minTime = Math.ceil(2112);  // Rush RP1
        let maxTime = Math.floor(3779); // Arbitrary integer
        let timeToWait = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
        setTimeout(sendSpamMessage, timeToWait);
      } else {

        message.channel.send("------------------");
        message.channel.send("I AM FINISHED!!!");
        message.channel.send("------------------");
      }
    }

    message.delete().catch(O_o=>{})
    sendSpamMessage();
  }

  if (command === "2") {
    message.channel.fetchMessages()
    .then(messages => {
      let message_array = messages.array();
      message_array.length = 2;
      message_array.map(msg => msg.delete().catch(O_o => {}));
     });
  }
});

client.login(config.botToken);

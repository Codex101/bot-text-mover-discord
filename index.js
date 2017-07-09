const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = "RANDOM ASS TOKEN";
const ARRPREFIX = ["**", ";;", "!t", "!overwatch", "^^", "!", "!stc"];

bot.on("ready", function() {
	// console.log("Ready");
});

bot.on("message", function(message) {

	// console.log(message.content);

	var argv = message.content.substr(ARRPREFIX[0].length).split(" ");


	// Loops through and checks if the message starts with the prefixes.
	for(var i = 0; i<ARRPREFIX.length; i++)
	{

		if ( message.content.startsWith(ARRPREFIX[i]))
		{
			// console.log("Array works");

			// Checks if message is not posted in bots channel, then resends message
			// to bots channel and deletes orignal.
			if ( message.channel.id != message.guild.channels.find("name", "bots").id )
			{
				switch(argv[0].toLowerCase() )
				{
					case "inv":
						message.channel.send("https://discordapp.com/oauth2/authorize?client_id=318786562164916225&scope=bot&permissions=268921936");
						break;
				}

				message.guild.channels.find("name", "bots").send("Message sent by "+message.author.username+"\n```"+message.content+"```");
				message.delete(10000);

				// console.log("Not bot channel");
				break;
			}
			break;
		}
	}

	if ( message.channel.id != message.guild.channels.find("name", "bots").id )
	{
		// If the message is from a bot, resent to bot channel and delete it.
		// Outside for loop as bots don't use prefixes to start message.
		if ( message.author.bot)
		{
			// console.log("Is bot, works")
			message.guild.channels.find("name", "bots").send("Message sent by "+message.author.username+"\n```"+message.content+"```");
			message.delete(10000);
			return;
		}
		// console.log("Not bot channel");
		return;
	}

});

bot.login(TOKEN);

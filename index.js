const { Client, MessageEmbed } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const { daltonQuotes, daltonTips } = require("./daltonQuotes");
require("dotenv").config();

generateRandomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

client.on("ready", () => {
  console.log("DaltonSandro is ALIVE!");
});

client.on("message", (msg) => {
  const botName = client.user.username;
  const movement = generateRandomNumber(10, 1);
  let frase;

  if (msg.content === "!dalton") {
    msg.reply(
      `El ${botName} te dice: ${
        daltonQuotes[generateRandomNumber(daltonQuotes.length, 1)]
      }`
    );
  }
  if (msg.content === "!daltontips") {
    const embed = new MessageEmbed()
      .setColor("#ABCDAA")
      .addField(
        "Dalton TIP",
        daltonTips[generateRandomNumber(daltonTips.length, 1)]
      )
      .setThumbnail(
        "https://i.ibb.co/6sjmpMn/Whats-App-Image-2022-03-15-at-7-40-16-PM.jpg"
      );

    msg.channel.send({ embeds: [embed] });
  }

  if (msg.content === "!botrank") {
    if (movement < 3) {
      frase = "Tremendo conito";
    } else if (movement >= 3 && movement < 7) {
      frase = "Bastante decente...";
    } else if (movement >= 7 && movement < 10) {
      frase = "Casi como yo papi eh, bien!";
    } else {
      frase = "GOD";
    }

    msg.reply(
      `El ${botName} dice que tu nivel de bot es de ${movement} sobre ${10}. ${frase}`
    );
  }
});

// Logineamos
client.login(process.env.DISCORD_TOKEN);

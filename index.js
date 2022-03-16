const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const daltonQuotes = [
  "Cerrá el orto boludito",
  "bot movements",
  "choco la puta madre",
  "Quién me presta cuenta?",
  "nefasto...",
  "pajarito",
  "cerrá el orto",
  "así no vas a mejorar",
  "Rodro necesito que subas rápido de rango...",
  "Qué te iba a decir...?",
  "boludito",
  "Soy daltónico, no pelotudo",
  "Subile el volúmen a tus auris",
  "Marian, sentate bien...",
  "uuuuh, la boquearon estos novas...",
  "Consigan gente!",
  "Por eso no me gusta cuando no somos 5...",
  "A pedazos",
  "En breve Vicky sube a AK y desinstala",
  "Rodro, haceme caso a las calls",
];

const daltonTips = [
  "Rodro, holdeá ataúd",
  "No te mostrés más!",
  "Marian baiteá",
  "RODRO APUNTA MAS ARRIBA",
  "En este mapa es clave dominar banana",
  "Era eco Rodro...",
  "RODRO, COMPRÁ",
  "Yo te miro palacio, vos mirame caverna",
];

const generateRandomQuote = () => {
  return Math.floor(Math.random() * (daltonQuotes.length - 1) + 1);
};

const generateRandomTip = () => {
  return Math.floor(Math.random() * (daltonTips.length - 1) + 1);
};

const generateBotMovement = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

client.on("ready", () => {
  console.log("Daltonto");
});

client.on("message", (msg) => {
  const botName = client.user.username;
  if (msg.content === "!dalton") {
    msg.reply(`El ${botName} te dice: ${daltonQuotes[generateRandomQuote()]}`);
  }
});

client.on("message", (msg) => {
  const botName = client.user.username;
  if (msg.content === "!daltontips") {
    msg.reply(`El ${botName} te dice: ${daltonTips[generateRandomTip()]}`);
  }
});

client.on("message", (msg) => {
  const botName = client.user.username;
  const max = 10;
  const min = 1;
  const movement = generateBotMovement(max, min);

  let frase;

  if (movement < 3) {
    frase = "Tremendo conito";
  } else if (movement >= 3 && movement < 7) {
    frase = "Bastante decente...";
  } else if (movement >= 7 && movement < 10) {
    frase = "Casi como yo papi eh, bien!";
  } else {
    frase = "GOD";
  }

  if (msg.content === "!botrank") {
    msg.reply(
      `El ${botName} dice que tu nivel de bot es de '${movement}' sobre ${max}. ${frase}`
    );
  }
});

// Logineamos
client.login("OTUzNDE0ODc2MTI5MjY3NzIy.YjEOzA.A7EkukK_NMmnMLuyCBCOI4g6wpE");

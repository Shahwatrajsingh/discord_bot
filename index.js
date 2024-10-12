const { Client, GatewayIntentBits, Message, messageLink } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
         GatewayIntentBits.MessageContent,
        ],
     });
     const chatResponses = {
        'hi': 'Hello!',
        'hello': 'Hi there!',
        'how are you': 'I\'m fine, thanks for asking. How are you?',
        'what\'s up': 'Not much, just hanging out. How about you?',
        'hey': 'Hey there!',
        'sup': 'Not much, just chilling. You?',
        'what\'s good': 'Everything is good! How about you?',
        'how\'s it going': 'Going great, thanks for asking. How about you?',
        'what\'s new': 'Not much new, just the same old, same old. How about you?',
        'what\'s happening': 'Not much, just enjoying the day. How about you?',
        'what\'s up with you': 'Nothing much, just doing my thing. How about you?',
        'how have you been': 'I\'ve been doing well, thanks for asking. How about you?',
        'how\'s life': 'Life is good, can\'t complain. How about you?',
        'how\'s it hanging': 'Hanging in there, thanks for asking. How about you?',
        'how\'s it going': 'Going well, thanks for asking. How about you?',
        'what\'s crackin\'': 'Not much, just chilling. How about you?',
        'what\'s popping': 'Not much, just enjoying the day. How about you?',
        'what\'s shaking': 'Not much, just relaxing. How about you?',
        'what\'s up with you today': 'Not much, just the usual. How about you?',
        'how\'s your day been': 'My day has been good, thanks for asking. How about yours?',
        'how\'s your day going': 'My day is going well, thanks for asking. How about yours?',
        'how\'s it been': 'It\'s been good, thanks for asking. How about you?',
        'how\'s everything': 'Everything is great, thanks for asking. How about you?',
        'how\'s it all going': 'It\'s all going well, thanks for asking. How about you?',
        'how\'s it hanging buddy': 'Hanging in there, thanks for asking. How about you?',
        'how\'s it going man': 'Going good, thanks for asking. How about you?',
        'how\'s it going friend': 'Going well, thanks for asking. How about you?',
        'how\'s it going dude': 'Going great, thanks for asking. How about you?',
        'how\'s it going bro': 'Going awesome, thanks for asking. How about you?',
        'how\'s it going pal': 'Going fantastic, thanks for asking. How about you?',
        'how\'s it going mate': 'Going splendidly, thanks for asking. How about you?',
        'how\'s it going homie': 'Going wonderfully, thanks for asking. How about you?',
        'how\'s it going buddy': 'Going marvelously, thanks for asking. How about you?',
        'how\'s it going amigo': 'Going swimmingly, thanks for asking. How about you?',
        'how\'s it going comrade': 'Going excellently, thanks for asking. How about you?',
        'how\'s it going partner': 'Going superbly, thanks for asking. How about you?',
        'how\'s it going chief': 'Going brilliantly, thanks for asking. How about you?',
        'how\'s it going boss': 'Going fantastically, thanks for asking. How about you?',
        'kaise ho': 'mai badiya tum batao',
     };    
     client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
    
    client.on('messageCreate', (message) => {
        if (message.author.bot) return;
    
        const lowercaseMessage = message.content.toLowerCase();
        const response = chatResponses[lowercaseMessage];
    
        if (response) {
            console.log(`User said: ${message.content}`);
            console.log(`Bot responding: ${response}`);
            message.reply(response);
        }
    });
    
    

require('dotenv').config();

const token = process.env.TOKEN;

client.login(token);
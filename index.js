const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();
const fetch = require('node-fetch');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (message.content === prefix) {
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		message.channel.send(file);
	}
});

client.login(process.env.token);

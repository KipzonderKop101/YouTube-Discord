const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('YouTube interaction is logged in.');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
        try {
            await interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        } catch (error) {
            await interaction.reply('Oops, we ran into an error. Please try again in a few minutes, if this issue persists, please contact us.');
            console.log(error);
        }
	}
});

client.login(token);

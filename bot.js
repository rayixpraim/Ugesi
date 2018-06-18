console.log('Bot listo Ratix');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message',(message) => {
        if (message.content == 'Ugesi marico') {
                message.channel.sendMessage('Marico el papa tuyo');
        }
        
        if (message.content == 'uwu') {
                message.channel.sendMessage('Tu si eres marico');
        }

        if (message.content == ':v') {
                message.channel.sendMessage('Webon detectado');
        }

        if (message.content == 'golda ratosa') {
                message.channel.sendMessage('Quien te dio permiso de nombrar a mi madre? mamahuevo');
        }

        if (message.content == 'Como estan?') {
                message.channel.sendMessage('Preguntale a la mama tuya');
        }

        if (message.content == 'K pex') {
                message.channel.sendMessage('No se que significa pero, el coño de tu madre');
        }

        if (message.content == 'K') {
                message.channel.sendMessage('Pero que verga, usa el q y tambien k, qk JAJAJJAJAJAJA SALUDOS')
        }

        if (message.content == 'Ola') {
                message.channel.sendMessage('Tsunami MARDITO')

        }

        if (message.content == 'Cuando te vi, a mi se me paro') {
                message.channel.sendMessage('Ayyyy')  
        }

        if (message.content == 'El corazon') {
                message.channel.sendMessage('Ahhhh') 
        }

        if (message.content == 'Y cuando te volvi a ver, se me volvio a parar') {
                message.channel.sendMessage('Ayyyy tu si eres pato')
        }

        if (message.content == 'La respiracion') {
                message.channel.sendMessage('Ahhhh era pah ver')
        }
        if (message.content == 'Hey gente') {
                message.channel.sendMessage('Epale menor, hablame cloro')

        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

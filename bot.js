const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`FIVE SERVER`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);


//الرد التلقائي

client.on('message', msg => {
    if (msg.content === 'هلا') {
       msg.reply('هلا بيك ');
      }
    });

    client.on('message', msg => {
        if (msg.content === 'اهلا') {
           msg.reply('و سهلا');
          }
        });

        client.on('message', msg => {
            if (msg.content === 'ممكن كريديت بليز') {
               msg.reply('مش هينفع اسف ... بس قريبا انشاء الله ممكن نعمل مسابقات و ممكن نعمل نظام دعوات');
              }
            });

client.on('message', msg => {
    if (msg.content === 'اوك') {
       msg.reply('اوك');
      }
    });

client.on('message', msg => {
    if (msg.content === 'K') {
       msg.reply('ok');
      }
    });

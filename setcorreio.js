const Discord = require("discord.js");        
const db = require("quick.db");

module.exports = {
 
        name: "setcorreio",

        description: "Seta o canal de correio",

    run: async (client, message, args) => {

let cc = message.mentions.channels.first();
if(!cc) return message.reply
("Você deve marcar o canal!")


        





db.set(`correio_${message.guild.id}`, cc.id)

let embed = new Discord.MessageEmbed()
.setTitle("Configurado!")


message.channel.send({embeds: [embed]})


       
    }
}
const Discord = require("discord.js");        
const db = require("quick.db");

module.exports = {
 
        name: "setrole",

        description: "Seta o cargo de analisador",

    run: async (client, message, args) => {

let ha = message.mentions.roles.first();
if(!ha) return message.reply
("Você deve marcar o cargo!")


        





db.set(`role_${message.guild.id}`, ha.id)

let embed = new Discord.MessageEmbed()
.setTitle("Configurado!")


message.channel.send({embeds: [embed]})


       
    }
}
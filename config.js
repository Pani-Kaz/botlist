const Discord = require("discord.js");        
const db = require("quick.db");

module.exports = {
 
        name: "config",

        description: "Configs o sistema de botlist",

    run: async (client, message, args) => {

        let a = db.get(`addbot_${message.guild.id}`)
        let b = db.get(`logs_${message.guild.id}`)
        let c = db.get(`correio_${message.guild.id}`)
        let v = db.get(`votos_${message.guild.id}`)
        let r = db.get(`role_${message.guild.id}`)
        if(!a == null) a = `<#${a}>`
        if(!b == null) b = `<#${b}>`
        if(!c == null) c = `<#${c}>`
        if(!v == null) v = `<#${v}>`
        if(!r == null) r = `<@&${r}>`

        if(a == null) a = "Nada aqui"
        if(b == null) b = "Nada aqui"
        if(c == null) c = "Nada aqui"
        if(v == null) v = "Nada aqui"
        if(r == null) r = "Nada aqui"
        







let embed = new Discord.MessageEmbed()
.setTitle("Painel BotList")
.addField("Addbot", `${a}`)
.addField("Logs", `${b}`)
.addField("Votos", `${v}`)
.addField("Correio", `${c}`)
.addField("Cargo analisador", `${r}`)

message.channel.send({embeds: [embed]})


       
    }
}
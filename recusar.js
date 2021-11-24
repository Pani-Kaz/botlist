const Discord = require("discord.js");
const config  = require("../config.json")
const db = require("quick.db")
 
module.exports = {
    name: 'recusar',
    description: "Recuse um bot bot",
    author: "Pani Kaz#88",
run: (client, message, args) => {
    let bot = message.mentions.members.first()
    if(!bot) return message.reply("Você deve mencionar o bot!")
    let addbot = db.get(`addbot_${message.guild.id}`)
    const canal = client.channels.cache.get(addbot)
if(!canal) return message.reply("Canal addbot não foi setado!") 

let bt =    db.get(`prefix_${message.guild.id}_${bot.id}`)
let role = db.get(`role_${message.guild.id}`)

if(!message.member.roles.cache.get(role)) return message.reply("Você não pode usar esse comando!")

    if(!bt == null) return message.reply(`Esse bot n existe!!!`)


let logs = db.get(`logs_${message.guild.id}`)
const l = client.channels.cache.get(logs)
if(!l) return message.reply("Canal logs não foi setado!") 
let correio = db.get(`correio_${message.guild.id}`)
const cs = client.channels.cache.get(correio)
if(!cs) return message.reply("Canal correio não foi setado!") 




bot.kick({reason: "Reprovado!"})
db.delete(`prefix_${message.guild.id}_${bot.id}`)
db.delete(`desc_${message.guild.id}_${bot.id}`)
    message.channel.send({content: "Bot reporvado!!!"})
    let sd = new Discord.MessageEmbed()
    .setTitle("Bot recusado!")
    .setDescription(`${bot} | Foi recusado!`)
    l.send({embeds:[sd]})




}
 
}
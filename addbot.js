const Discord = require("discord.js");
const config  = require("../config.json")
const db = require("quick.db")
 
module.exports = {
    name: 'addbot',
    description: "Adicione seu bot",
    author: "Pani Kaz#88",
run: (client, message, args) => {
    let addbot = db.get(`addbot_${message.guild.id}`)
    const canal = client.channels.cache.get(addbot)
if(!canal) return message.reply("Canal addbot não foi setado!") 


if(message.channel.id == canal.id) {



let logs = db.get(`logs_${message.guild.id}`)
const l = client.channels.cache.get(logs)
if(!l) return message.reply("Canal logs não foi setado!") 
let correio = db.get(`correio_${message.guild.id}`)
const cs = client.channels.cache.get(correio)
if(!cs) return message.reply("Canal correio não foi setado!") 


    let embeds = new Discord.MessageEmbed()
    .setTitle("Olá! Addbot")
.setDescription("Qual o id do seu bot?")
.setColor(config.embed)

 
 

    message.channel.send({ embeds: [embeds]}).then(msg => {



        let cp = message.channel.createMessageCollector({max: 1})
        .on('collect', c => {
            if(c.author.id == message.author.id) {
            c.delete()
           
            id = c.content
            cp.stop()
            if(id.length > 30) return message.reply({content: "\`|\` O id não pode passar de 30 caracteres"})

   

    const embed =  new Discord.MessageEmbed() 
    .setTitle("Olá! Addbot")
.addField('Id:', `\`${id}\``)
    .setDescription("Qual o prefix do seu bot?")
    .setColor(config.embed)
           msg.edit({ embeds: [embed]}).then(msg2 => {
            if(c.author.id == message.author.id) {
         
                    if(message.author.bot) return;
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        c.delete()
                      
                        cl.stop()
                        prefix = c.content
                        cl.stop()
                        if(prefix.length > 5) return message.reply({content: " \`|\` O prefix não pode passar de 5 caracteres"})


                 
                  
                        const embed = new Discord.MessageEmbed() 
                        .setTitle("Olá! Addbot")
                        .addField('Id:', `\`${id}\``)
                    
                        .addField('prefix:', `\`${prefix}\``)
                    
                        .setDescription("Qual a desc do seu bot?")
                        .setColor(config.embed)
                       msg.edit({ embeds: [embed]} ).then(msg3 => {
                            if(message.author.bot) return;
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                if(c.author.id == message.author.id) {
                                c.delete()
            
                                ck.stop()
                                if(message.author.bot) return;
                                
                                desc = c.content
                                if(desc.length > 200) return message.reply({content: " \`|\`A desc não pode passar de 200 caracteres"})
    
            
                               msg.delete()
                               let logs = new Discord.MessageEmbed()
                               .setDescription(`${message.author.username} enviou seu bot para analise`)
                               l.send({ embeds: [logs]})

 
                                let embed = new Discord.MessageEmbed()
 
                                .setColor(config.embed)
                                .setTitle("Novo bot!")
                                .addField('Id:', `\`${id}\``)
.addField('Prefix:', `\`${prefix}\``)
.addField('Desc:', `\`${desc}\``)
.setDescription(`[adicionar](https://discord.com/api/oauth2/authorize?client_id=${id}&permissions=0&response_type=code&scope=bot%20applications.commands&prompt=none)`)
                    

 
                                cs.send({ embeds: [embed]} ).then(msg =>{
                                    db.set(`bots_${message.guild.id}_${message.author.id}`, msg.url)
                        
                                    db.set(`prefix_${message.guild.id}_${id}`, prefix)
                                    db.set(`desc_${message.guild.id}_${id}`, desc)
                                })

 
                            } 
                            })
                       
                        })
                    })
                }  
                })
            }   
        })
    
})
return


} 
message.reply(`Esse comando só pode ser usado em <#${addbot}>`)

}
 
}
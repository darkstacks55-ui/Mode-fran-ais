module.exports = {

config:{
name:"give",
aliases:["pay","send"],
version:"2.0",
author:"CRIMSON 🖇️🩵🪽",
countDown:10,
role:0,
shortDescription:"Donner argent 💸",
category:"𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝙀"
},


onStart: async function({args,message,usersData,event}){


const senderID = event.senderID;


const receiverID =
Object.keys(event.mentions || {})[0] || args[0];


const amount =
parseInt(args[1] || args[0]);



if(!receiverID || !amount)

return message.reply(
`💸 Utilisation :

.give @pseudo montant`
);



if(receiverID === senderID)

return message.reply(
"❌ Tu ne peux pas t'envoyer de l'argent."
);



const sender =
await usersData.get(senderID);


const receiver =
await usersData.get(receiverID);



if(sender.money < amount)

return message.reply(
"❌ Solde insuffisant."
);



const taxe = Math.floor(amount * 0.05);

const reçu = amount - taxe;



await usersData.set(senderID,{
money: sender.money - amount
});


await usersData.set(receiverID,{
money: receiver.money + reçu
});



const senderName =
sender.name || "Utilisateur";


const receiverName =
receiver.name || "Utilisateur";



return message.reply(
`╭━━━ 💸 𝗧𝗥𝗔𝗡𝗦𝗙𝗘𝗥𝗧 💸 ━━━╮

✅ Transaction réussie

👤 De :
${senderName}

👥 Vers :
${receiverName}

💰 Envoyé :
${amount}💲

🏦 Taxe :
-${taxe}💲

🎁 Reçu :
+${reçu}💲

👑 CRIMSON 🖇️🩵🪽`
);


}

};

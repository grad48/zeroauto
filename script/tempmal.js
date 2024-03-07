const axios = require('axios');

module.exports.config = {
  name: 'tempmail',
  version: '1.0.0',
  role: 0,
  credits: 'HaonJS',
  aliases: ['temp','mail'],
  description: '𝗧𝗲𝗺𝗽𝗺𝗮𝗶𝗹 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗆𝖺𝖽𝖾 𝖻𝗒 𝖧𝖺𝗈𝗇𝖩𝖲 𝗂𝗌 𝗎𝗌𝖾 𝗍𝗈 𝗀𝖾𝗇𝖾𝗋𝖺𝗍𝖾 𝖺 𝗍𝖾𝗆𝗉𝗈𝗋𝖺𝗋𝗒 𝗆𝖺𝗂𝗅 𝖺𝗇𝖽 𝗍𝗈 𝖿𝖾𝗍𝖼𝗁 𝗂𝗇𝖻𝗈𝗑 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗀𝖾𝗇𝖾𝗋𝖺𝗍𝖾𝖽 𝗆𝖺𝗂𝗅.'
};

exports.run = async ({ api, event, args }) => {
  try {
    if (args[0] === 'inbox') {
      const email = args[1];
      if (!email) return api.sendMessage('Please provide a temporary email.', event.threadID);

      const response = await axios.get(`https://tempemailapi.onrender.com/get/${email}`);
      const messages = response.data;

      if (messages && messages.length > 0) {
        let messageText = `📥 | 𝗜𝗡𝗕𝗢𝗫 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 \n━━━━━━━━━━━━━━━━━━━\n𝖧𝖾𝗋𝖾 𝗂𝗌 𝖺 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗌𝖾𝗇𝖽𝖾𝗋 ${message.from}\n━━━━━━━━━━━━━━━━━━━\n`;
        for (const message of messages) {
          messageText += `📩  :「 𝚂𝙴𝙽𝙳𝙴𝚁 」: ${message.from}\n\n`;
          messageText += `📝  :「 𝚂𝚄𝙱𝙹𝙴𝙲𝚃 」: ${message.subject}\n\n`;
          messageText += `💭  :「 𝙱𝙾𝙳𝚈 」: ${message.body}\n\n`;
          messageText += `📅  :「 𝙳𝙰𝚃𝙴 」: ${message.date}\n━━━━━━━━━━━━━━━━━━━\n`;
        }
        return api.sendMessage(messageText, event.threadID);
      } else {
        return api.sendMessage(`📥  | 𝗜𝗡𝗕𝗢𝗫 𝗠𝗘𝗦𝗦𝗔𝗚𝗘\n━━━━━━━━━━━━━━━━━━━\n❎ | 𝖳𝗁𝖾𝗋𝖾'𝗌 𝗇𝗈 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗐𝖺𝗌 𝖿𝗈𝗎𝗇𝖽 𝗈𝗇 𝗍𝗁𝗂𝗌 𝖾𝗆𝖺𝗂𝗅: ${email}.`, event.threadID);
      }
    } else {
      const response = await axios.get('https://tempemailapi.onrender.com/get');
      const email = response.data.email;

      if (!email) return api.sendMessage('🔴 | 𝖥𝖺𝗂𝗅𝖾𝖽 𝗍𝗈 𝗀𝖾𝗇𝖾𝗋𝖺𝗍𝖾 𝗍𝗁𝖾 𝗍𝖾𝗆𝗉𝗈𝗋𝖺𝗋𝗒 𝖾𝗆𝖺𝗂𝗅.', event.threadID);
      
      return api.sendMessage(`✉️ | 𝗧𝗘𝗠𝗣𝗠𝗔𝗜𝗟\n━━━━━━━━━━━━━━━━━━━\n𝖧𝖾𝗋𝖾'𝗌 𝖸𝗈𝗎𝗋 𝖳𝖾𝗆𝗉𝗈𝗋𝖺𝗋𝗒 𝖬𝖺𝗂𝗅\n\n${email}`, event.threadID);
    }
  } catch (error) {
    console.error('Error:', error);
    return api.sendMessage('🔴 | 𝖠𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝗒𝗈𝗎𝗋 𝗋𝖾𝗊𝗎𝖾𝗌𝗍.', event.threadID);
  }
};

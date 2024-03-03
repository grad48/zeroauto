module.exports.config = {
    name: 'سيم',
    version: '1.0.0',
    role: 0,
    description: "انخرط في محادثة مع روبوت يعمل بالذكاء الاصطناعي",
    usage: "سيم [prompt]",
    credits: 'Developer',
    cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const input = args.join(" ");

    if (!input) {
        api.sendMessage("يرجى تقديم رسالة نصية. الاستخدام: سيم [نص]", event.threadID, event.messageID);
        return;
    }
    try {  
        const content = encodeURIComponent(input);
        const response = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=ph&message=${content}&filter=false`);
        const responseData = response.data;
        if (responseData.error) {
            api.sendMessage("حدث خطأ. الرجاء معاودة المحاولة في وقت لاحق.", event.threadID, event.messageID);
        } else {
            api.sendMessage(responseData.success, event.threadID, event.messageID);
        }
    } catch (error) {
        api.sendMessage("حدث خطأ أثناء جلب البيانات.", event.threadID, event.messageID);
    }
};

module.exports.config = {
    name: 'تعليم',
    version: '1.0.0',
    role: 0,
    description: "قم بتعليم الروبوت أن يستجيب مثل الشخص",
    usage: "تعليم [question] | [answer]",
    credits: 'Developer',
    cooldown: 3,
};


module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID } = event;
    const input = args.join(" ").split("|");

    if (input.length < 2) {
        if(args.length == 0){
            return api.sendMessage("الاستخدام: تعليم [سؤال] | [إجابة]", threadID, messageID);
        } else if(args.join(" ").includes("|")) {
            return api.sendMessage("يرجى تقديم سؤال وإجابة.", threadID, messageID);
        } else {
            return api.sendMessage("الرجاء استخدام '|' حرف للفصل بين السؤال والجواب.", threadID, messageID);
        }
    }
    const question = encodeURIComponent(input[0].trim());
    const answer = encodeURIComponent(input[1].trim());

    try {
        const response = await axios.get(`https://simsimi.fun/api/v2/?mode=teach&lang=ph&message=${question}&answer=${answer}`);
        const responseData = response.data;
        if (responseData.error) {
            api.sendMessage(`Error: ${responseData.error}`, threadID, messageID);
        } else {
            api.sendMessage(`تم ${input[0].trim()} | إجابة: ${input[1].trim()}`, threadID, messageID);
        }
    } catch (error) {
        api.sendMessage("حدث خطأ أثناء جلب البيانات.", threadID, messageID);
    }
};

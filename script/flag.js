module.exports.config = {
    name: "اعلام",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "لعبة احزر العلم",
    usages: ["لعبة"],
    credits: "🄶🄰🄼🄴",
    hasPrefix: true,
    cooldowns: 0
};

const fs = require('fs');
const axios = require('axios');
const tempImageFilePath = __dirname + "/cache/flg.jpg";

module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const userAnswer = event.body.trim().toLowerCase();
    const correctAnswer = handleReply.correctAnswer.toLowerCase();
    const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    if (userAnswer === correctAnswer) {
        Currencies.increaseMoney(event.senderID, 50);
        api.sendMessage(`تهانينا ${userName} إجابتك صحيحة، لقد حصلت على 50 دولار`, event.threadID);

        api.unsendMessage(handleReply.messageID);
    } else {
        api.sendMessage(`خطأ، حاول مرة أخرى`, event.threadID);
    }

    fs.unlinkSync(tempImageFilePath);
};

module.exports.run = async function ({ api, event, args }) {
    const questions = [
        

{"F":"https://i.imgur.com/7CeC4ln.jpg",
"N":"افغانستان"},
{"F":"https://i.imgur.com/1mbQUjL.jpg",
"N":"البانيا"},
{"F":"https://i.imgur.com/QAqpW8G.jpg",
"N":"اندورا"},
{"F":"https://i.imgur.com/WJW4Zk8.jpg",
"N":"انغولا"},
{"F":"https://i.imgur.com/xzQOd6W.jpg",
"N":"ارجنتين"},
{"F":"https://i.imgur.com/WxxWfcr.jpg",
"N":"ارمينيا"},
{"F":"https://i.imgur.com/VtTdNbK.jpg",
"N":"استراليا"},
{"F":"https://i.imgur.com/KWyo2ZL.png",
"N":"الدنمارك"},
{"F":"https://i.imgur.com/FUbDjrN.png",
"N":"كندا"},
{"F":"https://i.imgur.com/agdbPcW.png",
"N":"الصين"},
{"F":"https://i.imgur.com/aqq9XM1.jpg",
"N":"سوريا"},
{"F":"https://i.imgur.com/zGYoHGZ.jpg",
"N":"تونس"},
{"F":"https://i.imgur.com/to6oeFz.png",
"N":"كرواتيا"},
{"F":"https://i.imgur.com/qdJtWSj.gif",
"N":"كولمبيا"},
{"F":"https://i.imgur.com/ZxBJedi.gif",
"N":"فنلندا"},
{"F":"https://i.imgur.com/ZxBJedi.gif",
"N":"فرنسا"},
{"F":"https://i.imgur.com/F1MtuqQ.gif",
"N":"ألمانيا"},
{"F":"https://i.imgur.com/4yBqewj.gif",
"N":"اليونان"},
{"F":"https://i.imgur.com/bEfgbGl.gif",
"N":"ايسلندا"},
{"F":"https://i.imgur.com/XC25B1r.gif",
"N":"المجر"},
{"F":"https://i.imgur.com/kCLQfaE.gif",
"N":"اليابان"},
{"F":"https://i.imgur.com/ygd5UjF.gif",
"N":"لاتيفيا"},
{"F":"https://i.imgur.com/VQlqRWV.gif",
"N":"كازاخستان"},
{"F":"https://i.imgur.com/WDfhiBm.gif",
"N":"ماليزيا"},
{"F":"https://i.imgur.com/UooMhFU.gif",
"N":"لوكسمبيرغ"},
{"F":"https://i.imgur.com/YgOBBMT.gif",
"N":"مالطا"},
{"F":"https://i.imgur.com/7ie3cJW.gif",
"N":"المكسيك"},
{"F":"https://i.imgur.com/my09qW6.gif",
"N":"مولدوفا"},
{"F":"https://i.imgur.com/9tJKPLl.gif",
"N":"ارمينيا"},
{"F":"https://i.imgur.com/B1vB6Dt.gif",
"N":"النمسا"},
{"F":"https://i.imgur.com/XRf2j5n.gif",
"N":"اذريبيجان"},
{"F":"https://i.imgur.com/hCuycp6.gif",
"N":"بنغلاديش"},
{"F":"https://i.imgur.com/QSbdwru.gif",
"N":"بلجيكا"},
{"F":"https://i.imgur.com/KhztKKk.gif",
"N":"بوليفيا"},
{"F":"https://i.imgur.com/5M3vUO9.gif",
"N":"البرازيل"},
{"F":"https://i.imgur.com/XxwktPF.gif",
"N":"ساحل العاج"},
{"F":"https://i.imgur.com/nsmhYXF.gif",
"N":"الكاميرون"},
{"F":"https://i.imgur.com/dRCZjUX.gif",
"N":"جمهورية الدومينيكان"},
{"F":"https://i.imgur.com/tVwdyDz.gif",
"N":"الايكوادور"},
{"F":"https://i.imgur.com/nlF5aoq.gif",
"N":"بلغاريا"},
{"F":"https://i.imgur.com/WODDJ55.gif",
"N":"السلفادور"},
{"F":"https://i.imgur.com/9Dknt44.jpg",
"N":"الامارات"},
{"F":"https://i.imgur.com/v0BSSjx.jpg",
"N":"اليمن"},
{"F":"https://i.imgur.com/tTzA2r6.jpg",
"N":"السعودية"},
{"F":"https://i.imgur.com/RR704H2.jpg",
"N":"الصومال"},
{"F":"https://i.imgur.com/Px1pTYk.jpg",
"N":"السودان"},
{"F":"https://i.imgur.com/SgjhHTO.jpg",
"N":"عمان"},
{"F":"https://i.imgur.com/vRMMHRH.jpg",
"N":"فلسطين"},
{"F":"https://i.imgur.com/L0WfyBv.gif",
"N":"استونيا"},
{"F":"https://i.imgur.com/OiJFDnP.jpg",
"N":"قطر"},
{"F":"https://i.imgur.com/Uf19Plt.jpg",
"N":"مصر"},
{"F":"https://i.imgur.com/8xq7z1n.jpg",
"N":"ليبيا"},
{"F":"https://i.imgur.com/iixfx2D.jpg",
"N":"موريتانيا"},
{"F":"https://i.imgur.com/L1NvD1F.jpg",
"N":"المغرب"},
{"F":"https://i.imgur.com/8RV6H2r.jpg",
"N":"لبنان"},
{"F":"https://i.imgur.com/WCklIWW.jpg",
"N":"جزر القمر"},
{"F":"https://i.imgur.com/sm2SZyR.jpg",
"N":"الكويت"},
{"F":"https://i.imgur.com/rbKoQbN.jpg",
"N":"العراق"},
{"F":"https://i.imgur.com/6g7u9mK.jpg",
"N":"الاردن"},
{"F":"https://i.imgur.com/ijep6Tu.jpg",
"N":"البحرين"},
{"F":"https://i.imgur.com/U4q5vn8.jpg",
"N":"الجزائر"},
{"F":"https://i.imgur.com/3pxwh1W.jpg",
"N":"اسبانيا"},
{"F":"https://i.imgur.com/TtEC7ZD.jpg",
"N":"البرتغال"}


    ];

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctAnswer = randomQuestion.N;
  
    const imageResponse = await axios.get(randomQuestion.F, { responseType: "arraybuffer" });
    fs.writeFileSync(tempImageFilePath, Buffer.from(imageResponse.data, "binary"));

    const attachment = [fs.createReadStream(tempImageFilePath)];
    const message = `ما اسم علم هذه الدولة؟`;

    api.sendMessage({ body: message, attachment }, event.threadID, (error, info) => {
        if (!error) {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                correctAnswer: correctAnswer
            });
        }
    });
};

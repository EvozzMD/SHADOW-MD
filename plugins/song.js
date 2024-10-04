const {cmd , commands} = require('../command')
const yts = require('yt-search');
const fg = require('api-dylux');

// -------- Song Download --------
cmd({
    pattern: 'song',
    desc: 'download songs',
    alias: ["yt","play","ytmp3"],
    react: "🎧",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('*Please enter a query or a url !*');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `*❮❮❮ 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ❯❯❯*
        
> *\`➤ Title\` :* ${data.title}

> *\`➤ Views\` :* ${data.views}

> *\`➤ DESCRIPTION\`:* ${data.description}

> *\`➤ TIME\`:* ${data.timestamp}

> *\`➤ AGO\`:* ${data.ago}

*✦ Reply This Message With Nambars ✦*
╭────────────────────◉◉➤
*➢ 1 Audio 🎧*
*➢ 2 Audio With Document 📁*
╰────────────────────◉◉➤
*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(from, { audio: { url:downloadUrl }, caption: '*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*', mimetype: 'audio/mpeg'},{ quoted: mek });
                        break;
                    case '2':               
                        // Send Document File
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloaddocUrl }, caption: '*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*', mimetype: 'audio/mpeg', fileName:data.title + ".mp3"}, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
//-------- Video Download --------
cmd({
    pattern: 'video',
    desc: 'download videos',
    alias: ["video2","videos","ytvideo3"],
    react: "🎥",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('*Please enter a query or a url !*');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `*❮❮❮ 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ❯❯❯*
        
> *\`➤ Title\` :* ${data.title}

> *\`➤ Views\` :* ${data.views}

> *\`➤ DESCRIPTION\`:* ${data.description}

> *\`➤ TIME\`:* ${data.timestamp}

> *\`➤ AGO\`:* ${data.ago}

*✦ Reply This Message With Nambars ✦*
╭────────────────────◉◉➤
*➢ 1 Video 🎥*
*➢ 2 Video With Document 📁*
╰────────────────────◉◉➤
*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let downvid = await fg.ytv(url);
                        let downloadvUrl = downvid.dl_url;
                        await conn.sendMessage(from, { video : { url:downloadvUrl }, caption: '*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*', mimetype: 'video/mp4'},{ quoted: mek });
                        break;
                    case '2':
                        let downviddoc = await fg.ytv(url);
                        let downloadvdocUrl = downviddoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloadvdocUrl }, caption: '*ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴏᴡɴᴇʀ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴀᴄʜ ➤*', mimetype: 'video/mp4', fileName:data.title + ".mp4" }, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});

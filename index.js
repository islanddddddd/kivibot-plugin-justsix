const { KiviPlugin, segment } = require("@kivibot/core");

const { version } = require("./package.json");
const plugin = new KiviPlugin("xxx", version);

const config = {};

plugin.onMounted((bot, admins) => {
    plugin.saveConfig(Object.assign(config, plugin.loadConfig()));

    plugin.onMessage((event, bot) => {
        isBotSelf = event.sender.user_id == plugin.bot.uin;
        if (isBotSelf) {
            return;
        }

        const { raw_message } = event;
        
        if (raw_message === "6") {
            event.reply("6");
            return;
        }
        const patt1 = /6{3}6*/;

        if (patt1.test(raw_message)) {
            const match = raw_message.match(patt1);
            event.reply(match);
        }
    });
});

module.exports = { plugin };

const { Plugin } = require('powercord/entities');

module.exports = class NoDoubleBack extends Plugin {
    startPlugin() {
        // credit: <@861399389469278218> (Juby210#0577)
        require('electron').ipcRenderer.removeListener('DISCORD_NAVIGATE_BACK', require('electron').ipcRenderer._events.DISCORD_NAVIGATE_BACK)
    }
    pluginWillUnload() {
        // no uninject because life is too short
    }
};

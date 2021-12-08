const { Plugin } = require('powercord/entities');
const { ipcRenderer } = require('electron');

module.exports = class NoDoubleBack extends Plugin {
    startPlugin() {
        // credit: <@861399389469278218> (Juby210#0577)
        ipcRenderer.removeListener('DISCORD_NAVIGATE_BACK', ipcRenderer._events.DISCORD_NAVIGATE_BACK)
        ipcRenderer.removeListener('DISCORD_NAVIGATE_FORWARD', ipcRenderer._events.DISCORD_NAVIGATE_FORWARD)
    }
    pluginWillUnload() {
        // no uninject because life is too short
    }
};

/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
// Generated by CT-Pack

import settings from "./src/config.js"
register("command", settings.openGUI).setName("betterwarp")

const cmd = register("command", (arg1) => {
    ChatLib.command("warp " + arg1);
}).setTabCompletions((arg) =>{
    console.log(arg);
    return ["hub", "home", "arachne", "spider"].filter((n) => n.startsWith(arg.length ? arg[0].toLowerCase() : "")).sort();
}).setName("tw");


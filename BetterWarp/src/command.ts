/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

import { Config } from "./types"
import stn from "./config"
import { genAutoArr } from "./warps"
const settings: Config = stn

let betterWarpCommand
let currnentWarpArr = []

export function registerCommand(name: string) {
    if (!settings.enabled) return;
    currnentWarpArr = genAutoArr()
    betterWarpCommand = register("command", (arg1) => {
        ChatLib.command(`warp ${arg1}`)
    })
        .setTabCompletions(arg => currnentWarpArr.filter((n) => n.startsWith(arg.length ? arg[0].toLowerCase() : "")).sort())
        .setName(name)
}

function unRegisterCommand() {
    if (betterWarpCommand) betterWarpCommand.unregister()
    currnentWarpArr = []
}

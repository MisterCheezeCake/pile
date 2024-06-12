const fs = require('fs');
const uc = (str) => { 
    //Uppercase first letter of
}
const warps = {
    "Private Island": ["home", "island"],
    "Hub": ["hub", "village"],
    "Community Center": "elizabeth",
    "Castle Ruins": "castle",
    "Sirius Shack": "da",
    "Hub Crypts": ["crypt", "crypts"],
    "Museum": "museum",
    "Dungeon Hub": ["dungeon_hub", "dungeons", "dhub"],
    "The Barn": "barn",
    "Mushroom Desert": "desert",
    "Trapper's Den": ["trapper", "trap"],
    "The Park": "park",
    "Jungle": "jungle",
    "Howling Cave": "howl",
    "Gold Mine": "gold",
    "Deep Caverns": "deep",
    "Dwarven Mines": "mines",
    "The Forge": "forge",
    "Crystal Hollows": ["crystals", "hollows", "ch"],
    "Crystal Nucleus": "nucleus",
    "Spider's Den": ["spider", "spiders"],
    "Spider Mound": ["top",  "nest", "mound"],
    "Arachne's Sanctuary": "arachne",
    "The End": "end",
    "Dragon's Nest": "drag",
    "Void Sepulture": ["void", "sepulture"],
    "Crimson Isle": ["crimson", "nether", "isle"],
    "Forgotten Skull": "kuudra",
    "The Wasteland": "wasteland",
    "Dragontail": "dragontail",
    "Scarleton": "sacrleton",
    "Smolderimg Tomb": ["smoldering", "smoldering_tomb", "smold"],
    "Garden": "garden",
    "Jerry's Workshop": ["winter", "jerry", "workshop"]
}
const normArr = []
const depArr = []
const typeArr = ["export interface Config {"]
const intypes = `
enabled: boolean;
name: string;
`
typeArr.push(intypes)
Object.keys(warps).forEach((key) => {
    const value = warps[key];
    if (Array.isArray(value)) {
        const str = `
        @CheckboxProperty({
            name: "${key}",
            description: "Whether to include ${key} in the warp list",
            category: "Toggles"
           })
        ${key.toLowerCase().replace(" ", "_").replace("'", "")} = true;
        
        @SelectorProperty({
            name: "${key} Command",
            description: "The command options for ${key}",
            category: "Toggles",
            options: ${JSON.stringify(value)}
        })
        ${key.toLowerCase().replace(" ", "_").replace("'", "")}_selector = 0;
        `
        typeArr.push(`${key.toLowerCase().replace(" ", "_").replace("'", "")}: boolean`)
        typeArr.push(`${key.toLowerCase().replace(" ", "_").replace("'", "")}_selector: number`)
        const depstr = `this.addDependency("${key} Command" , "${key}")`
        normArr.push(str)
        depArr.push(depstr)

    } else {
       const str = `
       @CheckboxProperty({
        name: "${key}",
        description: "Whether to include ${key} in the warp list",
        category: "Toggles"
       })
       ${key.toLowerCase().replace(" ", "_").replace("'", "")} = true;
       `
       typeArr.push(`${key.toLowerCase().replace(" ", "_").replace("'", "")}: boolean`)
       normArr.push(str)
    }
    const str = `
        @TextProperty({
            name: "${key} Aliases",
            description: "Aliases for ${key} in the warp command.\\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
            category: "Aliases"
        })
        ${key.toLowerCase().replace(" ", "_").replace("'", "")}_aliases = "";
    `
    typeArr.push(`${key.toLowerCase().replace(" ", "_").replace("'", "")}_aliases: string`)
    const dpstring = `this.addDependency("${key} Aliases", "${key}")`
    normArr.push(str)
    depArr.push(dpstring)
})
typeArr.push("}")
fs.writeFileSync("types.d.ts", typeArr.join("\n"))
fs.writeFileSync("norm.js", normArr.join("\n"))
fs.writeFileSync("dep.js", depArr.join("\n"))

const whiteListedWarps = []

Object.keys(warps).forEach((key) => {
    const value = warps[key];
    if (Array.isArray(value)) {
        whiteListedWarps.push(...value)
    } else {
        whiteListedWarps.push(value)
    }
})
fs.writeFileSync("whitelist.js", JSON.stringify(whiteListedWarps))

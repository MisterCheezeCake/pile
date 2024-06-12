import settings from "./config.js"

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

const warpArr = ["home","island","hub","village","elizabeth","castle","da","crypt","crypts","museum","dungeon_hub","dungeons","dhub","barn","desert","trapper","trap","park","jungle","howl","gold","deep","mines","forge","crystals","hollows","ch","nucleus","spider","spiders","top","nest","mound","arachne","end","drag","void","sepulture","crimson","nether","isle","kuudra","wasteland","dragontail","sacrleton","smoldering","smoldering_tomb","smold","garden","winter","jerry","workshop"]

function genAutoArr() {
    let tmpArr = Object.keys(warps).map(key => {
        const value = warps[key]
        const keyName = key.toLowerCase().replace(" ", "_").replace("'", "")
        if (settings[keyName]) {
            if (!Array.isArray(value)) return value;
            else return value[settings[`${keyName}_command`]]
        }
    })
    Object.keys(warps).forEach((key, i) => {
        const value = warps[key]
        const keyName = key.toLowerCase().replace(" ", "_").replace("'", "")
        if (settings[`${keyName}_aliases`]) tmpArr.push(...(settings[`${keyName}_aliases`].split(",").replaceAll(" ", "")))
    })

    return tmpArr
    
}


export { warpArr, genAutoArr}
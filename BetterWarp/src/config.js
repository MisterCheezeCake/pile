/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />
import { @Vigilant, @CheckboxProperty, @TextProperty, @SwitchProperty, @ButtonProperty, @SelectorProperty} from 'Vigilance';
import {registerCommand} from "./command"
import notif from "./notif"
@Vigilant("BetterWarp", "BetterWarp", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['General', 'Toggles', 'Aliases'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Settings {
    @SwitchProperty({
        name: "Enabled",
        description: "Whether the module is enabled",
        category: "General",
    })
    enabled = true
    @TextProperty({
        name: "Command Name",
        description: "The name of the custom warp command. Overides the /warp command by default.",
        category: "General"
    })
    name = "warp"
    @ButtonProperty({
        name: "Apply Changes",
        description: "The module needs to reload to apply changes. Click to reload.",
        category: "General",
        placeholder: "Apply Changes"
    })
    reload() {
        unRegisterCommand()
        registerCommand(this.name)
        notif.notify("BetterWarp", "Changes applied", 5)
        //Client.currentGui.close()
    }

    // Start of toggles. This was generated by a script
    
    @CheckboxProperty({
        name: "Private Island",
        description: "Whether to include Private Island in the warp list",
        category: "Toggles"
    })
    private_island = true;

    @SelectorProperty({
        name: "Private Island Command",
        description: "The command options for Private Island",
        category: "Toggles",
        options: ["home","island"]
    })
    private_island_selector = 0;
    

    @TextProperty({
        name: "Private Island Aliases",
        description: "Aliases for Private Island in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    private_island_aliases = "";


    @CheckboxProperty({
        name: "Hub",
        description: "Whether to include Hub in the warp list",
        category: "Toggles"
       })
    hub = true;

    @SelectorProperty({
        name: "Hub Command",
        description: "The command options for Hub",
        category: "Toggles",
        options: ["hub","village"]
    })
    hub_selector = 0;
    

    @TextProperty({
        name: "Hub Aliases",
        description: "Aliases for Hub in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    hub_aliases = "";


   @CheckboxProperty({
    name: "Community Center",
    description: "Whether to include Community Center in the warp list",
    category: "Toggles"
   })
   community_center = true;
   

    @TextProperty({
        name: "Community Center Aliases",
        description: "Aliases for Community Center in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    community_center_aliases = "";


   @CheckboxProperty({
    name: "Castle Ruins",
    description: "Whether to include Castle Ruins in the warp list",
    category: "Toggles"
   })
   castle_ruins = true;
   

    @TextProperty({
        name: "Castle Ruins Aliases",
        description: "Aliases for Castle Ruins in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    castle_ruins_aliases = "";


   @CheckboxProperty({
    name: "Sirius Shack",
    description: "Whether to include Sirius Shack in the warp list",
    category: "Toggles"
   })
   sirius_shack = true;
   

    @TextProperty({
        name: "Sirius Shack Aliases",
        description: "Aliases for Sirius Shack in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    sirius_shack_aliases = "";


    @CheckboxProperty({
        name: "Hub Crypts",
        description: "Whether to include Hub Crypts in the warp list",
        category: "Toggles"
       })
    hub_crypts = true;

    @SelectorProperty({
        name: "Hub Crypts Command",
        description: "The command options for Hub Crypts",
        category: "Toggles",
        options: ["crypt","crypts"]
    })
    hub_crypts_selector = 0;
    

    @TextProperty({
        name: "Hub Crypts Aliases",
        description: "Aliases for Hub Crypts in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    hub_crypts_aliases = "";


   @CheckboxProperty({
    name: "Museum",
    description: "Whether to include Museum in the warp list",
    category: "Toggles"
   })
   museum = true;
   

    @TextProperty({
        name: "Museum Aliases",
        description: "Aliases for Museum in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    museum_aliases = "";


    @CheckboxProperty({
        name: "Dungeon Hub",
        description: "Whether to include Dungeon Hub in the warp list",
        category: "Toggles"
       })
    dungeon_hub = true;

    @SelectorProperty({
        name: "Dungeon Hub Command",
        description: "The command options for Dungeon Hub",
        category: "Toggles",
        options: ["dungeon_hub","dungeons","dhub"]
    })
    dungeon_hub_selector = 0;
    

    @TextProperty({
        name: "Dungeon Hub Aliases",
        description: "Aliases for Dungeon Hub in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    dungeon_hub_aliases = "";


   @CheckboxProperty({
    name: "The Barn",
    description: "Whether to include The Barn in the warp list",
    category: "Toggles"
   })
   the_barn = true;
   

    @TextProperty({
        name: "The Barn Aliases",
        description: "Aliases for The Barn in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    the_barn_aliases = "";


   @CheckboxProperty({
    name: "Mushroom Desert",
    description: "Whether to include Mushroom Desert in the warp list",
    category: "Toggles"
   })
   mushroom_desert = true;
   

    @TextProperty({
        name: "Mushroom Desert Aliases",
        description: "Aliases for Mushroom Desert in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    mushroom_desert_aliases = "";


    @CheckboxProperty({
        name: "Trapper's Den",
        description: "Whether to include Trapper's Den in the warp list",
        category: "Toggles"
       })
    trappers_den = true;

    @SelectorProperty({
        name: "Trapper's Den Command",
        description: "The command options for Trapper's Den",
        category: "Toggles",
        options: ["trapper","trap"]
    })
    trappers_den_selector = 0;
    

    @TextProperty({
        name: "Trapper's Den Aliases",
        description: "Aliases for Trapper's Den in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    trappers_den_aliases = "";


   @CheckboxProperty({
    name: "The Park",
    description: "Whether to include The Park in the warp list",
    category: "Toggles"
   })
   the_park = true;
   

    @TextProperty({
        name: "The Park Aliases",
        description: "Aliases for The Park in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    the_park_aliases = "";


   @CheckboxProperty({
    name: "Jungle",
    description: "Whether to include Jungle in the warp list",
    category: "Toggles"
   })
   jungle = true;
   

    @TextProperty({
        name: "Jungle Aliases",
        description: "Aliases for Jungle in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    jungle_aliases = "";


   @CheckboxProperty({
    name: "Howling Cave",
    description: "Whether to include Howling Cave in the warp list",
    category: "Toggles"
   })
   howling_cave = true;
   

    @TextProperty({
        name: "Howling Cave Aliases",
        description: "Aliases for Howling Cave in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    howling_cave_aliases = "";


   @CheckboxProperty({
    name: "Gold Mine",
    description: "Whether to include Gold Mine in the warp list",
    category: "Toggles"
   })
   gold_mine = true;
   

    @TextProperty({
        name: "Gold Mine Aliases",
        description: "Aliases for Gold Mine in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    gold_mine_aliases = "";


   @CheckboxProperty({
    name: "Deep Caverns",
    description: "Whether to include Deep Caverns in the warp list",
    category: "Toggles"
   })
   deep_caverns = true;
   

    @TextProperty({
        name: "Deep Caverns Aliases",
        description: "Aliases for Deep Caverns in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    deep_caverns_aliases = "";


   @CheckboxProperty({
    name: "Dwarven Mines",
    description: "Whether to include Dwarven Mines in the warp list",
    category: "Toggles"
   })
   dwarven_mines = true;
   

    @TextProperty({
        name: "Dwarven Mines Aliases",
        description: "Aliases for Dwarven Mines in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    dwarven_mines_aliases = "";


   @CheckboxProperty({
    name: "The Forge",
    description: "Whether to include The Forge in the warp list",
    category: "Toggles"
   })
   the_forge = true;
   

    @TextProperty({
        name: "The Forge Aliases",
        description: "Aliases for The Forge in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    the_forge_aliases = "";


    @CheckboxProperty({
        name: "Crystal Hollows",
        description: "Whether to include Crystal Hollows in the warp list",
        category: "Toggles"
       })
    crystal_hollows = true;

    @SelectorProperty({
        name: "Crystal Hollows Command",
        description: "The command options for Crystal Hollows",
        category: "Toggles",
        options: ["crystals","hollows","ch"]
    })
    crystal_hollows_selector = 0;
    

    @TextProperty({
        name: "Crystal Hollows Aliases",
        description: "Aliases for Crystal Hollows in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    crystal_hollows_aliases = "";


   @CheckboxProperty({
    name: "Crystal Nucleus",
    description: "Whether to include Crystal Nucleus in the warp list",
    category: "Toggles"
   })
   crystal_nucleus = true;
   

    @TextProperty({
        name: "Crystal Nucleus Aliases",
        description: "Aliases for Crystal Nucleus in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    crystal_nucleus_aliases = "";


    @CheckboxProperty({
        name: "Spider's Den",
        description: "Whether to include Spider's Den in the warp list",
        category: "Toggles"
       })
    spiders_den = true;

    @SelectorProperty({
        name: "Spider's Den Command",
        description: "The command options for Spider's Den",
        category: "Toggles",
        options: ["spider","spiders"]
    })
    spiders_den_selector = 0;
    

    @TextProperty({
        name: "Spider's Den Aliases",
        description: "Aliases for Spider's Den in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    spiders_den_aliases = "";


    @CheckboxProperty({
        name: "Spider Mound",
        description: "Whether to include Spider Mound in the warp list",
        category: "Toggles"
       })
    spider_mound = true;

    @SelectorProperty({
        name: "Spider Mound Command",
        description: "The command options for Spider Mound",
        category: "Toggles",
        options: ["top","nest","mound"]
    })
    spider_mound_selector = 0;
    

    @TextProperty({
        name: "Spider Mound Aliases",
        description: "Aliases for Spider Mound in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    spider_mound_aliases = "";


   @CheckboxProperty({
    name: "Arachne's Sanctuary",
    description: "Whether to include Arachne's Sanctuary in the warp list",
    category: "Toggles"
   })
   arachnes_sanctuary = true;
   

    @TextProperty({
        name: "Arachne's Sanctuary Aliases",
        description: "Aliases for Arachne's Sanctuary in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    arachnes_sanctuary_aliases = "";


   @CheckboxProperty({
    name: "The End",
    description: "Whether to include The End in the warp list",
    category: "Toggles"
   })
   the_end = true;
   

    @TextProperty({
        name: "The End Aliases",
        description: "Aliases for The End in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    the_end_aliases = "";


   @CheckboxProperty({
    name: "Dragon's Nest",
    description: "Whether to include Dragon's Nest in the warp list",
    category: "Toggles"
   })
   dragons_nest = true;
   

    @TextProperty({
        name: "Dragon's Nest Aliases",
        description: "Aliases for Dragon's Nest in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    dragons_nest_aliases = "";


    @CheckboxProperty({
        name: "Void Sepulture",
        description: "Whether to include Void Sepulture in the warp list",
        category: "Toggles"
       })
    void_sepulture = true;

    @SelectorProperty({
        name: "Void Sepulture Command",
        description: "The command options for Void Sepulture",
        category: "Toggles",
        options: ["void","sepulture"]
    })
    void_sepulture_selector = 0;
    

    @TextProperty({
        name: "Void Sepulture Aliases",
        description: "Aliases for Void Sepulture in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    void_sepulture_aliases = "";


    @CheckboxProperty({
        name: "Crimson Isle",
        description: "Whether to include Crimson Isle in the warp list",
        category: "Toggles"
       })
    crimson_isle = true;

    @SelectorProperty({
        name: "Crimson Isle Command",
        description: "The command options for Crimson Isle",
        category: "Toggles",
        options: ["crimson","nether","isle"]
    })
    crimson_isle_selector = 0;
    

    @TextProperty({
        name: "Crimson Isle Aliases",
        description: "Aliases for Crimson Isle in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    crimson_isle_aliases = "";


   @CheckboxProperty({
    name: "Forgotten Skull",
    description: "Whether to include Forgotten Skull in the warp list",
    category: "Toggles"
   })
   forgotten_skull = true;
   

    @TextProperty({
        name: "Forgotten Skull Aliases",
        description: "Aliases for Forgotten Skull in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    forgotten_skull_aliases = "";


   @CheckboxProperty({
    name: "The Wasteland",
    description: "Whether to include The Wasteland in the warp list",
    category: "Toggles"
   })
   the_wasteland = true;
   

    @TextProperty({
        name: "The Wasteland Aliases",
        description: "Aliases for The Wasteland in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    the_wasteland_aliases = "";


   @CheckboxProperty({
    name: "Dragontail",
    description: "Whether to include Dragontail in the warp list",
    category: "Toggles"
   })
   dragontail = true;
   

    @TextProperty({
        name: "Dragontail Aliases",
        description: "Aliases for Dragontail in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    dragontail_aliases = "";


   @CheckboxProperty({
    name: "Scarleton",
    description: "Whether to include Scarleton in the warp list",
    category: "Toggles"
   })
   scarleton = true;
   

    @TextProperty({
        name: "Scarleton Aliases",
        description: "Aliases for Scarleton in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    scarleton_aliases = "";


    @CheckboxProperty({
        name: "Smolderimg Tomb",
        description: "Whether to include Smolderimg Tomb in the warp list",
        category: "Toggles"
       })
    smolderimg_tomb = true;

    @SelectorProperty({
        name: "Smolderimg Tomb Command",
        description: "The command options for Smolderimg Tomb",
        category: "Toggles",
        options: ["smoldering","smoldering_tomb","smold"]
    })
    smolderimg_tomb_selector = 0;
    

    @TextProperty({
        name: "Smolderimg Tomb Aliases",
        description: "Aliases for Smolderimg Tomb in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    smolderimg_tomb_aliases = "";


   @CheckboxProperty({
    name: "Garden",
    description: "Whether to include Garden in the warp list",
    category: "Toggles"
   })
   garden = true;
   

    @TextProperty({
        name: "Garden Aliases",
        description: "Aliases for Garden in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    garden_aliases = "";


    @CheckboxProperty({
        name: "Jerry's Workshop",
        description: "Whether to include Jerry's Workshop in the warp list",
        category: "Toggles"
       })
    jerrys_workshop = true;

    @SelectorProperty({
        name: "Jerry's Workshop Command",
        description: "The command options for Jerry's Workshop",
        category: "Toggles",
        options: ["winter","jerry","workshop"]
    })
    jerrys_workshop_selector = 0;
    

    @TextProperty({
        name: "Jerry's Workshop Aliases",
        description: "Aliases for Jerry's Workshop in the warp command.\n§cSeparate with commas and no spaces. Example: 'alias1,alias2'",
        category: "Aliases"
    })
    jerrys_workshop_aliases = "";


    // End of toggles. This was generated by a script
    constructor() {
        
        this.initialize(this);
        this.setCategoryDescription("General", "BetterWarp by §eMisterCheezeCake\n§bMake sure to click 'Apply Changes' after making changes to the settings.")
        this.setCategoryDescription("Toggles", "BetterWarp by §eMisterCheezeCake\n§bMake sure to click 'Apply Changes' after making changes to the settings.")
        this.setCategoryDescription("Aliases", "BetterWarp by §eMisterCheezeCake\n§bMake sure to click 'Apply Changes' after making changes to the settings.")
        // Dependencies, this was generated by a script
        this.addDependency("Private Island Command" , "Private Island")
        this.addDependency("Private Island Aliases", "Private Island")
        this.addDependency("Hub Command" , "Hub")
        this.addDependency("Hub Aliases", "Hub")
        this.addDependency("Community Center Aliases", "Community Center")
        this.addDependency("Castle Ruins Aliases", "Castle Ruins")
        this.addDependency("Sirius Shack Aliases", "Sirius Shack")
        this.addDependency("Hub Crypts Command" , "Hub Crypts")
        this.addDependency("Hub Crypts Aliases", "Hub Crypts")
        this.addDependency("Museum Aliases", "Museum")
        this.addDependency("Dungeon Hub Command" , "Dungeon Hub")
        this.addDependency("Dungeon Hub Aliases", "Dungeon Hub")
        this.addDependency("The Barn Aliases", "The Barn")
        this.addDependency("Mushroom Desert Aliases", "Mushroom Desert")
        this.addDependency("Trapper's Den Command" , "Trapper's Den")
        this.addDependency("Trapper's Den Aliases", "Trapper's Den")
        this.addDependency("The Park Aliases", "The Park")
        this.addDependency("Jungle Aliases", "Jungle")
        this.addDependency("Howling Cave Aliases", "Howling Cave")
        this.addDependency("Gold Mine Aliases", "Gold Mine")
        this.addDependency("Deep Caverns Aliases", "Deep Caverns")
        this.addDependency("Dwarven Mines Aliases", "Dwarven Mines")
        this.addDependency("The Forge Aliases", "The Forge")
        this.addDependency("Crystal Hollows Command" , "Crystal Hollows")
        this.addDependency("Crystal Hollows Aliases", "Crystal Hollows")
        this.addDependency("Crystal Nucleus Aliases", "Crystal Nucleus")
        this.addDependency("Spider's Den Command" , "Spider's Den")
        this.addDependency("Spider's Den Aliases", "Spider's Den")
        this.addDependency("Spider Mound Command" , "Spider Mound")
        this.addDependency("Spider Mound Aliases", "Spider Mound")
        this.addDependency("Arachne's Sanctuary Aliases", "Arachne's Sanctuary")
        this.addDependency("The End Aliases", "The End")
        this.addDependency("Dragon's Nest Aliases", "Dragon's Nest")
        this.addDependency("Void Sepulture Command" , "Void Sepulture")
        this.addDependency("Void Sepulture Aliases", "Void Sepulture")
        this.addDependency("Crimson Isle Command" , "Crimson Isle")
        this.addDependency("Crimson Isle Aliases", "Crimson Isle")
        this.addDependency("Forgotten Skull Aliases", "Forgotten Skull")
        this.addDependency("The Wasteland Aliases", "The Wasteland")
        this.addDependency("Dragontail Aliases", "Dragontail")
        this.addDependency("Scarleton Aliases", "Scarleton")
        this.addDependency("Smolderimg Tomb Command" , "Smolderimg Tomb")
        this.addDependency("Smolderimg Tomb Aliases", "Smolderimg Tomb")
        this.addDependency("Garden Aliases", "Garden")
        this.addDependency("Jerry's Workshop Command" , "Jerry's Workshop")
        this.addDependency("Jerry's Workshop Aliases", "Jerry's Workshop")
    }
}

const settings = new Settings();
export default settings
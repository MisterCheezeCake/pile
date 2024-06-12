/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

// This class exists so I can more easily port to 3.0
class Notifier {
    hasEssential: boolean
    essential: any
    constructor() {
        try {
            Java.type("gg.essential.api.EssentialAPI").getNotifications()
            this.hasEssential = true
            this.essential = Java.type("gg.essential.api.EssentialAPI")
        } catch (e) {
            this.hasEssential = false
        }
    }
    notify(title: string, message: string, decay: number) {
        if (this.hasEssential) this.essential.getNotifications().push(title, message, decay)
        // Will be used in 3.0
        // else Toasty.pushToast(title, message, decay)
    }
}

export default new Notifier()
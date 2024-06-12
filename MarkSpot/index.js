/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

let drawArr = [];
const getCoords = () => { return {x: Player.getX(), y: Player.getY(), z: Player.getZ()}; }
register("command", () => {
    drawArr.push(getCoords())
}).setName("mark")
register("command", () => {
    drawArr = []
}).setName("clearmark")

register("renderWorld", () => {
    if (!drawArr.length) return;
    drawArr.forEach(ele => {
        const { x, y, z } = ele;
        Tessellator.drawString(`Marked ${Math.round(x)}, ${Math.round(y)}, ${Math.round(z)}`, x,y,z, Renderer.GREEN)
    })
})
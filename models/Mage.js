"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    constructor(name) {
        super(name, "Mage", 100, 50, 25, 100, []);
    }
    // metodo que  mostra o nome do mago e que ele lançou feitiço 
    castSpell() {
        console.log(`${this.getName()} cast the spell`);
    }
}
exports.Mage = Mage;

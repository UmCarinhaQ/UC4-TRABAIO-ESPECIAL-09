"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Character_1 = require("./Character");
class Warrior extends Character_1.Character {
    constructor(name) {
        super(name, "Warrior", 10, 20, 30, 100, []);
    }
}
exports.Warrior = Warrior;

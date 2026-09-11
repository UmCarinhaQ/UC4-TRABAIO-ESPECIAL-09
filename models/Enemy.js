"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
const Character_1 = require("./Character");
class Enemy extends Character_1.Character {
    constructor(name) {
        super(name, "Enemy", 100, 30, 25, 100, []);
    }
}
exports.Enemy = Enemy;

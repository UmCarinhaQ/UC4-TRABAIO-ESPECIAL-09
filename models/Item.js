"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(keys) {
        this.keys = 0;
    }
    healthPotion(character) {
        character.setHealth(character.getHealth() + 50);
        console.log(`vida atual: ${character.getHealth()}`);
    }
    ironSword(character) {
        character.setAttack(character.getAttack() + 5);
        console.log(`Ataque aumentou em + 5 `);
    }
    leatherArmor(character) {
        character.setDefense(character.getDefense() + 3);
        console.log(`a defesa aumentou em + 3`);
    }
    ancientKey() {
        this.keys++;
        console.clear();
        console.log(`Quantidade atual de chaves: ${this.keys} `);
    }
    removeKey() {
        this.keys--;
        console.clear();
        console.log(`Quantidade atual de chaves: ${this.keys} `);
    }
}
exports.Item = Item;

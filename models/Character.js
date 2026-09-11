"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    // private  equipaments: Weapon[]
    constructor(name, profession, health, attack, defense, gold, InvertoryService) {
        this.name = name;
        this.profession = profession;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.gold = gold;
        this.InvertoryService = InvertoryService;
    }
    getName() {
        return this.name;
    }
    getProfession() {
        return this.profession;
    }
    getHealth() {
        return this.health;
    }
    getAttack() {
        return this.attack;
    }
    getDefense() {
        return this.defense;
    }
    getGold() {
        return this.gold;
    }
    getInvertoryService() {
        return this.InvertoryService;
    }
    setName(value) {
        this.name = value;
    }
    setProfession(value) {
        this.profession = value;
    }
    setHealth(value) {
        this.health = value;
    }
    setAttack(value) {
        this.attack = value;
    }
    setDefense(value) {
        this.defense = value;
    }
    setGold(value) {
        this.gold = value;
    }
    setInvertoryService(value) {
        this.InvertoryService = value;
    }
    // metodos para o inimigo atacar
    attackEnemy(enemy) {
        const damage = this.calculateDamage(enemy);
        this.applyDamage(enemy, damage);
        this.checkDeath(enemy);
    }
    // metodo para calcular o dano causado pelo inimigo e quanto de defesa o mesmo tem
    calculateDamage(enemy) {
        return Math.max(1, this.getAttack() - enemy.getDefense());
    }
    // metodo para aploicar o dano ao personagem
    applyDamage(enemy, damage) {
        enemy.setHealth(enemy.getHealth() - damage);
        console.log(`${this.getName()} caused ${damage} damage!`);
    }
    // metodo para checar se o mesmo ainda está vivo, caso seja igual ou menor a vida a 0 o mesmo estará morto.
    checkDeath(enemy) {
        if (enemy.getHealth() <= 0) {
            enemy.setHealth(0);
            console.log(`${enemy.getName()} died!`);
        }
    }
    showInfo() {
        console.log(`
    ==================================================
                     CHARACTER
    ==================================================
    
    Name: Aldric
    Class: Warrior
    
    Health: 100 / 100
    Attack: 15
    Defense: 10
    Gold: 50
    
    Equipment:
    Weapon: Iron Sword
    Armor: Leather Armor
    
    ==================================================
    `);
    }
}
exports.Character = Character;

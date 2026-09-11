import { InvertoryService } from "../services/InventoryService";

export abstract class Character {
    private name: string;
    private profession: string;
    private health: number;
    private attack: number;
    private defense: number;
    private gold: number;
    private InvertoryService: InvertoryService[];
    private  equipaments: Weapon[]

    constructor(name: string, profession: string, health: number, attack: number, defense: number, gold: number, InvertoryService: InvertoryService[]) {
        this.name = name;
        this.profession = profession;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.gold = gold;
        this.InvertoryService = InvertoryService;
    }

    public getName(): string {
        return this.name;
    }

    public getProfession(): string {
        return this.profession;
    }

    public getHealth(): number {
        return this.health;
    }

    public getAttack(): number {
        return this.attack;
    }

    public getDefense(): number {
        return this.defense;
    }

    public getGold(): number {
        return this.gold;
    }

    public getInvertoryService(): InvertoryService[] {
        return this.InvertoryService;
    }

    public setName(value: string) {
        this.name = value;
    }

    public setProfession(value: string) {
        this.profession = value;
    }

    public setHealth(value: number) {
        this.health = value;
    }

    public setAttack(value: number) {
        this.attack = value;
    }

    public setDefense(value: number) {
        this.defense = value;
    }

    public setGold(value: number) {
        this.gold = value;
    }
    public setInvertoryService(value: InvertoryService[]) {
        this.InvertoryService = value;
    }


    // metodos para o inimigo atacar
    public attackEnemy(enemy: Character): void {
        const damage = this.calculateDamage(enemy);
        this.applyDamage(enemy, damage);
        this.checkDeath(enemy);
    }

    // metodo para calcular o dano causado pelo inimigo e quanto de defesa o mesmo tem
    private calculateDamage(enemy: Character): number {
        return Math.max(1, this.getAttack() - enemy.getDefense());
    }

    // metodo para aploicar o dano ao personagem
    private applyDamage(enemy: Character, damage: number): void {
        enemy.setHealth(enemy.getHealth() - damage);

        console.log(`${this.getName()} caused ${damage} damage!`);
    }

    // metodo para checar se o mesmo ainda está vivo, caso seja igual ou menor a vida a 0 o mesmo estará morto.
    private checkDeath(enemy: Character): void {
        if (enemy.getHealth() <= 0) {
            enemy.setHealth(0);
            console.log(`${enemy.getName()} died!`);
        }
    }

    public showInfo(): void {
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
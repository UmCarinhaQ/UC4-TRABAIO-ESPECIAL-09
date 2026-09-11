import { Equippable } from "../interfaces/Equippable"
import { Character } from "./Character";

export class Weapon implements Equippable {
    private name: string;
    private damage: number;
    private character: Character;

    public constructor(name: string, damage: number){
        this.name = name
        this.damage = damage
        this.character = 
    }
    
    equip(character: Character): void {
        this.character = character
    }
    unequip(character: Character): void {
        this.character =
    }

    public getname(): string{
        return this.name 
    }

    public setname(newname: string): void{
        this.name = newname
    }

    public getdamage(): number{
        return this.damage
    }

    public setdamage(newDamage: number): void{
        this.damage = newDamage
    }


}
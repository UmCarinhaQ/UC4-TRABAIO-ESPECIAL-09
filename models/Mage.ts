import { Character } from "./Character";
import { InvertoryService } from "../services/InventoryService";

export class Mage extends Character {

    public constructor(name: string) {
        super(name, "Mage", 100, 50, 25, 100, []);
    }

    // metodo que  mostra o nome do mago e que ele lançou feitiço 
    public castSpell(): void {
        console.log(`${this.getName()} cast the spell`);
    }

}
import { Character } from "./Character";
import { InvertoryService } from "../services/InventoryService";

export class Warrior extends Character {
    public constructor(name: string) {
        super(name, "Warrior", 10, 20, 30, 100, [])
    }
}
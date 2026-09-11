import { Character } from "./Character";
import { InvertoryService } from "../services/InventoryService";

export class Enemy extends Character {
    public constructor(name: string) {
        super(name, "Enemy", 100, 30, 25, 100, [])
    }
}
import { Character } from "../models/Character";
export interface Usable extends Character {
    use(target: Character): void;
}
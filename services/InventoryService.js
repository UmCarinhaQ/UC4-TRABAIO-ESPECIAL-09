"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvertoryService = void 0;
class InvertoryService {
    constructor(items, gold) {
        this.items = [];
        this.gold = 50;
        this.items = items;
        this.gold = gold;
    }
    getItems() {
        return this.items;
    }
    getGold() {
        return this.gold;
    }
    setItems(value) {
        this.items = value;
    }
    setGold(value) {
        this.gold = value;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const position = this.items.indexOf(item);
        if (position != -1) {
            this.items.splice(position, 1);
        }
    }
    listItems() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
    hasItem(item) {
        if (this.items.indexOf(item) != -1) {
            return true;
        }
        else {
            return false;
        }
    }
    useItem(item) {
        if (this.hasItem(item)) {
            console.log("You are adding items" + item);
            this.removeItem(item);
        }
        else {
            console.log("This item doesn't exist, you idiot.");
        }
    }
    equipItem(item) {
        if (this.hasItem(item)) {
            console.log("Item equipped" + item);
        }
        else {
            console.log("Item not foud!!");
        }
    }
}
exports.InvertoryService = InvertoryService;

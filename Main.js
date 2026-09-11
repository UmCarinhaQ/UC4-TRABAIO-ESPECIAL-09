"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./models/Item");
// const ask = require('readline-sync');
// while (true) {
//     console.clear()
//     console.log(`
//     ╔══════════════════╗  ╔══════════════════╗
//     ║ [1] ⚔️ GUERREIRO  ║  ║ [2] 🔮 MAGO      ║
//     ║                  ║  ║                  ║
//     ║ Força bruta      ║  ║ Magia            ║
//     ║ Resistência      ║  ║ Fragilidade      ║
//     ╚══════════════════╝  ╚══════════════════╝
//     ╔══════════════════╗  ╔══════════════════╗
//     ║ [3] 🗡️ LADINO     ║  ║ [4] 🏹 CAÇADOR   ║
//     ║                  ║  ║                  ║
//     ║ Agilidade        ║  ║ Precisão         ║
//     ║ Furtividade      ║  ║ Distância        ║
//     ╚══════════════════╝  ╚══════════════════╝
//     ╔══════════════════╗  ╔══════════════════╗
//     ║ [5] ✝️ CLÉRIGO    ║  ║ [6] 👤 CUSTOM     ║
//     ║                  ║  ║                  ║
//     ║ Cura             ║  ║ Crie sua classe  ║
//     ║ Suporte          ║  ║ personalizada    ║
//     ╚══════════════════╝  ╚══════════════════╝
// `);
//     let option = Number(ask.question(`choose de option: `))
//     switch (option) {
//         case 1:
//             console.log("⚔️ Você escolheu GUERREIRO!");
//             break;
//         case 2:
//             console.log("🔮 Você escolheu MAGO!");
//             break;
//         case 3:
//             console.log("🗡️ Você escolheu LADINO!");
//             break;
//         case 4:
//             console.log("🏹 Você escolheu CAÇADOR!");
//             break;
//         case 5:
//             console.log("✝️ Você escolheu CLÉRIGO!");
//             break;
//         case 6:
//             console.log("👤 Você escolheu criar sua própria classe!");
//             break;
//         default:
//             console.log("❌ Classe inválida!");
//     }
//     ask.question(`press ENTER to go...`)
// }
// function showInfo(): void {
//     console.log(`
// ==================================================
//                  CHARACTER
// ==================================================
// Name: Aldric
// Class: Warrior
// Health: 100 / 100
// Attack: 15
// Defense: 10
// Gold: 50
// Equipment:
// Weapon: Iron Sword
// Armor: Leather Armor
// ==================================================
// `);
// }
const item = new Item_1.Item(0);
item.ancientKey();
item.ancientKey();
item.ancientKey();
item.removeKey();

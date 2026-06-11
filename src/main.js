import { Boot } from './scenes/Boot';
import { Game } from 'phaser';
import { MainMenu } from './scenes/MainMenu';
import { MainGame } from './scenes/MainGame';
import { Preloader } from './scenes/Preloader';
import * as Phaser from 'phaser';

//  Find out more information about the Game Config at: https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        MainGame,
    ]
};

export default new Game(config);

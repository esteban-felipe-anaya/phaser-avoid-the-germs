import { Boot } from './scenes/Boot';
import { Game } from 'phaser';
import { MainMenu } from './scenes/MainMenu';
import { MainGame } from './scenes/MainGame';
import { Preloader } from './scenes/Preloader';
import * as Phaser from 'phaser';

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

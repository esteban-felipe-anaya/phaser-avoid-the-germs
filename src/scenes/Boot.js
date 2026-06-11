import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.image('preloader', 'assets/preloader.png');

        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.setPath('assets/games/germs/');
        this.load.image('background', 'background.png');
        this.load.bitmapFont('slime', 'slime-font.png', 'slime-font.xml');
    }

    create ()
    {
        this.registry.set('highscore', 0);

        this.scene.start('Preloader');
    }
}

import Phaser from 'Phaser';

let game = new Phaser.Game(640, 360, Phaser.AUTO);
// Because I'm using parcel, have to require the image 
// so it picks it up
const backgroundImg = require('./assets/images/background.png');

let GameState = {
    preload() {
        // pass the new image hash location to the load function
        this.load.image('background', backgroundImg);
    },
    create() {
        this.background = this.add.sprite(0, 0, 'background');
    },
    update() {

    },
}

game.scene.add('GameState', GameState);
game.scene.start('GameState');
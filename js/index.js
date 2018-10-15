var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
    preload: function() {
        // pass the new image hash location to the load function
        this.load.image('background', './assets/images/background.png');
        this.load.image('chicken', './assets/images/chicken.png');
        this.load.image('horse', './assets/images/horse.png');
        this.load.image('pig', './assets/images/pig.png');
        this.load.image('sheep', './assets/images/sheep.png');
    },
    create: function() {
        this.background = this.add.sprite(0, 0, 'background');
        this.chicken = this.add.sprite(game.world.centerX, game.world.centerY, 'chicken'); 
        this.chicken.anchor.setTo(0.5, 0.5);

        this.sheep = this.game.add.sprite(100, 250, 'sheep');
        this.sheep.scale.setTo(0.5);
        this.sheep.anchor.setTo(0.5);
        this.sheep.angle = -45;
    },
    update: function() {
        this.sheep.angle += 0.5;
    },
}

game.state.add('GameState', GameState);
game.state.start('GameState');
var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
    preload: function() {
        // pass the new image hash location to the load function
        this.load.image('background', './assets/images/background.png');
        this.load.image('chicken', './assets/images/chicken.png');
        this.load.image('horse', './assets/images/horse.png');
        this.load.image('pig', './assets/images/pig.png');
        this.load.image('sheep', './assets/images/sheep.png');
        this.load.image('arrow', './assets/images/arrow.png');
    },
    create: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pgaeAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // Currently dependent on rendering order. 
        this.background = this.add.sprite(0, 0, 'background');

        var animalData = [
            {key: 'chicken', text: 'CHICKEN'},
            {key: 'horse', text: 'HORSE'},
            {key: 'pig', text: 'PIG'},
            {key: 'sheep', text: 'SHEEP'},
        ];

        this.animals = this.game.add.group();

        var animal;

        animalData.forEach(function(element) {
            animal = this.animals.create(-1000, this.game.world.centerY, element.key);
            
            animal.anchor.setTo(0.5);
            animal.customParams = {
                text: element.text,
            };
            animal.inputEnabled = true;
            animal.input.pixelPerfectClick = true;
            animal.events.onInputDown.add(this.animateAnimal, this);
        }, this);

        this.currentAnimal = this.animals.next();
        this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY);
    
        this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
        this.rightArrow.inputEnabled = true;
        this.rightArrow.anchor.setTo(0.5);
        this.rightArrow.customParams = { direction: 1};
        this.rightArrow.pixelPerfectClick = true;
        this.rightArrow.events.onInputDown.add(this.switchAnimal, this);

        this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
        this.leftArrow.inputEnabled = true;
        this.leftArrow.anchor.setTo(0.5);
        this.leftArrow.scale.x = -1;
        this.leftArrow.customParams = { direction: -1};
        this.leftArrow.pixelPerfectClick = true;
        this.leftArrow.events.onInputDown.add(this.switchAnimal, this);

        this.leftArrow.inputEnabled = true;
        this.leftArrow.input.pixelPerfectClick = true;
    },
    update: function() {
    },
    switchAnimal: function(sprite, event) {
        var newAnimal, endX;
        if (sprite.customParams.direction > 0) {
            newAnimal = this.animals.next();
            endX = 640 + this.currentAnimal.width / 2;
        } else {
            newAnimal = this.animals.previous();
            endX = -this.currentAnimal.width/2;
        }

        this.currentAnimal.x = endX;
        newAnimal.x = this.game.world.centerX;
        this.currentAnimal = newAnimal;
    },
    animateAnimal: function(sprite, event) {

    }
}

game.state.add('GameState', GameState);
game.state.start('GameState');
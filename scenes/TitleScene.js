export default class TitleScene extends Phaser.Scene {

    constructor() {
        super({key: "TitleScene"})
    }

    create() {
        //this.background = this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,"background")
        this.background = [
            this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,"background_1"),
            this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,"background_2"),
            this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,"background_3"),
            this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,"background_4"),
        ]

        this.changeSpeed = [ 0.5, 0.3, 0.7, 0.2 ]

        this.background.forEach(function(item) {
            item.setOrigin(0,0)
        });
    }

    update() {
        for (let i = 0; i < this.background.length; i++) {
            this.background[i].tilePositionX -= this.changeSpeed[i]
        }
    }

}
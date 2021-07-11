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

        this.menuButtons = [
            this.playButton = this.add.image(this.game.config.width / 2, 300, "play").setScale(0.4).setInteractive({useHandCursor:true}),
            this.controlsButton = this.add.image(this.game.config.width / 2, 400, "controls").setScale(0.4).setInteractive({useHandCursor:true}),
            this.optionsButton = this.add.image(this.game.config.width / 2, 500, "options").setScale(0.4).setInteractive({useHandCursor:true})
        ]

        this.title = this.add.text(this.game.config.width / 20, 50, "STAR SWITCH").setStyle({fontFamily: 'Londrina Solid'})
        this.title.setOrigin(0,0)

        this.changeSpeed = [ 0.5, 0.3, 0.7, 0.2 ]

        this.background.forEach(function(item) {
            item.setOrigin(0,0)
        })

        this.menuButtons.forEach(function(item) {
            item.on('pointerover', function() {item.setTint(0xf2cd60)})
            item.on('pointerout', function() {item.setTint(0xffffff)})
            item.on('pointerdown', function() {item.setTint(0xbd910f)})
            item.on('pointerup', function() {item.setTint(0xf2cd60)})
        })
    }

    update() {
        for (let i = 0; i < this.background.length; i++) {
            this.background[i].tilePositionX -= this.changeSpeed[i]
        }
    }

}
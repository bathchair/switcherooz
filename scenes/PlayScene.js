export default class PlayScene extends Phaser.Scene {

    constructor() {
        super({key: "PlayScene"})
    }

    create() {

        this.background = this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,"background").setOrigin(0,0)

        var base = this.add.grid(this.game.config.width / 2, this.game.config.height / 2, 500, 500, 50, 50, 0xf3d068).setAltFillStyle(0xeebe2f)

    }

}
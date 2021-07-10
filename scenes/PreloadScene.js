export default class PreloadScene extends Phaser.Scene {

    constructor() {
        super({key: "PreloadScene"})
    }

    preload() {
        this.load.image("background", "assets/images/background.png")
        this.load.image("background_1", "assets/images/background_1.png")
        this.load.image("background_2", "assets/images/background_2.png")
        this.load.image("background_3", "assets/images/background_3.png")
        this.load.image("background_4", "assets/images/background_4.png")
    }

    create() {
        this.add.text(20, 20, "Loading...")
        this.scene.start("TitleScene")
    }

}
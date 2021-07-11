export default class PreloadScene extends Phaser.Scene {

    constructor() {
        super({key: "PreloadScene"})
    }

    preload() {
        // background image for title screen
        this.load.image("background", "assets/images/background.png")
        this.load.image("background_1", "assets/images/background_1.png")
        this.load.image("background_2", "assets/images/background_2.png")
        this.load.image("background_3", "assets/images/background_3.png")
        this.load.image("background_4", "assets/images/background_4.png")

        // title screen buttons
        this.load.image("play", "assets/images/Play Button.png")
        this.load.image("options", "assets/images/Options Button.png")
        this.load.image("controls", "assets/images/Controls Button.png")

        // title gfx
        this.load.image("title_v1", "assets/images/title_v1.png")
    }

    create() {
        this.add.text(20, 20, "Loading...")
        this.scene.start("TitleScene")
    }

}
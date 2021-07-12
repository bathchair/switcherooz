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
        this.load.image("title_v2", "assets/images/title_v2.png")
        this.load.image("title_v3", "assets/images/title_v3.png")
        this.load.image("title_v4", "assets/images/title_v4.png")
        this.load.image("title_v5", "assets/images/title_v5.png")

        // tile sprites
        this.load.image('tile1_e', "assets/images/tile1_empty.png")
        this.load.image('tile2_e', "assets/images/tile2_empty.png")
        this.load.image('tile1_p1', "assets/images/tile1_p1.png")
        this.load.image('tile2_p1', "assets/images/tile2_p1.png")
        this.load.image('tile1_p2', "assets/images/tile1_p2.png")
        this.load.image('tile2_p2', "assets/images/tile2_p2.png")
    }

    create() {
        this.add.text(20, 20, "Loading...")

        this.anims.create({
            key: 'title_change',
            frames: [
                {key: 'title_v1'},
                {key: 'title_v2'},
                {key: 'title_v3'},
                {key: 'title_v5'}
            ],
            frameRate: 1,
            repeat: -1
        })

        this.anims.create({
            key: 'tile1',
            frames: [
                {key: 'tile1_e'},
                {key: 'tile1_p1'},
                {key: 'tile1_p2'}
            ],
            frameRate: 0,
            repeat: 0
        })

        this.anims.create({
            key: 'tile2',
            frames: [
                {key: 'tile2_e'},
                {key: 'tile2_p1'},
                {key: 'tile2_p2'}
            ],
            frameRate: 0,
            repeat: 0
        })

        this.scene.start("PlayScene")
    }

}
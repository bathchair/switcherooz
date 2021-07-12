import Phaser from 'phaser'
import PreloadScene from './scenes/PreloadScene.js'
import TitleScene from './scenes/TitleScene.js'
import PlayScene from './scenes/PlayScene.js'

const DEFAULT_WIDTH = 640
const DEFAULT_HEIGHT = 640

const config = {
    type: Phaser.AUTO,
    backgroundColor: 'black',
    scale: {
      parent: 'phaser-game',
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, TitleScene, PlayScene],
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },
    render: {
      pixelArt: true
    }
  }
  
var game = new Phaser.Game(config)
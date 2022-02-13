import { GameWindow } from "./GameWindow.js"
import { Player } from "../objects/Player.js"
import { GameScenario } from "./GameScenario.js"
import { TestMap } from "../scenarios/TestMap.js"
import { GameCamera } from "./GameCamera.js"

class GameMain {

  private canvas: CanvasRenderingContext2D

  private _player: Player
  private _scenario: GameScenario
  private _window: GameWindow
  private _camera: GameCamera

  constructor() {
    this.onStart()
    this.onUpdate()
  }

  onStart() {
    console.log("Start game")
    
    const canvasRef = document.getElementById("game_canvas") as HTMLCanvasElement
    this.canvas = canvasRef.getContext("2d")

    this._window = new GameWindow()
    this._window.onStart(this.canvas)

    this._scenario = new TestMap()
    this._scenario.onStart()

    this._player = new Player()
    this._player.onStart()

    this._camera = new GameCamera()
    this._player.subscribe(this._camera)
  }

  onUpdate() {
    setInterval(() => {
      this._window.onUpdate(this.canvas)
      this._scenario.onUpdate(this.canvas)
      this._player.onUpdate(this.canvas)
    }, 100)
  }

}

export { GameMain }
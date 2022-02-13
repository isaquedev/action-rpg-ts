import { Position } from "../framework/GameCore.js";
import { drawTile, Tiles } from "../framework/GameDraw.js";
import { ObservableGameObject } from "../framework/GameObject.js";

type KeyActions = "left" | "right" | "top" | "bottom"

type KeyAction = {
  key: string
  action: KeyActions
  enabled: boolean
}

class Player extends ObservableGameObject {

  id = "player"
  position: Position = { x: 0, y: 0 };

  moveActions: KeyAction[] = [
    { key: "a", action: "left", enabled: false },
    { key: "d", action: "right", enabled: false },
    { key: "w", action: "top", enabled: false },
    { key: "s", action: "bottom", enabled: false }
  ]

  onStart() {
    document.addEventListener("keydown", event => {
      this.keyboardMap(event)
    })
  }

  private keyboardMap(event: KeyboardEvent) {
    const move = this.moveActions.find(action => action.key === event.key)

    if (move) {
      this.onMove(move)
    }
  }

  private onMove(action: KeyAction) {
    if (action.action === "left") {
      this.position.x -= 1
    } else if (action.action === "right") {
      this.position.x += 1
    }

    if (action.action === "top") {
      this.position.y -= 1
    } else if (action.action === "bottom") {
      this.position.y += 1
    }

    this.notify()
  }

  onUpdate(canvas: CanvasRenderingContext2D) {
    drawTile(canvas, Tiles.PLAYER, this.position)
  }

}

export { Player }
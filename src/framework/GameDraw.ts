import { Position } from "./GameCore.js"
import { GameWindow } from "./GameWindow.js"

enum Tiles {
  GRASS, TREE, PLAYER
}

function drawTile(canvas: CanvasRenderingContext2D, tile: Tiles, position: Position) {
  switch(tile) {
    case Tiles.GRASS:
      canvas.fillStyle = "#7DCEA0"
      break 
    case Tiles.TREE:
      canvas.fillStyle = "#229954"
      break
    case Tiles.PLAYER:
      canvas.fillStyle = " #2E86C1"
      break;
  }

  canvas.fillRect(
    GameWindow.tileSize.width * position.x,
    GameWindow.tileSize.height * position.y,
    GameWindow.tileSize.width + 1,
    GameWindow.tileSize.height + 1
  )
}

export { Tiles, drawTile }
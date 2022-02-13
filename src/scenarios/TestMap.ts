import { GameScenario } from "../framework/GameScenario.js";
import { Tiles } from "../framework/GameDraw.js";

class TestMap extends GameScenario {

  tileMaps: Tiles[][]

  onStart(): void {
    this.tileMaps = [
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.TREE,  Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.TREE,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.TREE,   Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
      [Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS, Tiles.GRASS,  Tiles.GRASS, Tiles.GRASS, Tiles.GRASS],
    ]
  }

  onUpdate(canvas: CanvasRenderingContext2D): void {
    for (let y = 0; y < this.tileMaps.length; y++) {
      for (let x = 0; x < this.tileMaps[y].length; x++) {
        this.drawTile(canvas, this.tileMaps[y][x], {x: x, y: y})
      }
    }
  }

}

export { TestMap }
import { Position } from "./GameCore.js";
import { Tiles, drawTile } from "./GameDraw.js";

export interface IGameScenario {
  onStart(): void
  onUpdate(canvas: CanvasRenderingContext2D): void
}

export abstract class GameScenario implements IGameScenario {

  abstract onStart(): void;
  abstract onUpdate(canvas: CanvasRenderingContext2D): void;

  protected drawTile(canvas: CanvasRenderingContext2D, tile: Tiles, position: Position) {
    drawTile(canvas, tile, position)
  }

}
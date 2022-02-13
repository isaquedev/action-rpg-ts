import { Position } from "./GameCore";
import { IGameObject, IObserverGameObject } from "./GameObject";

class GameCamera implements IObserverGameObject {

  camera: Position

  observe(data: IGameObject): void {
    this.camera = data.position
  }

}

export { GameCamera }
import { Position } from "./GameCore"

export interface IGameObject {
  id: string
  position: Position
}

export interface IObserverGameObject {
  observe(object: IGameObject): void
}

export abstract class ObservableGameObject implements IGameObject {
  id: string
  position: Position
  private observers: IObserverGameObject[] = []

  subscribe(observer: IObserverGameObject) {
    this.observers.push(observer)
  }
  
  protected notify() {
    this.observers.forEach(observer => observer.observe(this))
  }
}
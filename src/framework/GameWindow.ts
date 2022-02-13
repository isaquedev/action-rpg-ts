type ScreenSize = {
  width: number
  height: number
  changed: boolean
}

type TileSize = {
  width: number
  height: number
}

class GameWindow {

  static tileSize: TileSize

  private widthProporcion = 17
  private heightProporction = 9

  private CalcCanvasSize(canvas: CanvasRenderingContext2D): ScreenSize {
    const proportionalWidth = window.innerWidth / this.widthProporcion
    const proportionalHeight = window.innerHeight / this.heightProporction

    let width, height = 0

    if (proportionalWidth < proportionalHeight) {
      width = window.innerWidth
      height = window.innerWidth / this.widthProporcion * this.heightProporction - 2
    } else {
      width = window.innerHeight / 9 * this.widthProporcion
      height = window.innerHeight - 2
    }

    return {
      width,
      height,
      changed: canvas.canvas.width !== width || canvas.canvas.height !== height
    }
  }

  private updateCanvasSize(canvas: CanvasRenderingContext2D, sizes: ScreenSize) {
    GameWindow.tileSize = {
      width: sizes.width / (this.widthProporcion * 2),
      height: sizes.height / (this.heightProporction * 2)
    }
    canvas.canvas.width = sizes.width
    canvas.canvas.height = sizes.height
  }

  onStart(canvas: CanvasRenderingContext2D) {
    const sizes = this.CalcCanvasSize(canvas)
    this.updateCanvasSize(canvas, sizes)
  }

  onUpdate(canvas: CanvasRenderingContext2D) {
    const sizes = this.CalcCanvasSize(canvas)
    if (sizes.changed) {
      this.updateCanvasSize(canvas, sizes)
    }
  }
}

export { GameWindow }
import * as P5 from 'p5'

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(640, 360)
  }

  p.draw = () => {
    // x, y, w, h
    // p.background(255, 0, 0)
    // p.ellipse(200, 200, 50, 50)
    p.rect(100, 200, 75, 125)
  }
}

export const Sketch = new P5(sketch)

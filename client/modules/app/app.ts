import * as P from 'p5'

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400)
  }

  p.draw = () => {
    p.background(255, 0, 0)
    p.ellipse(200, 200, 50, 50)
  }
}

export const Sketch = new P(sketch)

import React, { useCallback, useState } from 'react';
import Sketch from 'react-p5';
import '../styles/DrawComponent.css';

const DrawComponent = () => {
  let hex;
  const [weightStroke, setWeightStroke] = useState(2);
  const [color, setColor] = useState('#00ff00');
  const setup = useCallback((p5) => {
    p5.createCanvas(1830, 900);
  }, []);

  const onChangeColor = useCallback((event) => {
    hex = event.target.value;
    setColor(hex);
  }, []);

  const draw = useCallback((p5) => {
    const c = p5.color(`${color}`);
    p5.stroke(c);
    p5.strokeWeight(weightStroke);
    if (p5.mouseIsPressed) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  }, [color, weightStroke]);
  const onChangeRange = useCallback((event) => {
    setWeightStroke(event.target.value);
  }, []);

  return (
    <div className="container">
      <input type="range" onChange={onChangeRange} value={weightStroke} />
      <span>Pick Weight</span>
      <h2>{weightStroke}</h2>
      <input type="text" value={color} onChange={onChangeColor} />
      <input type="color" value={color} onChange={onChangeColor} />
      <span>Pick Color</span>
      <Sketch setup={setup} draw={draw} onChange={onChangeColor} />
    </div>
  );
};

export default DrawComponent;

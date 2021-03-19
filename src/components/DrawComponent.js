import React, { useCallback, useState } from 'react';
import Sketch from 'react-p5';
import '../styles/DrawComponent.css';

const DrawComponent = () => {
  const [weightStroke, setWeightStroke] = useState(2);
  const setup = useCallback((p5) => {
    p5.createCanvas(1848, 976);
  }, []);

  const draw = useCallback((p5) => {
    p5.stroke(400, 100, 555, 123);
    p5.strokeWeight(weightStroke);
    if (p5.mouseIsPressed) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  }, [weightStroke]);
  const onChangeRange = (event) => {
    setWeightStroke(event.target.value);
  };
  return (
    <div className="container">
      <input type="range" onChange={onChangeRange} value={weightStroke} />
      <h2>{weightStroke}</h2>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default DrawComponent;

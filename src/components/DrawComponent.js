import React, { useCallback } from 'react';
import Sketch from 'react-p5';

const DrawComponent = () => {
  const setup = (p5) => {
    p5.createCanvas(1848, 976);
    p5.background(102);
  };

  const draw = (p5) => {
    p5.stroke(400, 100, 555, 123);
    p5.strokeWeight(1);
    if (p5.mouseIsPressed === true) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  };

  // const mausePressed = useCallback((p5) => {
  //   p5.clear();
  // }, []);

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default DrawComponent;

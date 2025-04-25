import { useEffect, useRef } from "react";
import { setup } from "../main";

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) setup();
  }, []);


  return (
    <div className="canvas-container">
      <canvas id="bg-canvas" ref={ref}></canvas>
      <canvas id="px-canvas" ref={ref}></canvas>
    </div>
  );
}

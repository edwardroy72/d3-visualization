import React from "react";

const Canvas = () => {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    d3.select(canvasRef.current) // SVG Constructor
      .append("svg")
      .attr("width", 500) // set html attributes of element
      .attr("height", 500)
      .append("g"); // groups elements created together
  });
  return <svg ref={svgRef}></svg>;
};

export default Canvas;

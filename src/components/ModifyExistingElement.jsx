import React from "react";
import * as d3 from "d3";

const ModifyExistingElement = () => {
  React.useEffect(() => {
    d3.select("h1")
      .text("Hello World!")
      .style("text-align", "center")
      .style("color", "#B98DCA");
  });

  return <></>;
};

export default ModifyExistingElement;

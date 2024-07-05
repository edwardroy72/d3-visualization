import React from "react";
import * as d3 from "d3";

const AppendingNewElement = () => {
  React.useEffect(() => {
    d3.select("#App-header").append("p").text("Hey, I added this element using d3!!");
  });
  return <></>;
};

export default AppendingNewElement;

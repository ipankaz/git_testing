import React from "react";
import Square from "./Square";

export default function Board(props) {
    console.log(props);
  return (
    <div>
      <div className="border-row">
        <Square value={props.value}/>
        <Square />
        <Square />
      </div>
      <div className="border-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="border-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

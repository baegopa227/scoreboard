import React from "react";
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";



export const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <Statistics players={props.players}/>
      <h1 className="h1">{props.title}</h1>
      <Stopwatch></Stopwatch>
    </header>
  );
}


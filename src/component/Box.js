import React from "react";

const Box = (props) => {
  console.log(props);
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img
        className="box-img"
        src={props.item && props.item.img}
        alt="가위바위보"
      />
      <h1>{result}</h1>
    </div>
  );
};

export default Box;

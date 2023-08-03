import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandBackFist,
  faHandScissors,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
const choice = {
  rock: {
    name: "Rock",
    img: "https://img.freepik.com/premium-photo/hand-clenched-in-a-fist-woman-hand-gesturing-isolated-on-white_146377-3568.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://cdn.crowdpic.net/detail-thumb/thumb_d_8FD8690F83B46D0CDEF1173A1CAEA002.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn.crowdpic.net/detail-thumb/thumb_d_4ABE250623ED062CF7DBB6CFB93E364E.jpg",
  },
};
function App() {
  const [user, setUser] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUser(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputer(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };
  const judgement = (user, computer) => {
    console.log(user, computer);
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomValue = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomValue];
    console.log(final, randomValue);
    return choice[final];
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={user} result={result} />
        <Box title="Computer" item={computer} result={result} />
      </div>
      <div className="game">
        <button onClick={() => play("scissors")}>
          <FontAwesomeIcon icon={faHandScissors} />
        </button>
        <button onClick={() => play("rock")}>
          {" "}
          <FontAwesomeIcon icon={faHandBackFist} />
        </button>
        <button onClick={() => play("paper")}>
          <FontAwesomeIcon icon={faHand} />
        </button>
      </div>
      <h2 className={`resultText ${result}`}>{result}</h2>
    </div>
  );
}

export default App;

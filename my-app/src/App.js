import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "😃": "Smiley",
  "😄": "Smile",
  "😆": "laughig",
  "😂": "Joy",
  "😬": "Grimacing face",
  "😔": "Pensive Pain",
  "😴": "Sleeping Face",
  "😨": "Fearfull-Glass"
};

export default function App(event) {
  const [meaning, setMeaning] = useState("");

  function emojiInputHnadler(event) {
    var userInput = event.target.value;

    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Put emoji,Get Reaction</h1>

      <input onChange={emojiInputHnadler}></input>
      <h3> {meaning} </h3>
      <h2>😃😄😆😂😬😔😨</h2>
    </div>
  );
}

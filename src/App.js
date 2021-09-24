import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😅": "Grinning Face with Sweat",
  "😆": "Grinning Squinting Face",
  "😄": "Grinning Face with Smiling Eyes",
  "😉": "Winking Face",
  "🤔": "Thinking Face",
  "🤗": "Hugging Face",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "speechlessness",
  "🤕": " physical injury or pain"
};

var emojiWeknow = Object.keys(emojiDictionary);
console.log(emojiWeknow);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var userInput = event.target.value;
    meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "NOT FOUND IN DATABASE!!!";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={inputChangeHandler} />

      <p
        style={{
          fontSize: "2rem",
          paddingTop: "10px"
        }}
      >
        {meaning}
      </p>
      <h3 style={{ padding: "3rem" }}>
        {emojiWeknow.map(function (emoji) {
          return (
            <span
              style={{
                fontSize: "2rem",
                padding: "1rem 0.5rem ",
                cursor: "pointer"
              }}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </h3>
    </div>
  );
}

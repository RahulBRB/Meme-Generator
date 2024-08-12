import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [upperText, setUpperText] = useState("");
  const [lowerText, setLowerText] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3AGD4O2UoQ4AjFXjB76E3bQCjMVGV2BfCtA&s",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData.data);

  function getMemeImage() {
    const memeArray = allMemeImages.memes;
    const randomNum = Math.floor(Math.random() * memeArray.length);

    const memeUrl = memeArray[randomNum].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        topText: upperText,
        bottomText: lowerText,
        randomImage: memeUrl,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          value={upperText}
          placeholder="Top text"
          className="form--input"
          onChange={(e) => setUpperText(e.target.value)}
        />
        <input
          type="text"
          value={lowerText}
          placeholder="Bottom text"
          className="form--input"
          onChange={(e) => setLowerText(e.target.value)}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <h2 className="meme--text meme--text__top">{meme.topText}</h2>
      <img src={meme.randomImage} className="meme--image"></img>
      <h2 className="meme--text meme--text__bottom">{meme.bottomText}</h2>

    </main>
  );
}

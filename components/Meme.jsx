import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3AGD4O2UoQ4AjFXjB76E3bQCjMVGV2BfCtA&s",
  });

  //Text section
  function handleChange(event){
    const {name, value} = event.target;
    setMeme(prevMeme =>{
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  //Image section
  const [allMemeImages, setAllMemeImages] = useState(memesData.data);

  function getMemeImage() {
    const memeArray = allMemeImages.memes;
    const randomNum = Math.floor(Math.random() * memeArray.length);

    const memeUrl = memeArray[randomNum].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memeUrl
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          value={meme.topText}
          placeholder="Top text"
          className="form--input"
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          value={meme.bottomText}
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

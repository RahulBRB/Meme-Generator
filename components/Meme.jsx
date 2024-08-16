import React, { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
    randomImage:
      "https://i.imgflip.com/145qvv.jpg",
  });

  const [allMemes, setAllMemes] = useState([]); // It will be an empty array first which we will fill with data from the API
  
  // API section
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  // Image section
  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const memeUrl = allMemes[randomNum].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memeUrl
      };
    });
  }

  // Text section
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
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

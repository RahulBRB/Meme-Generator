import React from "react"
import memesData from "../memesData"

export default function Meme() {
    
    function getMeme(){
      const memeArray = memesData.data.memes; 
      const randomNum = Math.floor(Math.random() * memeArray.length);
      
      const memeUrl= (memesData.data.memes[randomNum].url);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
              {/* <img src={memUrl}/> */}
              Meme goes here
            </div>
        </main>
    )
}
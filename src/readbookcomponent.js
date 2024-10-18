import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './readbookcomponent.css';

export default function ReadBookComponent() {
  const location = useLocation();
  const { book } = location.state || {};
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [speechRate, setSpeechRate] = useState(1); 
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [bookWords, setBookWords] = useState([]);
  const synthRef = useRef(null); 

  useEffect(() => {
    if (book && book.content) {
      const wordsArray = book.content.split(" ");
      setBookWords(wordsArray);
    }
  }, [book]);

  const handleReadAloud = (startIndex = 0) => {
    if (!book || !book.content) return;

    let currentIndex = startIndex;

    const speakWord = () => {
      if (currentIndex >= bookWords.length) {
        window.speechSynthesis.cancel();
        return;
      }

      const speech = new SpeechSynthesisUtterance(bookWords.slice(currentIndex).join(" "));
      speech.lang = "en-US";
      speech.rate = speechRate; 
      synthRef.current = speech;

      speech.onstart = () => {
        setCurrentWordIndex(currentIndex); 
      };

      speech.onend = () => {
        currentIndex = bookWords.length; 
      };

      window.speechSynthesis.speak(speech);
    };

    window.speechSynthesis.cancel();
    speakWord();
  };

  const handleRateChange = (e) => {
    setSpeechRate(e.target.value);
    if (synthRef.current) {
      window.speechSynthesis.cancel();
      handleReadAloud(currentWordIndex || 0); 
    }
  };

  const handleToggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleWordClick = (index) => {
    handleReadAloud(index); 
  };

  if (!book) {
    return <p>No book selected.</p>;
  }

  return (
    
    <div className="container">
      <div className="content">
        <h1>{book.name}</h1>
        <img
          src={book.img}
          alt={book.name}
          style={{ width: "200px", height: "300px" }}
        />
        <p className="bookText">
          {bookWords.map((word, index) => (
            <span
              key={index}
              onClick={() => handleWordClick(index)}
              style={{
                backgroundColor: index === currentWordIndex ? "yellow" : "transparent",
                cursor: "pointer",
                display: "inline-block",
                marginRight: "5px",
              }}
            >
              {word}
            </span>
          ))}
        </p>
          <div className="speedControl">

        <label htmlFor="rate">Reading Speed: {speechRate}x</label>
        <input
          type="range"
          id="rate"
          min="0.5"
          max="2"
          step="0.1"
          value={speechRate}
          onChange={handleRateChange}
          className="slider"
        />

          </div>

          <div>
          <button onClick={() => handleReadAloud(0)} className="button">📢 Start Reading Aloud</button>

<button onClick={handleToggleMusic} className="button">
  {isPlaying ? "⏸️ Pause Music" : "▶️ Play Calm Music"}
</button>

<audio ref={audioRef} loop>
  <source
    src="https://www.youtube.com/watch?v=10rqqwZdmGg"
    type="audio/mpeg"
  />
  Your browser does not support the audio element.
</audio>

<Link to="/home">
<button className="button">Go back to Home</button>
</Link>
          </div>
      </div>


    </div>
  );
}



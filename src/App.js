import React, { useState } from "react";
import { nanoid } from "nanoid";
import Card from './components/Card.js'
import Container from './components/Container.js'
import Confetti from "react-confetti"
import FadeInOut from "./components/FadeInOut.js";

function App() {
  const easyImages = ['/pokemon-memory-game/images/eeveecard.webp', '/pokemon-memory-game/images/darkespeon.webp', '/pokemon-memory-game/images/lightflareon.webp', '/pokemon-memory-game/images/glaceon.webp', '/pokemon-memory-game/images/lightjolteon.webp', '/pokemon-memory-game/images/leafeoncard.webp', '/pokemon-memory-game/images/darksylveon.webp', '/pokemon-memory-game/images/neoumbreon.webp', '/pokemon-memory-game/images/lightvaporeon.webp',]
  const hardImages = ['/pokemon-memory-game/images/squirtle.webp', '/pokemon-memory-game/images/charmander.webp', '/pokemon-memory-game/images/bulbasaur.webp', '/pokemon-memory-game/images/cyndaquil.webp', '/pokemon-memory-game/images/chikorita.webp', '/pokemon-memory-game/images/totodile.webp', '/pokemon-memory-game/images/torchic.webp', '/pokemon-memory-game/images/treecko.webp', '/pokemon-memory-game/images/mudkip.webp', '/pokemon-memory-game/images/chimchar.webp', '/pokemon-memory-game/images/turtwig.webp', '/pokemon-memory-game/images/piplup.webp', '/pokemon-memory-game/images/tepig.webp', '/pokemon-memory-game/images/snivy.webp', '/pokemon-memory-game/images/oshawott.webp', '/pokemon-memory-game/images/fennekin.webp', '/pokemon-memory-game/images/chespin.webp', '/pokemon-memory-game/images/froakie.webp', '/pokemon-memory-game/images/litten.webp', '/pokemon-memory-game/images/rowlett.webp', '/pokemon-memory-game/images/popplio.webp', '/pokemon-memory-game/images/scorbunny.webp', '/pokemon-memory-game/images/grookey.webp', '/pokemon-memory-game/images/sobble.webp', '/pokemon-memory-game/images/fuecoco.webp', '/pokemon-memory-game/images/sprigatito.webp', '/pokemon-memory-game/images/quaxly.webp']
  const [difficulty, setDifficulty] = useState('easy')
  const [cards, setCards] = useState(allNewCards())
  const [held, setHeld] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
  })
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [score, setScore] = useState(0)
  const [images, setImages] = useState(easyImages)
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const extraStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.6)",
    color: "#FFF",
    font: "xxx-large VT323",
    padding: "20rem 0 0 0",
  };
  React.useEffect(() => {
    const allHeld = [...Object.values(held)].every(element => element === true)
   
    if (allHeld) {
        setGameWon(true)
        setGameOver(true)
    }
}, [held])
React.useEffect(() => {
  const noneHeld = [...Object.values(held)].every(element => element === false)
  if (!noneHeld) {
    toggleShow()
  }
}, [gameOver])
React.useEffect(() => {
 
  if (difficulty === 'easy') {
      setHeld({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false
      })
      setImages(easyImages)
  } else if (difficulty === "hard") {
    setHeld({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false,
      19: false,
      20: false,
      21: false,
      22: false,
      23: false,
      24: false,
      25: false,
      26: false
    })
    setImages(hardImages)
  }
  setCards(allNewCards())
  setScore(0)
}, [difficulty])

  
  function generateNewCard(difficulty) {
    let randomValue;
    difficulty  == 'easy' ? randomValue = Math.ceil(Math.random() * 9) - 1 : randomValue = Math.ceil(Math.random() * 27) - 1; 
    return {
        value: randomValue,
        id: nanoid(),
    }
}

  function allNewCards() {
    const newCards = []
      while(newCards.length < 8) {
       let newCard = generateNewCard(difficulty)
        if(newCards.every(card => card.value !== newCard.value)) {
          newCards.push(newCard)
        }
      }
    return newCards
}
const handleClick = (value) => {
  held[value] ? setGameOver(true) : holdCard(value)
}
function holdCard(value) {
  setCards(allNewCards())
  setHeld(prevHeld => ({
    ...prevHeld,
    [value]: true
  }))
  setScore(prevScore => prevScore + 1)
}
function reRoll() {
  if(gameOver) {
    setScore(0)
    setGameOver(false)
    setGameWon(false)
    toggleShow()
    if (difficulty === 'easy') {
      setHeld({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false
      })
  } else if (difficulty === "hard") {
    setHeld({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false,
      19: false,
      20: false,
      21: false,
      22: false,
      23: false,
      24: false,
      25: false,
      26: false
    })
  }
}
    setCards(allNewCards())
  
}
function toggleDifficulty () {
  setDifficulty(prevDifficulty => {
    return prevDifficulty === 'easy' ? 'hard' : 'easy'
  })
}
const cardElements = cards.map(card => (
  <Card 
      key={card.id} 
      img={images[card.value]}
      value={card.value} 
      isHeld={card.isHeld} 
      handleClick={handleClick}
  />
))
  return (
    <main>
            {gameWon && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
            <FadeInOut show={show} duration={500} style={extraStyles}>
                {gameWon ? 'You Did It!' : "Game Over"}
                </FadeInOut>
            <img src="/pokemon-memory-game/images/logo.png" className="pokemon-logo"/>
            <div className="header">
            <label className="toggleSwitch nolabel" >
											<input onClick={toggleDifficulty} type="checkbox" />
											<a></a>
											<span>
												<span className="left-span">Easy</span>
												<span className="right-span">Hard</span>
											</span>											
										</label>
              <h2 className="button">Score: {score} / {difficulty === 'easy' ? 9 : 27}</h2>
                
                <button 
                    className="button" 
                    type="button"
                    onClick={reRoll}
                >
                    {gameOver ? "New Game" : "Re-roll Cards"}
                </button>
            </div>
            <Container cardElements={cardElements} show={show} extraStyles={extraStyles}/>
            

            
            
        </main>
  );
}

export default App;

import './App.css';
import React from "react";
import {useReducer, useState} from "react";
import {Player} from "./component/Player";
import {Bullet} from "./Bullet";

export const ROOT_CONFIG = {
  width: 800,
  height: 800,
  backgroundColor: "#ffffff",
}

export const gameUnitReducerType = {
  addBullet: "ADD_BULLET",
}

function gameUnitReducer(state, action) {
  switch (action.type) {
    case gameUnitReducerType.addBullet:
      const bullet = <Bullet speed={30} x={action.x} y={action.y} vertical={-1}/>
      return state.concat(bullet)
  }
}

export const GameUnitDispatch = React.createContext(null)

function App() {

  const [gameUnit, gameUnitDispatch] = useReducer(gameUnitReducer, [
    <Player
      width={100} height={100} color="#00ff00"
      y={ROOT_CONFIG.height - 100}
      speed={30}
    />
  ])


  return (
    <div className="App">
      <GameUnitDispatch.Provider value={gameUnitDispatch}>
        <div
          id="game-root"
          style={{
            width: ROOT_CONFIG.width,
            height: ROOT_CONFIG.height,
            backgroundColor: ROOT_CONFIG.backgroundColor
          }}>
          {gameUnit.map((unit) => unit)}
        </div>
      </GameUnitDispatch.Provider>
    </div>
  );
}

export default App;

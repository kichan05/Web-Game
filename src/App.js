import './App.css';
import {useState} from "react";
import {Player} from "./component/Player";
import {Bullet} from "./Bullet";

export const ROOT_CONFIG = {
  width: 800,
  height: 800,
  backgroundColor: "#ffffff",
}

function App() {
  const [gameUnit, setGameUint] = useState([
    <Player
      width={100} height={100} color="#00ff00"
      y={ROOT_CONFIG.height - 100}
      speed={30}
      addBullet={({x, y}) => {
        setGameUint(prev => prev.concat(
          <Bullet speed={30} x={x} y={y} vertical={-1}/>
        ))
      }}
    />
  ])

  const [num, setNum] = useState(0)

  return (
    <div className="App">
      <div
        id="game-root"
        style={{
          width: ROOT_CONFIG.width,
          height: ROOT_CONFIG.height,
          backgroundColor: ROOT_CONFIG.backgroundColor
        }}>
        {gameUnit.map((unit) => unit)}
      </div>
    </div>
  );
}

export default App;

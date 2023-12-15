import {useEffect, useState} from "react";
import {ROOT_CONFIG} from "../App";
import Bullet, {BulletConfig} from "../Bullet";

export const Player = ({x, y, width, height, color, speed, addBullet}) => {
  const [unitInfo, setUnitInfo] = useState({
    x, y, width, height, color
  })
  const style = {
    width: unitInfo.width,
    height: unitInfo.height,
    position: "absolute",
    top: unitInfo.y,
    left: unitInfo.x,
    backgroundColor: unitInfo.color,
  }

  const handleKeyEvent = (event) => {
    let horizontal = 0, vertical = 0
    const key = event.key;
    console.log(key)
    if (key === "ArrowUp")
      vertical = -1
    else if (key === "ArrowDown")
      vertical = 1

    if (key === "ArrowRight")
      horizontal = 1
    else if (key === "ArrowLeft")
      horizontal = -1

    let nextY = unitInfo.y + speed * vertical
    nextY = Math.min(ROOT_CONFIG.height - height, nextY)
    nextY = Math.max(0, nextY)

    let nextX = unitInfo.x + speed * horizontal
    nextX = Math.min(ROOT_CONFIG.width - width, nextX)
    nextX = Math.max(0, nextX)
    setUnitInfo({...unitInfo, x: nextX, y: nextY})

    if(key === " "){
      addBullet({
        x : unitInfo.x + unitInfo.width / 2 - BulletConfig.width / 2,
        y : unitInfo.y - 30
      })
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent)

    return () => {
      window.removeEventListener("keydown", handleKeyEvent)
    }
  }, [unitInfo])

  return (
    <div
      style={style}
    ></div>
  )
}

Player.defaultProps = {
  x: 0,
  y: 0,
  width: 30,
  height: 30,
  color: "#ff0000",
  speed : 30,
  addBullet : () => {}
}

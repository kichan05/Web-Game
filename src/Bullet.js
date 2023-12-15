import {useEffect, useState} from "react";

export const BulletConfig = {
  width : 10,
  height : 10,
}

export const Bullet = ({color, speed, x, y, vertical}) => {
  const [position, setPosition] = useState({x, y})
  const style = {
    width: BulletConfig.width,
    height: BulletConfig.height,
    borderRadius: "100%",
    backgroundColor: color,
    position: "absolute",
    top: position.y,
    left: position.x
  }

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setPosition({...position, y: position.y + speed * vertical})
    }, 100)

    return () => {
      clearInterval(timeInterval)
    }
  }, [position])

  return (
    <div style={style}></div>
  )
}

Bullet.defaultProps = {
  color : "#ff0000",
  speed : 10
}

export default Bullet
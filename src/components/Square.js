import React, {useState} from "react";
import "./Square.css"


const Square = ({onClick, value}) => {

  const [isClick, setIsClick] = useState(false);

  return (
    <button
      className="square"
      onClick={ () => onClick()}
    >
      {value}
    </button>
  )
}
export default Square
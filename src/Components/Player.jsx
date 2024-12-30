import { useState } from "react";

export default function Player({ initName, symbol, isActive, onChangeName }) {
  const [playerName, setIsPlayerName] = useState(initName);
  const [isEditing, setIsEditing] = useState(false);

  function handelEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) onChangeName(symbol, playerName);
  }

  function handelChange(event) {
    setIsPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handelChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>{btnCaption}</button>
    </li>
  );
}

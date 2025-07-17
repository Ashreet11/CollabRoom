import React from "react";
import { v4 as uuid } from "uuid";

const JoinRoom = ({ roomId, userName, setRoomId, setUserName, joinRoom }) => {
  const createRoomId = () => {
    const newRoomId = uuid();
    setRoomId(newRoomId);
  };

  return (
    <div className="join-container">
      <div className="join-form">
        <h1>Join Code Room</h1>
        <input
          type="text"
          placeholder="Room Id"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button onClick={createRoomId}>Create ID</button>
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default JoinRoom;

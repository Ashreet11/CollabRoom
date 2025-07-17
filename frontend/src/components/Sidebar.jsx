import React from "react";

const Sidebar = ({
  roomId,
  users,
  typing,
  language,
  handleLanguageChange,
  copyRoomId,
  copySuccess,
  leaveRoom,
}) => {
  return (
    <div className="sidebar">
      <div className="room-info">
        <h2>Code Room: {roomId}</h2>
        <button onClick={copyRoomId} className="copy-button">
          Copy Id
        </button>
        {copySuccess && <span className="copy-success">{copySuccess}</span>}
      </div>

      <h3>Users in Room:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.slice(0, 8)}...</li>
        ))}
      </ul>

      <p className="typing-indicator">{typing}</p>

      <select
        className="language-selector"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
      </select>

      <button className="leave-button" onClick={leaveRoom}>
        Leave Room
      </button>
    </div>
  );
};

export default Sidebar;

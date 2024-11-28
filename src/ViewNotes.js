import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function ViewNotes() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  return (
    <div className="container">
      <h1>Список усіх записів</h1>
      {notes.length > 0 ? (
        <ul className="notes-list">
          {notes.map((note, index) => (
            <li key={index} className="note-item">
              {note}
            </li>
          ))}
        </ul>
      ) : (
        <p>Записів поки немає.</p>
      )}
      <div className="button-group">
        <button onClick={() => navigate("/")} className="button secondary">
          Повернутися назад
        </button>
      </div>
    </div>
  );
}

export default ViewNotes;

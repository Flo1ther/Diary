import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function CreateNote() {
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const saveNote = () => {
    if (note.trim()) {
      const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      savedNotes.push(note);
      localStorage.setItem("notes", JSON.stringify(savedNotes));
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h1>Створити новий запис</h1>
      <textarea
        rows="5"
        className="textarea"
        placeholder="Напишіть ваш запис тут..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="button-group">
        <button onClick={saveNote} className="button">Зберегти</button>
        <button onClick={() => navigate("/")} className="button secondary">
          Повернутися назад
        </button>
      </div>
    </div>
  );
}

export default CreateNote;

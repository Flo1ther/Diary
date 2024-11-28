import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <h1>Особистий щоденник</h1>
      <p>Вітаємо у вашому особистому щоденнику!</p>
      <div className="button-group">
        <Link to="/create">
          <button className="button">Створити запис</button>
        </Link>
        <Link to="/view">
          <button className="button">Переглянути всі записи</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
  
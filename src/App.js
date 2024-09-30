import React, { useState } from 'react';
import 'boostrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [tytul, setTytul] = useState("")
  const [rodzaj, setRodzaj] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Tytuł: ${tytul}, Rodzaj: ${rodzaj}`)
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Dodaj film</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Tytul">Tytuł filmy:</label>
          <input
          type="text"
          id="tytul"
          className="form-control"
          value={tytul}
          onChange={(e) => setTytul(e.target.value)}
          />

          <div className="form-group">
            <label htmlFor="rodzaj">Rodzaj filmu:</label>
            <select
            id="rodzaj"
            className="form-control"
            value={rodzaj}
            onChange={(e) => setRodzaj(e.target.value)}
            >
            <option value="">Wybierz rodzaj</option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App;

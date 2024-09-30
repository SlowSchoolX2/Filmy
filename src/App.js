import React, { useState } from 'react';
import 'boostrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [tytul, setTytul] = useState("")
  const [rodzaj, setRodzaj] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Tytuł: ${tytul}, Rodzaj: ${rodzaj}')
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Dodaj film</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Tytul">Tytuł filmy:</label>
        </div>
      </form>
    </div>
  )
}

export default App;

import React, { useState, useEffect } from 'react';

function ExampleWithUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    /* modification du titre de l'onglet, donc interaction avec
    l'environnement : la fonction n'est pas pure */
    document.title = `Vous avez cliqué ${count} fois`;
  });
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}> Cliquez ici </button>
    </div>
  );
}


function Welcome(props) {
  return <h1>Bonjour, {props.nom}</h1>;
}

function Main() {
  return (
    <main>
      <Welcome nom="Bob" />
      <ExampleWithUseEffect />
    </main>
  )
}

function App() {
  return <Main />;
}

export default App;

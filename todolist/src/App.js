import React, { useState } from 'react';

function Counter() {
  // déclaration d’un état avec variable count = 0 et setter setCount
  const [count, setCount] = useState(0);
  function onClickAction() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={onClickAction}> +3 </button>
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
      <Counter />
    </main>
  )
}

function App() {
  return <Main />;
}

export default App;

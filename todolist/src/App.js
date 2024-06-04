import React, { useState } from 'react';
import Welcome from './Welcome';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <header>
        <Welcome name="Bob" />
      </header>
      <main>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}> Cliquez ici </button>
      </main>
    </div>
  )
}

export default App;

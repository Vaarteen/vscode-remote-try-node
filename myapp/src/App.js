import React, { useState } from 'react';
import Button from './Button'

function useCustomHook(value) {
  // La logique du hook de débugage
  React.useDebugValue(value ? 'Vrai' : "Faux");
}

function App() {
  const [value, setValue] = useState(false);
  useCustomHook(value);
  return (
    <div>
      <Button onClick={() => setValue(!value)}> Changer </Button>
      <p> {value.toString()} </p>
    </div>
  )
}
export default App;

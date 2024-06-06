import React, { useState, useEffect } from 'react';
import Button from './Button'

function App() {
  const [count, setCount] = useState(0);
  console.log('Count', count);
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}> +1 </Button>
      <p> {count} </p>
    </div>
  )
}
export default App;

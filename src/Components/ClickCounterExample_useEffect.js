import React, { useState, useEffect } from 'react';

export default function Example2() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className='spacing-1'>
      <h2>
          Counter with useEffect
      </h2>
      <p>This changes browser tab title</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr/>
    </div>
  );
}
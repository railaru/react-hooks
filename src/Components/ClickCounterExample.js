import React, { useState } from 'react';

export default function Example() {

  const [count, setCount] = useState(0);

  return (
    <div className='spacing-1'>
      
      <h2>Simple counter</h2>      
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <hr/>      
    </div>
  );
}
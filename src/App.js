import React from 'react';
import './App.css';

import ClickCounterExample from './Components/ClickCounterExample'
import ClickCounterExampleUseEffect from './Components/ClickCounterExample_useEffect'
import Todo from './Components/Todo'

function App() {
  return (
    <div className="App">
      <ClickCounterExample/>
      <ClickCounterExampleUseEffect/>
      <Todo/>
    </div>
  );
}

export default App;

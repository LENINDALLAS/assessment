import React, { useState } from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

function App() {

  const [id, setId] = useState('');
  const [visibility, setVisibility] = useState(false);

  const handleTodo = (id) => {
    // console.log(id, 'clicked');
    setId(id)
    setVisibility(true);
  }

  return (
    <div className="app">
      <List handleTodo={handleTodo} />
      <Details id={id} visibility={visibility} />
    </div>
  );
}

export default App;

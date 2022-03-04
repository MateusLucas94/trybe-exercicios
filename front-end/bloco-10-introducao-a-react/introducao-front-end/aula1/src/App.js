import logo from './logo.svg';
import './App.css';
import React from 'react'

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

class App extends React.Component {
  render() {
    const compromissos = ['ginastica', 'aula', 'cachorro'];
    return (
      <div>
      { compromissos.map((element) => Task(element)) }
      </div>
    )
  }
}

export default App;

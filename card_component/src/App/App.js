import React from 'react';
import Card from './components/Card/Card';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Card 
        title="Sample Card"
        image="https://via.placeholder.com/300"
        description="This is a description of the card."
      />
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css"
import Card from "./components/Card"

function App() {

  return (
    <div className="App">
      <Card
        imgSrc="https://picsum.photos/300/200"
        imgAlt="Card Image"
        title="Card Title"
        description="This is the  Description of this image"
        buttonText="Learn More"
        link="cardPage"
      />
    </div>
  );
}

export default App

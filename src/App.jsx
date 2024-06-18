import React, { useState } from 'react';
import Accordion from './components/Accordion';
import ButtonExamples from './components/ButtonExamples';
import SimpleForm from './components/SimpleForm';
import TicTacToe from './components/TicTacToe';
import Timer from './components/Timer';
import { accordionData } from './utils/content';

const App = () => {
  const [isActive, setIsActive] = useState(0);

  const handleClick = (index) => {
    if (isActive === index) {
      return setIsActive();
    }

    setIsActive(index);
  }

  return (
    <div>
      <h1>React Demos</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} onToggle={() => handleClick(index)} active={isActive === index}/>
        ))}
      </div>
      <div className="tic-tac-toe">
        <TicTacToe />
      </div>
      <div className="btn-api">
        <ButtonExamples />
      </div>
      <div className="simple-form">
        <SimpleForm />
      </div>
      <div className="timer">
        <Timer />
      </div>
    </div>
  );
};

export default App;

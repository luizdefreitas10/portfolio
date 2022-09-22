import React from 'react';
import { useEffect, useContext } from 'react';
import MyContext from '../context/MyContext';
import './Clock.css';

function Clock () {
  const { clockState, setClockState } = useContext(MyContext);
  
  const ONE_SECOND = 1000;

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, ONE_SECOND)
  }, []);

  return (
    <div className="clock-class">
      { clockState }
    </div>
  );
}

export default Clock;

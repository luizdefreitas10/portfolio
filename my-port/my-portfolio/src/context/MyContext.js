import { createContext, useState } from 'react';
import { mockData } from '../utils/mockData';

const MyContext = createContext();

export function Provider ({ children }) {
    const [name, setName] = useState('');
    const [clockState, setClockState] = useState();
    const [test, setTest] = useState(mockData);
  
    const context = {
      name,
      setName,
      clockState,
      setClockState,
      test,
      setTest,
    }
  
    return (
      <MyContext.Provider value={ context }>
        { children }
      </MyContext.Provider>
    );
  }
  

export default MyContext;

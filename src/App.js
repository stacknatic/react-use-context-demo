import { useState } from 'react';
import './App.css';
import CompA from './CompA';
import GlobalContextProvider from './GlobalContext';

const info = "Totally different info"

function App() {
  const [name, setName] = useState("Jane");

  return (
    <GlobalContextProvider>
    <div className="App">
      <CompA info={info} />
    </div>
    </GlobalContextProvider>
  );
}

export default App;

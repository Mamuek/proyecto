import React, { useState } from 'react';
import Login from './Login/Login';
import DivComponent from './components/DivComponent'; 
import DivPorton from './components/DivPorton';
import DivCuarto from './components/DivCuarto';
import Porton from './components/Porton';
import Foco from './components/Foco';
import Puerta from './components/Puerta';
import Aire from './components/Aire';
import Control from './Control/Control';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para manejar el éxito del inicio de sesión
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <DivComponent />
          <DivPorton />
          <DivCuarto />
          <Porton />
          <Foco />
          <Puerta />
          <Aire />
          <Control />
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;

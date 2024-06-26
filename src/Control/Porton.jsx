import React, { useState } from 'react';

const Porton = () => {
  const [isOpen, setIsOpen] = useState(false);
// ====================================================================================
  const handleClick = () => {
    setIsOpen(!isOpen);
   
    const data = {"state":isOpen, "tipo":Porton}
axios.post('http://localhost:3000/event', data)
.then(data => console.log(data.data));

  };
  // ====================================================================================

  const styles = {
    width: '50px',
    height: '50px',
    backgroundColor: isOpen ? '#FF5733' : '#90caf9', // Cambia a rojo cuando el portón está "encendido"
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <button style={styles} onClick={handleClick}>
      Portón
    </button>
  );
};

export default Porton;

import React, { useState } from 'react';
import axios from "axios";

const Aire = () => {
  const [isOn, setIsOn] = useState(false);

  //Envia la información al broker
  const toggleImage = () => {
    setIsOn(!isOn);
    //información entrante: poner stado y tipo
    //los tipos son "aire", "foco", "puerta", "porton"
    const data = { "state": isOn, "tipo": "aire" }

    axios.post('http://localhost:3000/event', data)
      .then(data => console.log(data.data));
  };
  //============================================================

  const styles = {
    width: '50px',
    height: '50px',
    backgroundColor: isOn ? '#87CEEB' : '#f48fb1',
    border: 'none',
    cursor: 'pointer',
  };


  return (
    <button style={styles} onClick={toggleImage}>
      Aire
    </button>
  );
};

export default Aire;

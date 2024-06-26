import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Puerta = ({ width = '200px', height = '250px', onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [imageUrl, setImageUrl] = useState('https://th.bing.com/th/id/OIP.ryZIWmT_DI8h5ZZHMkzq4gHaJn?rs=1&pid=ImgDetMain');

  useEffect(() => {
    fetchData();
  }, []);
 // ====================================================================================
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/event');
      const data = response.data;

     
      const imageUrlFromApi = data.imageUrl;
      setImageUrl(imageUrlFromApi);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };
 // ====================================================================================
  const buttonStyles = {
    marginLeft: '22%',
    marginTop: '23%',
    width: width,
    height: height,
    backgroundImage: `url("${imageUrl}")`,
    backgroundSize: 'contain',
    border: '0px solid black',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease',
    transform: isClicked ? 'scale(0.9)' : 'scale(1)',
    position: 'absolute',
  };

  const fetchdata=async()=>{
    const data = await axios.get('http://localhost:3000/event')
      .then(data => { return data.data })
     
      if (data.tipo === "puerta"){
        setIsOriginalImage(data.state ? !isOriginalImage : isOriginalImage);
      }

  }
  fetchdata()

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    if (!isClicked) {
      e.currentTarget.style.transform = 'scale(1)';
    }
  };

  const handleClick = (e) => {
    setIsClicked((prev) => !prev); // Toggle isClicked state
    if (onClick) onClick(e);
  };

  return (
    <button
      style={buttonStyles}
      onClick={(e) => {
        handleClick(e);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Puedes agregar texto aquí si es necesario */}
    </button>
  );
};

export default Puerta;

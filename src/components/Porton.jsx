import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Porton = () => {
  const [imageUrl, setImageUrl] = useState('https://thumbs.dreamstime.com/b/muri-l-illustrazione-bianca-nera-grafica-di-schizzo-del-paesaggio-del-portone-del-recinto-92599595.jpg');
  const [isOriginalImage, setIsOriginalImage] = useState(true);

  useEffect(() => {
    fetchImageData();
  }, []);

  const fetchImageData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/event');
      const data = response.data;

      const imageUrlFromApi = data.imageUrl;
      const newState = data.state;

      setImageUrl(imageUrlFromApi);
      setIsOriginalImage(newState);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleClick = () => {
    setIsOriginalImage(!isOriginalImage);
  };

  const originalImageUrl = 'https://thumbs.dreamstime.com/b/muri-l-illustrazione-bianca-nera-grafica-di-schizzo-del-paesaggio-del-portone-del-recinto-92599595.jpg';
  const alternateImageUrl = 'https://norautos.com/chiclayo/wp-content/uploads/2022/09/avanza22_verdemetalicoG64_14-1.jpg';

  const estiloBoton = {
    marginLeft: '45.3%',
    marginTop: '1%',
    width: '40%',
    height: '300px',
    border: '0px solid #000',
    borderRadius: '5px',
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    color: '#000',
    fontSize: '16px',
    backgroundColor: '#fff',
    backgroundImage: `url("${isOriginalImage ? originalImageUrl : alternateImageUrl}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  const fetchdata=async()=>{
    const data = await axios.get('http://localhost:3000/event')
      .then(data => { return data.data })
     
      if (data.tipo === "porton"){
        setIsOriginalImage(data.state ? !isOriginalImage : isOriginalImage);
      }

  }
  fetchdata()
  return (
    <button style={estiloBoton} onClick={handleClick}>
      {/* Puedes agregar texto u otros elementos dentro del botón */}
    </button>
  );
};

export default Porton;

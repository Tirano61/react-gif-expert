

import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() =>{
    const resp = await  getGif( category ) ;
    setImages(resp);
    setIsLoading(false);
  }
  //Cuando el arreglo esta vacio se dispara 
  //solo cuando se crea el compònente
  useEffect( () => {
    getImages();

  }, []);

  return {
    images,
    isLoading,
  }
}

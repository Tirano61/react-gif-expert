
import { useFetchGifs } from '../hooks/useFetchGifs'; 
// import { getGif } from '../helpers/getGifs';
import { GifIten } from './GifIten';


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  

  return (
    <>
      <h3>{category}</h3>
      {isLoading 
        && ( <h3> Cargando ... </h3> )
      } 
        <div className='card-grid'>
          {
            images.map( (img) => (
              <GifIten 
                key={ img.id }
                { ...img }
              />
            ))
          }
        </div>
      

    </>
    
  )
}

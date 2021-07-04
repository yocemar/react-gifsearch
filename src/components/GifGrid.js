
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    

  const {data:images}= useFetchGifs(category);
 

    return (
        <>
        <h3>{category}</h3>

        <div className="card-grid">  
            { 
            images.map( img=>( <GifGridItem 
            key= {img.id}
            {...img}
            />
            ))
            } 
             
        </div> 
        </>
    )
}

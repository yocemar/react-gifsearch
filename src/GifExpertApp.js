import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories ] = useState( ['']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            
            <AddCategory setCategories={setCategories}/>

            <ol>
                { categories.map(category=>  
                <GifGrid 
                key={category}
                category={ category}/> )
                }
              
            </ol>

        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp

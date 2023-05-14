import React, { useState } from 'react'
import {AddCategory, GifGrid} from './components'

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {
        //Una opcion
        // const filtered= categories.filter(cat => cat === newCategory)
        // if (filtered.length >= 1) return

        if(categories.includes(newCategory)) return

        setCategories([newCategory, ...categories ])
        // setCategories(categories => [...categories, 'Hola'])
    }
    

    return (
        <>  
            <h1>GifExpertApp</h1>
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            <AddCategory 
                // setCategories= {setCategories} //esta forma oculta la implementación
                onNewCategory= {onAddCategory}
            />

            {
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category= {category} 
                    />
                ))
            }

        </>
    )
}

export default GifExpertApp

import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';





export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.find(cat => cat.trim().includes(newCategory))) return;
    setCategories([ newCategory, ...categories ]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* <AddCategory setCategories={ setCategories }/> */}
      <AddCategory onNewCategory={(cat) => onAddCategory(cat)} />

      {
        categories.map((category) =>  
          <GifGrid 
            key={ category } 
            category={ category } 
          />
        )
      }
    
    </>
  );
};

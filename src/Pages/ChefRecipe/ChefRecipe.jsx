import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {
    const chef = useLoaderData();
    console.log(chef)
    return (
        <div>
            
        </div>
    );
};

export default ChefRecipe;
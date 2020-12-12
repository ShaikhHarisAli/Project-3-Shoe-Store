import React from 'react';
import {Link} from "react-router-dom"
import Shoes from '../../sheo.json'
import Card from './Card'



function ProductItems() {
    
    return (
        <div>
            <h1 style={{color:"yellow"}}> Products </h1>
            <ul style={{listStyleType:"none",display:"flex",justifyContent:"space-between"}}>
                {
                    Object.entries(Shoes).map(([id,{name , img}]) => (
                        <li style={{}} key={id}>
                            <Link style={{textDecoration:"none"}} to={`/product/${id}`} >
                                <Card name={name} img={img}/>
                            </Link>
                        </li>
                    ) )
                }
            </ul>
        </div>
    );
}

export default ProductItems;
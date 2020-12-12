import React from 'react';
import {Link} from "react-router-dom"
import Shoes from '../../sheo.json'
import Card from './Card'
import style from './ProductItems.module.css'



function ProductItems() {
    
    return (
        <div>
            <h1 style={{color:"yellow"}}> Products </h1>
            <ul className={style.ul}>
                {
                    Object.entries(Shoes).map(([id,{name , img}]) => (
                        <li className={style.li} key={id}>
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
import React from 'react';
import {Outlet } from 'react-router-dom';
import style from './Product.module.css'



function Product(props) {
    return (
        <div className={style.aboutSection}>
            {/* <h1>hello product</h1> */}
            <Outlet />
        </div>
    );
}

export default Product ;
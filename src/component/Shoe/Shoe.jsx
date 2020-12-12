import React from 'react';
import { useParams } from 'react-router-dom'
import Shoes from '../../sheo.json'
// import Paper from '@material-ui/core/Paper';
import style from './Shoe.module.css'





function Shoe() {

    const { id } = useParams();
    const shoe = Shoes[id];
    const { name, img } = shoe;
    return (
        <div >
            {/* <Paper elevation={3}> */}
                {/* <h1>{name}</h1>
                <img src={img} alt={name} /> */}
                <div class={style.container}>
                    <img src={img} alt="Shoes" style={{width:"100%",height:"555px"}}/>
                        <div class={style.textBlock}>
                            <h4>{name}</h4>
                            <p>What a  beautifull Shoe</p>
                        </div>
                </div>
            {/* </Paper> */}
        </div>
    );
}

export default Shoe;
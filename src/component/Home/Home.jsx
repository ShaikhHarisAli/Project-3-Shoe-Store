import React from 'react';
import styles from './Home.module.css'
import ProductItems from '../ProductItems/ProductItems'
import Banner from '../images/banner1.jpg'


function Home(props) {
    return (
        <div>
            <img style={{width:"100%"}}  src={Banner} alt="Banner" />
            <div className={styles.aboutSection}>
                {/* <h1>hello home</h1> */}
                <ProductItems />
            </div>
        </div>
    );
}

export default Home;
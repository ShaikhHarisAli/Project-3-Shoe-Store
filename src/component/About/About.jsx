import React from 'react';
import styles from './About.module.css'
import backGround from '../images/background.jpeg'

function About(props) {
    return (
        <div className={styles.aboutSection}>
            <img style={{width:"100%"}} src={backGround} alt="Nike" />
            
            <h1>About Us Page</h1>
            <p><i> Some text about who we are and what we do.</i></p>
            <p>Shoe Warehouse offers the passionate shoe enthusiast a truly unique online shopping 
            experience. The Shoe Warehouse has evolved into a distinctive retail concept that empowers 
            you to personalise your online shopping experience by offering a fantastic assortment of 
            women's, men's and kids shoes that are instantly accessible and fulfill a broad range of comfort and style needs. We are famous for providing the most comprehensive selection of styles from all of our brand partners. Buy Leading Shoe Brands for Women, Men & Kids Online Shoe Warehouse has created an easy and exciting way to purchase and buy shoes online. Comfort and style have come together with Australia’s largest range of shoes online. Our selection is updated regularly with all the latest new arrivals including heels, ballet flats, boots, sneakers and sandals. Our collection of premium international comfort shoe brands include: Shoe Warehouse, Julius Marlow, Volley and Clarks. We also have new and exciting brands coming soon. Rest assured that when you purchase
            a pair of shoes from the Shoe Warehouse you are buying the very best quality and comfort money can buy.</p>
        </div>
    );
}

export default About;
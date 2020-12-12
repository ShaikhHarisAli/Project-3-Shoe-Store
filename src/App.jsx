import React from 'react'
import './App.css';
import {Routes,Route} from  'react-router-dom';
import Home from './component/Home/Home'
import About from './component/About/About'
import Product from './component/Product/Product'
import ProductItems from './component/ProductItems/ProductItems'
import NavBar from './component/NavBar'
import Shoe from './component/Shoe/Shoe'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        

        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}> 
          <Route path="/" element={<ProductItems/>}/>
          <Route path=":id" element={<Shoe/>}/>
        </Route>

        <Route path="*" element={()=> {<h1>Product Not Found</h1>}}/>
      </Routes>
      
    </div>
  );
}

export default App;

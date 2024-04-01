import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Topbar from './Components/Topbar/topbar';
import Homepage from './Pages/Homepage/homepage';
import Footer from './Components/Footer/footer';
import Sidedrawer from './Components/Sidedrawer/sidedrawer';
import ContextApi from './Components/ContextApi/contextApi';
import ProductContainer from './Components/ProductContainer/productContainer';
import Brochure from './Pages/Brochure/brochure';
import RequestQuote from './Pages/RequestQoute/requestQuote';
import Upload from './Pages/Upload/upload';
import DisplayProduct from './Pages/DisplayProduct/displayProduct';

function App() {

    const [sidedrawer, setSidedrawer] = useState(false);

    const [displayProduct, setDisplayProduct] = useState(false);

    const [product, setProduct] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/fetch-products').then(res => res.json())
      .then(data => {
        if (data.status === 'success'){
          setProduct(data.data);
        }
      })
      .catch(err => console.log(err));
    }, []);

    const sidedrawerHandler = () => {
      if (displayProduct){
        setDisplayProduct(false);
      }
      setSidedrawer((sidedrawer) => !sidedrawer);
    }

    const displayProductHandler = () => {
      if (sidedrawer){
        setSidedrawer(false);
      }
      setDisplayProduct(() => !displayProduct);
    }

    return (
      <div className="App">
        <ContextApi.Provider value={{ sidedrawer, sidedrawerHandler, displayProduct, displayProductHandler, product }}>
            <Topbar />
            <Sidedrawer />
            <ProductContainer />
            <Routes>
              <Route path='/' element={<Homepage />}/>
              <Route path='/brochure' element={<Brochure />} />
              <Route path='/request-quote' element={<RequestQuote /> }/>
              <Route path='/upload' element={<Upload />}/>
              <Route path='/products/:productId' element={<DisplayProduct />} />
            </Routes>
            <Footer />
        </ContextApi.Provider>
      </div>
    );
}

export default App;

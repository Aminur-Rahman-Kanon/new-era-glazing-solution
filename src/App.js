import React, { useState } from 'react';
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

function App() {

    const [sidedrawer, setSidedrawer] = useState(false);

    const [displayProduct, setDisplayProduct] = useState(false);

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
        <ContextApi.Provider value={{ sidedrawer, sidedrawerHandler, displayProduct, displayProductHandler }}>
            <Topbar />
            <Sidedrawer />
            <ProductContainer />
            <Routes>
              <Route path='/' element={<Homepage />}/>
              <Route path='/brochure' element={<Brochure />} />
              <Route path='/request-quote' element={<RequestQuote /> }/>
            </Routes>
            <Footer />
        </ContextApi.Provider>
      </div>
    );
}

export default App;

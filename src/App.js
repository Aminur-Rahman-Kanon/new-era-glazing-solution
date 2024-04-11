import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Topbar from './Components/Topbar/topbar';
import Homepage from './Pages/Homepage/homepage';
import Footer from './Components/Footer/footer';
import Sidedrawer from './Components/Sidedrawer/sidedrawer';
import ContextApi from './Components/ContextApi/contextApi';
import ProductContainer from './Components/ProductContainer/productContainer';
import Spinner from './Components/Spinner/spinner';
import ProductSpinner from './Components/ProductSpinner/productSpinner';
const Brochure = lazy(() => import('./Pages/Brochure/brochure'));
const RequestQuote = lazy(() => import('./Pages/RequestQoute/requestQuote'));
const DisplayProduct = lazy(() => import('./Pages/DisplayProduct/displayProduct'));
const Contact = lazy(() => import('./Pages/Contact/contact'));
const OurProcess = lazy(() => import('./Pages/OurProcess/ourProcess'));
const Showrooms = lazy(() => import('./Pages/Showrooms/showrooms'));
const OurTechnology = lazy(() => import('./Pages/OurTechnology/ourTechnology'));
const Products = lazy(() => import('./Pages/Products/products'));

function App() {

    const [sidedrawer, setSidedrawer] = useState(false);

    const [displayProduct, setDisplayProduct] = useState(false);

    const [product, setProduct] = useState([]);

    useEffect(() => {
      fetch('https://new-era-glazing-solution-server.onrender.com/fetch-products').then(res => res.json())
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
              <Route path='/brochure' element={<Suspense fallback={<Spinner spinner={true}/>}>
                <Brochure />
              </Suspense>} />
              <Route path='/request-quote' element={<Suspense fallback={<Spinner spinner={true}/>}>
                <RequestQuote />
              </Suspense>}/>
              <Route path='/products/:productId' element={<Suspense fallback={<ProductSpinner spinner={true} />}>
                <DisplayProduct />
              </Suspense>} />
              <Route path='/contact' element={<Suspense fallback={<Spinner spinner={true}/>}>
                <Contact/>
              </Suspense>} />
              <Route path='/our-process' element={<Suspense fallback={<Spinner spinner={true}/>}>
                <OurProcess />
              </Suspense>} />
              <Route path='/showrooms' element={<Suspense fallback={<Spinner spinner={true}/>}>
                <Showrooms />
              </Suspense>} />
              <Route path='/our-technology' element={<Suspense fallback={<Spinner spinner={true}/>}>
                <OurTechnology />
              </Suspense>} />
              <Route path='/product/:productId' element={<Suspense fallback={<Spinner spinner={true}/>}>
                <Products />
              </Suspense>} />
            </Routes>
            <Footer />
        </ContextApi.Provider>
      </div>
    );
}

export default App;

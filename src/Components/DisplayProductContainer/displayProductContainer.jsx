import React, { useEffect } from 'react';
import styles from './displayProductContainer.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import anniversary from '../../Assets/icons/anniversary.png';
import ear from '../../Assets/icons/ear.png';
import scale from '../../Assets/icons/scale.png';
import wave from '../../Assets/icons/wave.png';
import ImageSlideshow from '../ImageSlideshow/imageSlideshow';
import { sliderHandler } from '../../Utilities/utilities';
import Aos from 'aos';
import 'aos/dist/aos.css';

const DisplayProductContainer = ({ product }) => {

    let displayProduct = null;

    useEffect(() => {
        if (product) {
            sliderHandler('header7Item', styles);
            Aos.init({ duration: 2000, once: true });
        }
    }, [])

    if (product){
        displayProduct = <div key={product.title} className={styles.productContainer}>
                <div className={styles.header1}>
                    <div className={styles.bgContainer} style={{backgroundImage: `url(${product.product.header1.bg})`}}></div>
                    <div className={styles.header1Heading}>
                        <div className={styles.header1Banner1}>
                            <p className={styles.header1P}>{product.product.header1.title}</p>
                            <h2 className={styles.header1H2}>{product.product.header1.heading}</h2>
                        </div>
                        <div className={styles.header1Banner2}>
                            <Link to='' className={styles.header1Link}>FREE BROCHURE</Link>
                            <Link to='' className={styles.header1Link}>REQUEST A QUOTE</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.header2}>
                    <div data-aos="fade-right" className={styles.header2Heading}>
                        <h2 className={styles.header2H2}>{product.product.header2.heading}</h2>
                        <ul className={styles.header2Lists}>
                            {product.product.header2.title.map((li, idx) => <li key={idx} className={styles.header2List}>{li}</li>)}
                        </ul>
                    </div>
                    <div className={styles.header2BgContainer}>
                        <img src={product.product.header2.bg} alt="new era glazing solution ltd" className={styles.header2Bg}/>
                    </div>
                </div>
                <div className={styles.header3}>
                    <div className={styles.header3Top}>
                        <h2 className={styles.header3H2}>{product.product.header3.heading}</h2>
                        <p className={styles.header3P}>{product.product.header3.title}</p>
                    </div>
                    <div className={styles.header3Middle}>
                        <div data-aos="fade-right" className={styles.iconContainer1}>
                            <div className={styles.header3MiddleIconContainer}>
                                <div className={styles.iconContainer}>
                                    <img src={anniversary} alt='10 years gaurantee' className={styles.icon} />
                                </div>
                                <p className={styles.header3MiddleText}>A comprehensive 10 year guarantee</p>
                            </div>
                            <div className={styles.header3MiddleIconContainer}>
                                <div className={styles.iconContainer}>
                                    <img src={wave} alt='Exceeding thermal regulation' className={styles.icon} />
                                </div>
                                <p className={styles.header3MiddleText}>Exceeding thermal regulation</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className={styles.iconContainer2}>
                            <div className={styles.header3MiddleIconContainer}>
                                <div className={styles.iconContainer}>
                                    <img src={ear} alt='Sound reduction upto class 4' className={styles.icon} />
                                </div>
                                <p className={styles.header3MiddleText}>Sound reduction upto class 4</p>
                            </div>
                            <div className={styles.header3MiddleIconContainer}>
                                <div className={styles.iconContainer}>
                                    <img src={scale} alt='Expert & fully insured fitting team' className={styles.icon} />
                                </div>
                                <p className={styles.header3MiddleText}>Expert & fully insured fitting team</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.header3Bottom}>
                        <Link to="" className={styles.header3Link}>
                            <span className={styles.header3LinkText}>The Technology</span>
                            <span className={styles.header3Slider}></span>
                        </Link>
                        <Link to="" className={styles.header3Link}>
                            <span className={styles.header3LinkText}>Our Process</span>
                            <span className={styles.header3Slider}></span>
                        </Link>
                    </div> */}
                </div>
                <div className={styles.header4}>
                    <div className={styles.header4Heading}>
                        <h2 className={styles.header4H2}>KEY FEATURES</h2>
                        <ul className={styles.header4Lists}>
                            {product.product.header4.features.map((li, idx) => <li key={idx} className={styles.header4List}>{li}</li>)}
                        </ul>
                    </div>
                    <div data-aos="fade-left" className={styles.header4bgContainer}>
                        <img src={product.product.header4.bg} alt="new era glazing solution ltd" className={styles.header4Bg}/>
                    </div>
                </div>
                <div className={styles.header5}>
                    <ImageSlideshow img={product.product.header5.img}/>
                </div>
                <div className={styles.header6}>
                    <div className={styles.header6Top}>
                        <h2 className={styles.header6H2}>{product.product.header6.heading}</h2>
                        <ul className={styles.header6Lists}>
                            {product.product.header6.title.map((li, idx) => <li key={idx} className={styles.header6List}>{li}</li>)}
                        </ul>
                    </div>
                    <div className={styles.header6Imgs}>
                        <div data-aos="fade-right" className={styles.header6ImgContainer}>
                            <img src={product.product.header6.img[0]} alt="new era glazing solution" className={styles.header6Img} />
                            <span className={styles.header6ImgTitle}>Create a seamless transition from inside to out.</span>
                        </div>
                        <div data-aos="fade-right" className={styles.header6ImgContainer}>
                            <img src={product.product.header6.img[1]} alt="new era glazing solution" className={styles.header6Img} />
                            <span className={styles.header6ImgTitle}>Fully adaptable and adjustable door system.</span>
                        </div>
                        <div data-aos="fade-right" className={styles.header6ImgContainer}>
                            <img src={product.product.header6.img[2]} alt="new era glazing solution" className={styles.header6Img} />
                            <span className={styles.header6ImgTitle}>Three varied threshold options</span>
                        </div>
                        <div data-aos="fade-right" className={styles.header6ImgContainer}>
                            <img src={product.product.header6.img[3]} alt="new era glazing solution" className={styles.header6Img} />
                            <span className={styles.header6ImgTitle}>Solid stainless steel rail guide for the steel rollers to run.</span>
                        </div>
                    </div>
                </div>
                <div className={styles.header7}>
                    {product.product.header7.img.map((item, idx) => 
                        <div data-aos="fade-right" key={idx} className={styles.header7Item}>
                            <div className={styles.header7BgContainer}>
                                <img src={item.img} alt={item.title} className={styles.header7Bg}/>
                            </div>
                            <div className={styles.header7BannerContainer}>
                                <h2 className={styles.header7BannerH2}>{item.title}</h2>
                                <button className={styles.header7BannerBtn}>+</button>
                            </div>
                            <div className={styles.header7SliderContainer}>
                                <h2 className={styles.header7SliderH2}>{item.title}</h2>
                                <p className={styles.header7SliderP}>{item.details}</p>
                                <button className={styles.header7BannercloseBtn}>-</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.header8}>
                    <h3 className={styles.header8H3}>{product.product.header8.heading}</h3>
                    <h2 className={styles.header8H2}>{product.product.header8.title}</h2>
                    <ul className={styles.header8Lists}>
                        {product.product.header8.specs.map((li, idx) => <li key={idx} className={styles.header8List}>
                            <FontAwesomeIcon icon={faCircleNotch} className={styles.dot}/>
                            <span className={styles.header8ListText}>{li}</span>
                        </li>)}
                    </ul>
                </div>
                <div className={styles.header9}>
                    <div className={styles.header9Top}>
                        <div className={styles.header9BgContainer}>
                            <img src={product.product.header9.bg} alt={product.product.header9.heading} className={styles.header9Bg}/>
                        </div>
                        <div data-aos="fade-left" className={styles.header9Heading}>
                            <h2 className={styles.header9H2}>{product.product.header9.heading}</h2>
                            <ul className={styles.header9Lists}>
                                {product.product.header9.title.map((li, idx) => <li key={idx} className={styles.header9Li}>{li}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.header9Bottom}>
                        <p className={styles.header9P}>THERE ARE ALSO UP TO 200 RAL COLOURS TO CHOOSE FROM INCLUDING SLIGHT DISCOUNTS FOR RAL 9007, RAL 7021 & RAL 7032 DUE TO THEIR POPULARITY.</p>
                        <ul className={styles.header9ColorLists}>
                            {product.product.header9.color.map(clr => {
                                if (clr.title === 'Non-Stocked Color'){
                                    return <li data-aos="fade-right" key={clr.title} className={styles.header9List}>
                                        <span className={`${styles.header9Color} ${styles.nonStockColor}`}></span>
                                        <span className={styles.header9ColorTitle}>{clr.title}</span>
                                    </li>
                                }
                                else {
                                    return <li data-aos="fade-right" key={clr.title} className={styles.header9List}>
                                        <span className={styles.header9Color} style={{backgroundColor: `${clr.value}`}}></span>
                                        <span className={styles.header9ColorTitle}>{clr.title}</span>
                                    </li>
                                }
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
    }

    return (
        <div className={styles.wrapper}>
            {displayProduct}
        </div>
    )
}

export default DisplayProductContainer

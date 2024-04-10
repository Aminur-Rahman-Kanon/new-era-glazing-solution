import React, { useEffect } from 'react';
import styles from './homepage.module.css';
import { Link } from 'react-router-dom';
import ContactFormContainer from '../../Components/ContactFormContainer/contactFormContainer';
import section2Bg from '../../Assets/section2_1.jpg';
import section3Bg from '../../Assets/section3_5.jpg';
import section5_1 from '../../Assets/section5_1.jpg';
import section5_2 from '../../Assets/section5_2.jpg';
import section5_3 from '../../Assets/section5_bg_2.jpg';
import section6Bg from '../../Assets/section6_bg.jpg';
import section7Bg from '../../Assets/section7_bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PopularProducts from '../../Components/PopularProducts/popularProducts';
import ReviewContainer from '../../Components/ReviewContainer/reviewContainer';
import Section8 from '../../Components/Section8/section8';

const Homepage = () => {

    useEffect(() => {
        Aos.init({ duration: 1400, once: true });
    }, [])
    
    return (
        <div className={styles.homepageContainer}>
            <section className={styles.section1}>
                <div className={styles.bgContainer}></div>
                <div className={styles.elementContainer}>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.headerH1}>CREATE YOUR SPACE WITH NEW AGE</h1>
                        <p className={styles.headerP}>Create a space to call home with our stunning British made products including
                        bifold & sliding doors, entrance doors, windows, glass roofs & much more.</p>
                        <div className={styles.headerLinkContainer}>
                            <Link to={""} className={styles.headerLink}>Explore Our Products</Link>
                            <Link to='/showrooms' className={styles.headerLink}>Visit Our Showrooms</Link>
                        </div>
                        <div className={styles.headerLinkContainer}>
                            <Link to="/request-quote" className={styles.headerLink}>GET A PRICE</Link>
                            <Link to="/brochure" className={styles.headerLink}>FREE BROCHURE</Link>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" className={styles.contactFormContainer}>
                        <h2 className={styles.contactFormHeading}>GET A PRICE</h2>
                        <ContactFormContainer border={false}/>
                    </div>
                </div>
            </section>
            <section className={styles.section4}>
                <PopularProducts />
            </section>
            <section className={styles.section5}>
                <div className={styles.section5BgContainer}>
                    <img src={section5_1} alt="doors" className={styles.section5Img1}/>
                    <img src={section5_3} alt="doors" className={styles.section5Img3}/>
                    <div className={styles.section5Img2Container}>
                        <img src={section5_2} alt="doors" className={styles.section5Img2}/>
                    </div>
                </div>
                <div className={styles.section5HeadingContainer}>
                    <h2 className={styles.section5Heading}>We Creating & Make Quality Doors</h2>
                    <p className={styles.section5P1}>Are You Looking For Readymade Doors? Or Need Custom ?</p>
                    <p className={styles.section5P2}>Project Windows and Doors is an Australian-owned company ur adipisci sed do eiusmodthat provides high-quality products and expertise for windows and doors needs. Whether you are a builder or a</p>
                    <div className={styles.section5LinkContainer}>
                        <Link className={styles.section5Link1}>More About Us</Link>
                        <a href='tel:+447875531847' className={styles.section5Link2}>
                            <FontAwesomeIcon icon={faPhoneVolume} className={styles.section5Link2Icon}/>
                            <span className={styles.section5Text}>+44 7875 531847</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className={styles.section2}>
                <div className={styles.section2bgContainer}>z
                    <img src={section2Bg} alt="glazing door" className={styles.section2Bg} />
                </div>
                <div data-aos="fade-left" className={styles.section2HeaderContainer}>
                    <h2 className={styles.section2Heading}>SEE THE DIFFERENCE</h2>
                    <p className={styles.section2P}>We understand that your home is more than just a home. We understand that it’s a big decision, which is why every market leading product that we make is designed with you in mind.</p>
                    <p className={styles.section2P}>Whether you’re looking to renovate your home with expansive new bi-folding doors, planning a property extension with slim-framed sliding doors, or embarking on a grand design project. We have the experience, infrastructure, expertise & bespoke British made product range that can put your mind at ease as we work together to create your dream home.</p>
                    <div className={styles.section2LinkContainer}>
                        <Link className={styles.section2Link}>The New Age Difference</Link>
                        <Link className={styles.section2Link}>Our Completed Work</Link>
                    </div>
                </div>
            </section>
            <section className={styles.section3}>
                <div data-aos="fade-right" className={styles.section3HeadingContainer}>
                    <h2 className={styles.section3Heading}>BI-FOLDING OR SLIDING DOORS?</h2>
                    <p className={styles.section3P}>We manufacture & install three different aluminium bi-folding door systems, each with their own features, benefits, and price points.</p>
                    <p className={styles.section3P}>We also offer the slimmest, glass sliding doors available in the UK, alongside several other patio door systems ranging from slim-line panoramic doors, to heavy-duty lift and slide doors.</p>
                    <p className={styles.section3P}>Our range of bifold & sliding doors will turn your once ordinary room into a modern, light, inviting space. Both will blur the lines between the inside and out, creating a seamless link between your home and garden. This video highlights some of the main differences between bi-folding and sliding doors as you consider which stunning product is best suited for your upcoming project.</p>
                    <div className={styles.section3LinkContainer}>
                        <Link className={styles.section3Link}>Bi-Folding Doors</Link>
                        <Link className={styles.section3Link}>Sliding Doors</Link>
                    </div>
                </div>
                <div className={styles.section3BgContainer}>
                    <img src={section3Bg} alt="bi folding doors" className={styles.section3Bg} />
                </div>
            </section>
            <section className={styles.review}>
                <h2 className={styles.reviewHeading}>Our Customer Says ...</h2>
                <ReviewContainer />
            </section>
            <section className={styles.section6}>
                <div className={styles.section6Header1}>
                    <h2 className={styles.section6Heading1}>IMAGINE YOUR IDEAL HOME.</h2>
                    <p className={styles.section6P1}>A space for family, entertaining and unwinding. We’ve spent more than a decade helping people create their dream homes and we know nothing short of perfect will do.</p>
                    <p className={styles.section6P1}>In 2007, we set out to build a company that made a range of high quality bi-folding door designs with the power to transform people’s homes forever. Since then we’ve grown to become the UK’s largest specialist manufacturer and installer of premium folding and sliding doors, windows and roofing products. We couldn’t have achieved all this without also taking pride in delivering outstanding service, reliable delivery and a comprehensive and innovative range of quality aluminium products. Today, we employ over 300 people and our products are creating spaces to live, grow and unwind in, right across the UK.</p>
                </div>
                <div className={styles.section6Header2}>
                    <div className={styles.section6BgContainer}>
                        <img src={section6Bg} alt='ideal home' className={styles.section6Bg}/>
                    </div>
                    <div data-aos="fade-left" className={styles.section6HeadingContainer}>
                        <h2 className={styles.section6Heading2}>STYLE, PERFORMANCE & ASSURANCE</h2>
                        <p className={styles.section6P2}>From the moment you make your first enquiry, to the initial on-site visit and survey, right through to design, manufacture and installation, we work with minimal disruption to you. Plus, because we design, manufacture and install everything ourselves, you can be sure of the highest level of craftsmanship in all our products.</p>
                        <p className={styles.section6P2}>Offering an end-to-end service like this means we take complete responsibility for all aspects of our work. We have the excellent products, the expertise, infrastructure and the resource to offer unrivalled service and after care. In addition, everything comes with a comprehensive 10-year guarantee and all the correct building regulation compliance documentation.
                        By coming directly to us, the manufacturer, you’ll also get the best possible price and advice. We specialise in home renovation projects, whether it’s a single product or a large, bespoke Grand Designs style new build. We can also supply products Nationwide on a supply-only basis, as well as offer a dedicated trade and commercial service to construction professionals.</p>
                    </div>
                </div>
            </section>
            <section className={styles.section7}>
                <div data-aos="fade-right" className={styles.section7HeadingContainer}>
                    <h2 className={styles.section7Heading1}>IS IT WORTH VISITING A NEW AGE GLAZING SHOWROOM?</h2>
                    <p className={styles.section7P}>There’s no better way to experience how our bi-folding doors, sliding patio doors, aluminium windows and glazed roofing systems could completely transform your property than by visiting one of our beautiful showrooms.</p>
                    <h3 className={styles.section7Heading2}>LONDON SHOWROOMS</h3>
                    <p className={styles.section7P}>We have two stunning London showrooms covering the South East located in <Link to={''} className={styles.section7Link}>Romford, Essex</Link> & <Link to={''} className={styles.section7Link}>Weybridge in Surrey.</Link></p>
                    <p className={styles.section7P}>As well as in our showrooms, you can find our products displayed at various exhibitions all over the UK. We attend annual events in Birmingham, London, Farnborough, Surrey, Harrogate, Glasgow and Edinburgh.</p>
                </div>
                <div className={styles.section7BgContainer}>
                    <img src={section7Bg} alt="showroom" className={styles.section7Bg} />
                </div>
            </section>
            <section className={styles.section8}>
                <Section8 />
            </section>
        </div>
    )
}

export default Homepage;

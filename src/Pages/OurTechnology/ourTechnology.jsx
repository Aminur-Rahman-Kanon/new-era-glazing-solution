import React from 'react';
import styles from './ourTechnology.module.css';
import tech1 from '../../Assets/ourTechnology/tech_1.jpg';
import tech2 from '../../Assets/ourTechnology/tech_2.jpg';
import tech3 from '../../Assets/ourTechnology/tech_3.jpg';
import tech4 from '../../Assets/ourTechnology/tech_4.jpg';
import tech5 from '../../Assets/ourTechnology/tech_5.jpg';
import tech6 from '../../Assets/ourTechnology/tech_6.jpg';
import tech7 from '../../Assets/ourTechnology/tech_7.jpg';
import tech8 from '../../Assets/ourTechnology/tech_8.jpg';

const OurTechnology = () => {
    return (
        <div className={styles.ourTechnologyContainer}>
            <section className={styles.container1}>
                <div className={styles.boxDark}>
                    <h2 className={styles.headingGreen}>SETTING THE STANDARD SINCE 2007</h2>
                    <p className={styles.paraLight}>As a proud family business, our aim has always been to manufacture the highest quality products possible while offering first-class service to all of our customers. We’ve built our success upon quality without compromise, meaning we constantly strive to improve our service levels, product options, and production processes.</p>
                    <p className={styles.paraLight}>We also understand that our people are as important as our machinery, and that our materials are as important as our craftsmanship, so we strive to be the best in all facets of our company.</p>
                    <p className={styles.paraLight}>From training and quality-assurance procedures to premium CNC machinery, innovative product launches and unrivalled product aftercare for our customers, we aim to keep setting the same standards as the first day we opened.</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src={tech1} alt="our technology" className={styles.img}/>
                </div>
            </section>
            <section className={styles.container2}>
                <div className={styles.container2Top}>
                    <h2 className={styles.headingDark}>IT HAS TO BE ALUMINIUM</h2>
                    <div className={styles.container2TopTextContainer}>
                        <p className={styles.paraDark}>At Express, we’ve wholeheartedly adopted aluminium as our material choice for the manufacturing and installation of our entire bespoke product range.</p>
                        <p className={styles.paraDark}>Aluminium is undoubtedly the most suitable material for windows, sliding, and bi-folding doors due to the large expansive spans of the doors and their high number of components and moving parts.</p>
                        <p className={styles.paraDark}>The growing demand for light-filled, open-plan homes has driven the popularity of bigger doors and windows with thinner frames, which can only be achieved by using an aluminium door and window system.</p>
                    </div>
                </div>
                <div className={styles.container2Bottom}>
                    <div className={styles.boxLight}>
                        <h2 className={styles.headingDark}>IDEAL FOR ALL HOMES</h2>
                        <div className={styles.container2BottomTextContainer}>
                            <p className={styles.paraDark}>Thermally broken aluminium is undoubtedly the most suitable material for today’s luxury homes, which is one of the main reasons we use it to manufacture our specialist product range.</p>
                            <p className={styles.paraDark}>Thermally broken aluminium is undoubtedly the most suitable material for today’s luxury homes, which is one of the main reasons we use it to manufacture our specialist product range.</p>
                            <p className={styles.paraDark}>Aluminium can also be recycled infinitely, which is why it is considered one of the most environmentally friendly construction materials. Along with the green benefits, aluminium is essentially maintenance-free; meaning that keeping the bottom tracks clear is the only essential maintenance for our folding and sliding door systems.</p>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={tech2} alt='ideal for all homes' className={styles.img} />
                    </div>
                </div>
            </section>
            <section className={styles.container3}>
                <div className={styles.imgContainer}>
                    <img src={tech3} alt='strong and secure' className={styles.img}/>
                </div>
                <div className={styles.boxDark}>
                    <h2 className={styles.headingGreen}>STRONG AND SECURE</h2>
                    <div className={styles.container3HeaderTextContainer}>
                        <p className={styles.paraLight}>The inherent strength of our aluminium profiles ensures our systems operate effortlessly as well as guaranteeing years of reliability and security.</p>
                        <p className={styles.paraLight}>The constant advances in thermal break technology mean that all our products can surpass current and future building regulations, ensuring heat is retained inside the property throughout the colder months.</p>
                        <p className={styles.paraLight}>On top of this, unlike materials such as timber and PVC, aluminium does not breathe, expand, or contract, meaning doors and windows can be taller and wider, without compromising the performance of the product.</p>
                        <p className={styles.paraLight}>The strength of aluminium is why all commercial buildings in city centres and tall skyscrapers around the world are installed with aluminium products – they have been proven to stand the test of time.</p>
                    </div>
                </div>
            </section>
            <section className={styles.container4}>
                <div className={styles.container4Items}>
                    <div className={styles.container4Item}>
                        <div className={styles.imgContainer}>
                            <img src={tech4} alt='the best cnc machinery available' className={styles.img} />
                        </div>
                        <div className={styles.container4ItemHeader}>
                            <h2 className={styles.headingDarkSmall}>THE BEST CNC MACHINERY AVAILABLE</h2>
                            <div className={styles.container4ItemTextContainer}>
                                <p className={styles.paraDark}>We take great pride in our world-class 180,000-square-foot manufacturing facility. Boasting more than 200 on-site staff, we manufacture all our bespoke products in Leeds, prior to delivering and installing them all over the UK.</p>
                                <p className={styles.paraDark}>The manufacturing of our products is born out of a love of British craftsmanship and is beautifully complemented by the best CNC machinery on the market.</p>
                                <p className={styles.paraDark}>Every single order that we receive is processed by our internal software system and sent electronically to our CNC machines. The machines then prep the aluminium profiles for our products, removing all human error and ensuring they’re cut, routered, and end-milled perfectly before being manufactured, checked, and packed by our expert staff.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container4Item}>
                        <div className={styles.imgContainer}>
                            <img src={tech5} alt='the best cnc machinery' className={styles.img} />
                        </div>
                        <div className={styles.container4ItemHeader}>
                            <h2 className={styles.headingDarkSmall}>HANDS ON AND HANDS OFF MANUFACTURING</h2>
                            <div className={styles.container4ItemTextContainer}>
                                <p className={styles.paraDark}>Our small army of fabricators skilfully manufacture our full product range, assisted at every step by the best possible working environment and machinery.</p>
                                <p className={styles.paraDark}>We’ve invested in specialist equipment for our custom-made products (such as our industry-leading entrance doors and structurally bonded skylights), which includes handling machinery that means our staff don’t have to touch or lift huge panels of glass throughout the all-important manufacturing process.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.container4Items}>
                    <div className={styles.container4Item}>
                        <div className={styles.imgContainer}>
                            <img src={tech6} alt='the best cnc machinery' className={styles.img} />
                        </div>
                        <div className={styles.container4ItemHeader}>
                            <h2 className={styles.headingDarkSmall}>AN ENDLESS CHOICE OF COLOURS AND FINISHES</h2>
                            <div className={styles.container4ItemTextContainer}>
                                <p className={styles.paraDark}>One of the key advantages aluminium has over other frame materials is that it can be easily powder coated by one of over 200 RAL colours we have on offer. And if that wasn’t enough, we also offer various elite and essence colours, to create a similar aesthetic to what you could achieve with a granite worktop.</p>
                                <p className={styles.paraDark}>Our finishes are available in matt, gloss, satin, and textured finishes, and we can also offer dual colour finishes, with different colours on the interior and exterior faces of a frame’s profile.</p>
                                <p className={styles.paraDark}>We can provide colour samples of some of the finishes directly, but we always recommend visiting our showrooms to see various finishes displayed throughout our entire range of products.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container4Item}>
                        <div className={styles.imgContainer}>
                            <img src={tech7} alt='the best cnc machinery' className={styles.img} />
                        </div>
                        <div className={styles.container4ItemHeader}>
                            <h2 className={styles.headingDarkSmall}>UNIBLINDS</h2>
                            <div className={styles.container4ItemTextContainer}>
                                <p className={styles.paraDark}>Integral blinds are the ideal solution for bi-folding doors! Large amounts of glass need screening for privacy and to control light, and when combined with large clear openings this causes problems. Because they are contained within the glass itself, they can be concealed discretely when not in use, and stay out of the way when the doors are opened.</p>
                                <p className={styles.paraDark}>Integral blinds are permanently sealed within the double glazed unit & never need cleaning. They are available in a range of colours, can be operated manually or by remote control. They are also perfect windows and glazed doors particularly in rooms like kitchens, which generate a lot of moisture.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.container5}>
                <div className={styles.boxDark}>
                    <h2 className={styles.headingGreen}>SUPERIOR GLAZING</h2>
                    <div className={styles.container2TopTextContainer}>
                        <p className={styles.paraLight}>We know that our customers want their new glazing to look great from the moment of installation, which is why we’ve made it part of our mission to provide clear glazing that you enjoy for all twelve months of the year.</p>
                        <p className={styles.paraLight}>Glass accounts for a significant number of our products, so it’s crucial that premium quality glass is used. We offer top quality, toughened, soft coat, and low E glass as standard, but we can offer glass for any application, including enhanced security, solar control, obscure, and triple-glazed glass units.</p>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <img src={tech8} alt='ideal for all homes' className={styles.img} />
                </div>
            </section>
        </div>
    )
}

export default OurTechnology;

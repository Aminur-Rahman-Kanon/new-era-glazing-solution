import React, { useEffect, useState } from 'react';
import styles from './productsContainer.module.css';
import { products, showrooms } from '../../Data/data';
import { Link } from 'react-router-dom';
import ImageSlideshow from '../ImageSlideshow/imageSlideshow';
import ShowroomsContainer from '../ShowroomsContainer/showroomsContainer';

const ProductsContainer = ({ product }) => {

    const [productId, setProductId] = useState({});

    useEffect(() => {
        if (product){
            const id = products.filter(ite => ite.heading === product);
            if (id.length) {
                setProductId(id[0]);
            }
        }
    }, [])

    return (
        <div className={styles.productsMain}>
            {
                product && Object.keys(productId).length ? <div className={styles.productsWrapper}>
                    <section className={styles.container1}>
                        <div className={styles.container1Top}>
                            <div className={styles.imgContainer}>
                                <img src={productId.img[0]} alt={productId.heading} className={styles.img} />
                            </div>
                            <div className={styles.boxDark}>
                                <h3 className={styles.headingLightSmall}>{productId.heading}</h3>
                                <h2 className={styles.headingGreen}>{`TRANSFORM YOUR SPACE WITH ${productId.heading}`}</h2>
                                <p className={styles.paraLight}>Perfect for filling your home with natural light, bi-fold patio doors can instantly make any space feel bigger, brighter, and more beautiful. And with our market-leading slimline aluminium bi-fold doors, you can create a seamless transition between indoors and out.</p>
                                <select defaultValue='select a product' className={styles.sectionSelect} onChange={() => window.location.assign('/products/xp view')}>
                                    <option disabled className={styles.section1Option}>select a product</option>
                                    {productId.product.map((op, idx) => <option key={idx}>{op}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className={styles.container1Bottom}>
                            <p className={styles.paraDark}>Aluminium bi-fold doors are the perfect choice for replacement and refurbishment installations, being ideal for new extensions and new build homes. They facilitate modern-day open living to transform any space whilst still allowing you to enjoy your stunning garden views.</p>
                            <p className={styles.paraDark}>Whether you’re shopping for your new-build patio or working on a modern kitchen renovation, our bespoke bi-fold doors are made-to-measure in a range of styles, finishes, and colours designed to complement any interior scheme and add light to any space.</p>
                            <p className={styles.paraDark}>Get in touch today to discuss your next home renovation project.</p>
                        </div>
                    </section>
                    <section className={styles.section2}>
                        <div className={styles.videoContainer}>
                            <video width='100%' height='auto' controls playsInline>
                                <source src={`${productId.video}#t=0.001`} type='video/mp4'/>
                                Your browser doens't support video
                            </video>
                        </div>
                        <div className={styles.section2Header}>
                            <h2 className={styles.headingDark}>{`OUR ${productId.heading}`}</h2>
                            <p className={styles.paraDark}>At Express, we’ve been manufacturing and installing aluminium bi-fold doors since our inception in 2007. Since then, we’ve been constantly evolving our range, and we’ve even launched a new generation of revolutionary, industry-leading bi-fold doors.</p>
                            <p className={styles.paraDark}>And because every Express bi-folding door is bespoke and manufactured in-house before being installed by us personally, all of our products come with a minimum 10-year guarantee.</p>
                            <p className={styles.paraDark}>Take a look at the four great bi-fold door products we manufacture:</p>
                            <div className={styles.section2BottomContainer}>
                                <h3 className={styles.section2Heading2}>DISCOVER THESE PRODUCTS</h3>
                                <div className={styles.section2Lists}>
                                    {productId.product.map((item, idx) => <Link key={idx} to='/products/xp view' className={styles.section2List}>{item}</Link>)}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.imgSlideShow}>
                        <ImageSlideshow img={productId.img}/>
                    </section>
                    <section className={styles.section3}>
                        <div className={styles.section3Top}>
                            <div className={styles.textContainer}>
                                <p className={styles.paraDark}>When it comes to our range of folding doors, the XP View is certainly the most premium door in our range. However, our XP88 and XP10 are our most popular products and a fantastic investment if you’re looking to transform you space while spending a little less.</p>
                                <p className={styles.paraDark}>Each of our folding door sets is available in our full palette of colours and finishes. Our sleek black bi-fold doors and grey bi-fold doors, in particular, are some of our most popular options, boasting a contemporary yet timeless appearance that can elevate the look of your property.</p>
                                <p className={styles.paraDark}>Why not browse our full range below to see which product might be the best fit for your home.</p>
                            </div>
                        </div>
                        <div className={styles.section3Bottom}>
                            <div className={styles.imgContainer}>
                                <img src={productId.img[1]} alt={productId.heading} className={styles.img} />
                            </div>
                            <div className={styles.boxLight}>
                                <h2 className={styles.headingDark}>A BESPOKE, FULL-SERVICE SOLUTION</h2>
                                <p className={styles.paraDark}>If you tell us exactly what you want your new doors to look like, our design team will endeavour to make it happen. We’ll start by clarifying your specifications – style, colour, glazing and fittings – before working with you to create the perfect entryway solution, offering expert advice and insight along the way, including installation and aftercare tips.</p>
                                <p className={styles.paraDark}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, non? Reiciendis ut, dignissimos officiis quos libero vel optio dolore modi dolor laborum odio quibusdam fugit? Provident aperiam cupiditate dolores totam eaque, porro, et nam voluptas necessitatibus quae ut sit hic tempora nemo.</p>
                                <p className={styles.paraDark}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore quam neque voluptas quis dolorem porro eveniet doloribus nihil ratione. Voluptatum expedita ex iste quas, eius laboriosam sed est voluptate rerum quia quaerat, nesciunt velit necessitatibus! Odio officiis voluptatum ullam ipsam temporibus.</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.section4}>
                        <div className={styles.boxLight}>
                            <h2 className={styles.headingDark}>WHY CHOOSE BI-FOLDING DOORS?</h2>
                            <p className={styles.paraDark}>There are numerous benefits to installing bi-folds in your property, including being able to make a clear connection with your outdoor space. But the positives don’t stop there! Here, architect and TV presenter George Clarke shares his expert opinion on the benefits of folding doors and how they can transform your property, and you can discover even more advice and inspiration below:</p>
                            <p className={styles.paraDark}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, non? Reiciendis ut, dignissimos officiis quos libero vel optio dolore modi dolor laborum odio quibusdam fugit? Provident aperiam cupiditate dolores totam eaque, porro, et nam voluptas necessitatibus quae ut sit hic tempora nemo.</p>
                            <p className={styles.paraDark}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore quam neque voluptas quis dolorem porro eveniet doloribus nihil ratione. Voluptatum expedita ex iste quas, eius laboriosam sed est voluptate rerum quia quaerat, nesciunt velit necessitatibus! Odio officiis voluptatum ullam ipsam temporibus.</p>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={productId.img[2]} alt={productId.heading} className={styles.img}/>
                        </div>
                    </section>
                    <section className={styles.section5}>
                        <div className={styles.imgContainer}>
                            <img src={productId.img[0]} alt={productId.heading} className={styles.img} />
                        </div>
                        <div className={styles.boxDark}>
                            <h2 className={styles.headingGreen}>EXPLORE OUR SHOWROOMS</h2>
                            <p className={styles.paraLight}>We understand that finding the right company and the best bi-fold doors is a difficult decision, which is why we always recommend people to visit our showrooms to view our products and to meet our team.  And if you don’t have time to do this, then you can still explore our showrooms from the comfort of your own home.</p>
                            <p className={styles.paraLight}>We offer the unique experience of exploring our Leeds, Glasgow, and London showrooms through 360 photography, and we provide the rare opportunity to explore some of our completed projects using the same digital technology.</p>
                            <p className={styles.paraLight}>View our virtual showrooms, or alternatively, take a look through some of our completed projects below that all feature our industry-leading, British-made bespoke bi-folding doors.</p>
                        </div>
                    </section>
                    <div className={styles.header7}>
                        <ShowroomsContainer />
                    </div>
                </div>
                :
                <div>
                    
                </div>
            }
        </div>
    )
}

export default ProductsContainer;

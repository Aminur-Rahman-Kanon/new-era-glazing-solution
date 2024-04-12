import React, { useEffect } from 'react';
import styles from './showroomsContainer.module.css';
import { productSliderHandler } from '../../Utilities/utilities';
import { showrooms } from '../../Data/data';

const ShowroomsContainer = () => {

    useEffect(() => {
        productSliderHandler('header7Item', styles);
    }, []);

    return (
        <div className={styles.header7}>
            <h2 className={styles.headingDark}>VISIT OUR SHOWROOMS</h2>
            <div className={styles.showroomContainer}>
                {showrooms.map(srm => 
                    <div key={srm.id} className={styles.header7Item}>
                        <div className={styles.header7BgContainer}>
                            <img src={srm.img} alt={srm.name} className={styles.header7Bg}/>
                        </div>
                        <div className={styles.header7BannerContainer}>
                            <h2 className={styles.header7BannerH2}>{srm.name}</h2>
                            <button className={styles.header7BannerBtn}>+</button>
                        </div>
                        <div className={styles.header7SliderContainer}>
                            <h2 className={styles.header7SliderH2}>{srm.name}</h2>
                            <div className={styles.sliderItem}>
                                <span className={styles.header7Label}>Address</span>
                                <p className={styles.header7SliderP}>{srm.address}</p>
                            </div>
                            <div className={styles.sliderItem}>
                                <span className={styles.header7Label}>Phone</span>
                                <p className={styles.header7SliderP}>{srm.phone}</p>
                            </div>
                            <div className={styles.sliderItem}>
                                <span className={styles.header7Label}>Opening Hours</span>
                                <p className={styles.header7SliderP}>{srm.openingHours}</p>
                            </div>
                            <button className={styles.header7BannercloseBtn}>-</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShowroomsContainer

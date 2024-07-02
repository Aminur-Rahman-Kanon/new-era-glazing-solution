import React, { useEffect } from 'react';
import styles from './topbar.module.css';
import AdditionalTopbar from '../AdditionalTopbar/additionalTopbar';
import Logo from '../Logo/logo';
import TopbarButtons from '../TopbarButtons/topbarButtons';
import logoImg1 from '../../Assets/logo1.png';
import logoImg2 from '../../Assets/logo2.png';


const Topbar = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', () => stickyScrollHandler());
    }, [])

    const stickyScrollHandler = () => {
        const topbar = document.getElementById('topbar');
        const topbarOffset = topbar.offsetTop;
        if (topbar){
            const additionalBanner = topbar.children[0];
            const phoneNumber = topbar.children[0].children[0].children[0];
            const topbarBtns = topbar.children[2];
            const logo = topbarBtns.children[0].children[0].children[0];
            const drawtoggle = topbarBtns.children[1].children[0].children[0].children[0];
            // const getQuoteLink = topbarBtns.children[1].children[0].children[1];
            const hLine1 = topbar.children[1];
            const hLine2 = topbar.children[3];
            const bottomHeading = topbar.children[4];

            //effect while scroll for first time
            if (window.scrollY > topbarOffset){
                topbar.style.backgroundColor = 'white';
                phoneNumber.style.color = '#ed8129';
                drawtoggle.style.color = 'black';
                hLine1.style.display = 'none';
                additionalBanner.style.display = 'none'
                logo.src = logoImg2;
                hLine2.style.display = 'none';
                bottomHeading.style.display = 'none';
            }
            else {
                if (window.innerWidth <= 767){
                    topbar.style.backgroundColor = '#00000091';
                    additionalBanner.style.display = 'none'
                    logo.src = logoImg1;
                    drawtoggle.style.color = 'white';
                    hLine1.style.display = 'none';
                    hLine2.style.display = 'block';
                    bottomHeading.style.display = 'none';
                }
                else {
                    topbar.style.backgroundColor = '#00000091';
                    additionalBanner.style.display = 'flex';
                    phoneNumber.style.color = '#ed8129';
                    drawtoggle.style.color = 'white';
                    additionalBanner.children[0].children[0].style.color = 'white';
                    logo.src = logoImg1;
                    hLine1.style.display = 'block';
                    hLine2.style.display = 'block';
                    bottomHeading.style.display = 'flex';
                }
            }
        }
    };
    return (
        <div className={styles.topbarContainer} id='topbar'>
            <AdditionalTopbar />
            <div className={styles.bottomContainer}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <TopbarButtons />
            </div>
            <hr className={styles.hr} />
            <div className={styles.headingBottom}>
                <span className={styles.bottomHeadingItem}>TRANSFORMING HOME SINCE 2014</span>
                <span className={styles.bottomHeadingItem}>MADE IN BRITAIN</span>
                <span className={styles.bottomHeadingItem}>NATIONWIDE SUPPLY & INSTALL SERVICE</span>
            </div>
        </div>
    )
}

export default Topbar;

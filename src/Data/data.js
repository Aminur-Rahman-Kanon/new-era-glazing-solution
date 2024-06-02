import biFoldingDoors from '../Assets/bi-folding_doors.jpg';
import slidingDoors from '../Assets/sliding_doors.jpg';
import aluminiumWindows from '../Assets/aluminium_windows.jpg';
// import glassRoofing from '../Assets/glass_roofing.jpg';
// import steelDoors from '../Assets/steel_doors.jpg';
// import entranceDoors from '../Assets/entrance_doors.jpg';
import b_f_door1 from '../Assets/products/bi_folding_doors/b1.jpg';
import b_f_door2 from '../Assets/products/bi_folding_doors/b2.jpg';
import b_f_door3 from '../Assets/products/bi_folding_doors/b3.jpg';
import b_f_door4 from '../Assets/products/bi_folding_doors/b4.jpg';
import b_f_door5 from '../Assets/products/bi_folding_doors/b5.jpg';
import b_f_door6 from '../Assets/products/bi_folding_doors/b6.jpg';
import b_f_door7 from '../Assets/products/bi_folding_doors/b7.jpg';
import s_door1 from '../Assets/products/sliding_door/s1.jpg';
import s_door2 from '../Assets/products/sliding_door/s2.jpg';
import s_door3 from '../Assets/products/sliding_door/s3.jpeg';
import s_door4 from '../Assets/products/sliding_door/s4.jpeg';
import s_door5 from '../Assets/products/sliding_door/s5.jpeg';
import s_door6 from '../Assets/products/sliding_door/s6.jpeg';
import w1 from '../Assets/products/windows/w1.jpg';
import w2 from '../Assets/products/windows/w2.jpg';
import w3 from '../Assets/products/windows/w3.jpeg';
import l1 from '../Assets/products/lantern/l1.jpg';
import l2 from '../Assets/products/lantern/l2.jpg';
import l3 from '../Assets/products/lantern/l3.jpeg';
import l4 from '../Assets/products/lantern/l4.jpeg';
import s1 from '../Assets/products/single_door/s_d_1.jpg';
import s2 from '../Assets/products/single_door/s_d_2.jpg';
import s3 from '../Assets/products/single_door/s_d_3.jpg';
import s4 from '../Assets/products/single_door/s_d_4.jpg';
import s5 from '../Assets/products/single_door/s_d_5.jpg';
import s6 from '../Assets/products/single_door/s_d_6.jpeg';
import f_d_1 from '../Assets/products/french_door/f1.jpg';
import f_d_2 from '../Assets/products/french_door/f2.jpg';
import f_d_3 from '../Assets/products/french_door/f3.jpg';
import f_d_4 from '../Assets/products/french_door/f4.jpeg';
import f_d_5 from '../Assets/products/french_door/f5.jpeg';
import f_d_6 from '../Assets/products/french_door/f6.jpeg';
import f_d_7 from '../Assets/products/french_door/f7.jpeg';
import video from '../Assets/videos/bifold.mp4';
import shwroom1 from '../Assets/showrooms/showrooms_1.jpg';
import shwroom2 from '../Assets/showrooms/showrooms_2.jpg';
import shwroom3 from '../Assets/showrooms/showrooms_3.jpg';
import shwroom4 from '../Assets/showrooms/showrooms_4.jpg';

export const items = [
    'bifold doors', 'sliding doors', 'windows'
]

export const colors = [
    'black', 'grey', 'white', 'others'
]

export const popularProducts = [
    {
        title: 'Bi-Folding Doors',
        img: biFoldingDoors,
        link: '/product/Bi-Folding Doors'
    },
    {
        title: 'Sliding Doors',
        img: slidingDoors,
        link: '/product/Sliding Doors'
    },
    {
        title: 'Windows',
        img: aluminiumWindows,
        link: '/product/Windows'
    }
]

export const testReview = [
    {
        id: 1,
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: 'Julian Silva',
        rating: 4
    },
    {
        id: 2,
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        name: 'Brett Lee',
        rating: 5
    },
    {
        id: 3,
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        name: 'Wasim Akram',
        rating: 3
    },
    {
        id: 4,
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: 'Brian Lara',
        rating: 2
    }
]

export const products = [
    {
        id: 1,
        heading: 'Bi-Folding Doors',
        product: [
            'ass 70 fd', 'as fd 75', 'ob-47', 'ob-49', 'c-line', 'bifold plus', 'visufold'
        ],
        img: [b_f_door1, b_f_door2, b_f_door3, b_f_door4, b_f_door5, b_f_door6, b_f_door7],
        video
    },
    {
        id: 2,
        heading: 'Sliding Doors',
        product: [
            'ase 60 lift & slide', 'os 20', 'os 44', 'os 77', 'cor vision', '4700 (lift & slide)'
        ],
        img: [s_door1, s_door2, s_door3, s_door4, s_door5, s_door6],
        video
    },
    {
        id: 3,
        heading: 'Windows',
        product: [
            'UPVC Rehau', 'UPVC Eurocel', 'Aluminium Smart & Cortizo'
        ],
        img: [w1, w2, w3],
        video
    },
    {
        id: 4,
        heading: 'Lantern (Pyramid Shaped Roof)',
        product: [
            'Korniche Aluminium'
        ],
        img: [l1],
        video
    },
    {
        id: 5,
        heading: 'Flat Rooflight',
        product: [
            'UPVC Velux (Fix & Openable)', 'Aluminium (Fix)'
        ],
        img: [l2, l3],
        video
    },
    {
        id: 6,
        heading: 'Single Side / French Door',
        product: [
            'UPVC Rehau', 'UPVC Eurocel', 'Aluminium Schuco', 'Aluminium Cortizo', 'Aluminium Origin & Smart'
        ],
        img: [s1, s2, s3, s4, s5],
        video
    },
    {
        id: 7,
        heading: 'Front / Entrance Door',
        product: [
            'UPVC Rehau', 'UPVC Eurocel', 'UPVC Composite', 'Aluminium Schuco', 'Aluminium Cortizo', 'Aluminium Origin & Smart', 'Aluminium Hallmark'
        ],
        img: [f_d_1, f_d_2, f_d_3, f_d_4, f_d_5, f_d_6, f_d_7],
        video
    }
]

// export const productImg = {
//     "ass 70 fd": p1,
//     "as fd 75": p2,
//     "ob-47": p3,
//     "ob-49": p4,
//     "c-line": p5,
//     "bifold plus": p6,
//     "visufold": p7,
//     "ase 60 lift & slide": p8,
//     "os 20": p9,
//     "os 44": p10,
//     "os 77": p20,
//     "cor vision": p11,
//     "4700 (lift & slide)": p12,
//     "UPVC Rehau": p14,
//     "UPVC Eurocel": p15,
//     "Aluminium Smart & Cortizo": p15,
//     "Korniche Aluminium": p16,
//     "UPVC Velux (Fix & Openable)": p17,
//     "Aluminium (Fix)": p18,
//     "UPVC Rehau": p19,
//     "UPVC Eurocel": p20,
//     "Aluminium Schuco": p21,
//     "Aluminium Cortizo": p22,
//     "Aluminium Origin & Smart": p23,
//     "UPVC Rehau": p24,
//     "UPVC Eurocel": p1,
//     "UPVC Composite": p2,
//     "Aluminium Schuco": p3,
//     "Aluminium Cortizo": p4,
//     "Aluminium Origin & Smart": p5,
//     "Aluminium Hallmark": p6
// }

export const brochureItems = [
    'BI-FOLDING DOORS', 'SLIDING DOORS', 'WINDOWS', 'SUMMARY OF ALL PRODUCTS'
]

export const showrooms = [
    {
        id: 1,
        img: shwroom3,
        name: 'romford showroom',
        phone: '+44 7875 531847',
        address: 'Unit 2, Midland House, 111-113 Victoria Road, London, Romford, RM1 2LX',
        openingHours: '9am - 5pm'
    },
    {
        id: 2,
        img: shwroom2,
        name: 'weybridge showroom',
        phone: '+44 7875 531847',
        address: 'Unit 4, Phoenix Business Centre, Spur Road, Chichester PO19 8PN',
        openingHours: '9am - 5pm'
    },
    {
        id: 3,
        img: shwroom1,
        name: 'leeds showroom',
        phone: '+44 7875 531847',
        address: 'Unit 4, Phoenix Business Centre, Spur Road, Chichester PO19 8PN',
        openingHours: '9am - 5pm'
    },
    {
        id: 4,
        img: shwroom4,
        name: 'glasgow showroom',
        phone: '+44 7875 531847',
        address: 'Unit 4, Phoenix Business Centre, Spur Road, Chichester PO19 8PN',
        openingHours: '9am - 5pm'
    }
]
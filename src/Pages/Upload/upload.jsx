import React, { useState } from 'react';
import styles from './upload.module.css';

const Upload = () => {

    const [title, setTitle] = useState('');
    const [header1Title, setHeader1Title] = useState('');
    const [header1Heading, setHeader1Heading] = useState('');
    const [header2Title, setHeader2Title] = useState('');
    const [header2Heading, setHeader2Heading] = useState('');
    const [header3Heading, setHeader3Heading] = useState('');
    const [header3Title, setHeader3Title] = useState('');
    const [header4Key, setHeader4Key] = useState('');
    const [header6Heading, setHeader6Heading] = useState('');
    const [header6Title, setHeader6Title] = useState('');
    const [header8Title, setHeader8Title] = useState('');
    const [header8Heading, setHeader8Heading] = useState('');
    const [header8Spec, setHeader8Spec] = useState('');
    const [header9Heading, setHeader9Heading] = useState('');
    const [header9Title, setHeader9Title] = useState('');
    const [header9Color, setHeader9Color] = useState('');
    console.log(header8Spec);

    const submitHandler = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8080/upload',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                title, header1Heading, header1Title, header2Title, header2Heading, header3Heading, header3Title, header4Key, header6Heading, header6Title, header8Heading, header8Spec, header8Title, header9Heading, header9Title
             })
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <div className={styles.input}>
                    <input type='text' placeholder='product' onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div className={styles.input}>
                    <input type='text' placeholder='title' onChange={(e) => setHeader1Title(e.target.value)}/>
                    <input type='text' placeholder='heading' onChange={(e) => setHeader1Heading(e.target.value)}/>
                </div>

                <div className={styles.input}>
                    <input type='text' placeholder='title' onChange={(e) => setHeader2Title(e.target.value.split('.'))}/>
                    <input type='text' placeholder='heading' onChange={(e) => setHeader2Heading(e.target.value)}/>
                </div>

                <div className={styles.input}>
                    <input type='text' placeholder='heading' onChange={(e) => setHeader3Heading(e.target.value)}/>
                    <input type='text' placeholder='title' onChange={(e) => setHeader3Title(e.target.value)}/>
                </div>

                <div className={styles.input}>
                    <textarea placeholder='key feature' rows={15} onChange={(e) => setHeader4Key(e.target.value.split('.'))}/>
                </div>

                <div className={styles.input}>
                    <input type='text' placeholder='heading' onChange={(e) => setHeader6Heading(e.target.value)}/>
                    <input type='text' placeholder='title' onChange={(e) => setHeader6Title(e.target.value.split('.'))}/>
                </div>

                <div className={styles.input}>
                    <input type='text' placeholder='title' onChange={(e) => setHeader8Title(e.target.value)}/>
                    <input type='text' placeholder='heading' onChange={(e) => setHeader8Heading(e.target.value)}/>
                    <textarea placeholder='list of specifications' rows={15} onChange={(e) => setHeader8Spec(e.target.value.split('.'))}/>
                </div>

                <div className={styles.input}>
                    <input type='text' placeholder='heading' onChange={(e) => setHeader9Heading(e.target.value)}/>
                    <input type='text' placeholder='title' onChange={(e) => setHeader9Title(e.target.value.split('.'))}/>
                    <input type='text' placeholder='colors' onChange={(e) => setHeader9Color(e.target.value.split(','))}/>
                </div>
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default Upload;

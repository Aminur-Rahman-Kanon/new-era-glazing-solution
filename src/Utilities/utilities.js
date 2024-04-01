export const focusElement = (index, styles) => {
    const inputContainer = document.querySelectorAll(`.${styles.inputContainer}`);
    const label = inputContainer[index].children[0];
    const input = inputContainer[index].children[1];
    if (input.value === ''){
        label.className = `${styles.label} ${styles.activeLabel}`;
        input.placeholder = '';
        // input.className = `${styles.input} ${styles.activeInput}`;
    }
}

export const leaveFocus = (index, styles) => {
    const inputContainer = document.querySelectorAll(`.${styles.inputContainer}`);
    const label = inputContainer[index].children[0];
    const input = inputContainer[index].children[1];
    if (input.value === ''){
        input.placeholder = label.textContent;
        // input.className = `${styles.input}`;
        label.className = `${styles.label}`;
    }
}

export const emailValiditionHandler = (input, validationHandler) => {
    const timer = setTimeout(() => {
        if (input) {
            const check1 = input.includes('@');
            const check2 = input.includes('.com');
            
            if (check1 && check2){
                const domain = input.slice(input.indexOf('@') + 1, input.indexOf('.com'));
                
                if (domain.length > 0){
                    validationHandler(true);
                }
            }
            else {
                validationHandler(false);
            }
        }
    }, 1200)
    
    return () => {
        clearTimeout(timer);
    }
}

export const phoneNumberValidationHandler = (phone, phoneNumberValidationHandler) => {
    const timer = setTimeout(() => {
        if (phone){
            if (phone.length === 11){
                phoneNumberValidationHandler(true);
            }
            else {
                phoneNumberValidationHandler(false);
            }
        }
    }, 1200);

    return () => {
        clearTimeout(timer);
    }
}

export const displayNestedItemHandler = (el, wrapper2, styles) => {
    if (el && styles){
        el.forEach(element => {
            const heading = element.children[0];
            const menu = element.children[1];
            const backBtn = menu.children[0];
            
            //adding event listener
            heading.addEventListener('click', () => {
                wrapper2.style.overflow = 'hidden';
                menu.className = `${styles.itemsContainer} ${styles.show}`;
            })

            backBtn.addEventListener('click', () => {
                wrapper2.style.overflow = 'visible';
                menu.className = `${styles.itemsContainer}`;
            })
        });
    }
}

export const focusElementBrochure = (index, styles) => {
    const inputContainer = document.querySelectorAll(`.${styles.inputContainer}`);
    const label = inputContainer[index].children[0];
    const input = inputContainer[index].children[1];
    if (input.value === ''){
        label.className = `${styles.label} ${styles.activeLabel}`;
        input.placeholder = '';
        input.className = `${styles.input} ${styles.activeInput}`;
    }
}

export const sliderHandler = ( el, styles) => {
    const element = document.querySelectorAll(`.${styles[el]}`);
    console.log(element);

    element.forEach(ele => {
        const slider = ele.children[2];
        const showBtn = ele.children[1].children[1];
        const hideBtn = ele.children[2].children[2];
        console.log(slider);
        console.log(showBtn);
        console.log(hideBtn);
    
        showBtn.addEventListener('click', (e) => {
            e.preventDefault();
            slider.className = `${styles.header7SliderContainer} ${styles.show}`
        })
    
        hideBtn.addEventListener('click', (e) => {
            e.preventDefault();
            slider.className = styles.header7SliderContainer;
        })
    })

}
// template_wigd9m1
// service_m6r0lzm
// 

 /* async */ function contact(event) {
    event.preventDefault();
    /* await */ emailjs
    .sendForm(
        'service_m6r0lzm',
        'template_wigd9m1',
        event.target,
        'rsPrK5AtL2d9Ax1_E'
    ).then(() => { /* need to wait for the email server, so add .then() */
        console.log('this worked')
    }) /* dont have to use then() if use async/await */
}

const loading = document.querySelector('.modal__overlay--loading')
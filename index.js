// template_wigd9m1
// service_m6r0lzm
// 

 /* async */ function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"         // adding a class always add a space
    /* await */ emailjs
    .sendForm(
    'service_m6r0lzm',
    'template_wigd9m1',
     event.target,
     'rsPrK5AtL2d9Ax1_E'
     ).then(() => {                                         /* need to wait for the email server, so add .then() */
     loading.classList.remove("modal__overlay--visible");
     success.classList += " modal__overlay--visible";
     }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at nadzzrahim@gmail.com."
        );
     })                                                      /* dont have to use then() if use async/await */


// setTimeout(() => {
 
//    console.log('IT WORKED')
//    }, 1000);

    }


    // let isModalOpen = false;
    function toggleModal() {
        console.log('toggleModal()');
       // if (isModalOpen) {
         //   isModalOpen = false;
           // return document.body.classList.remove("modal--open");
        //}

        //isModalOpen = true;
        //document.body.classList += " modal--open";
    }
// template_wigd9m1
// service_m6r0lzm
// 
const scaleFactor = 1 / 20 ;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape"); // .shape in array
  const x = event.clientX * scaleFactor; // to minimize size range of shape movement relative to mouse movement
  const y = event.clientY * scaleFactor;

  // console.log(x, y)
  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    console.log(isOdd);
    const boolInt = isOdd ? -1 : 1 ;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

let contrastToggle = false;

function contrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

 /* async */ function contact(event) {
                event.preventDefault();
                const loading = document.querySelector('.modal__overlay--loading');
                const success = document.querySelector('.modal__overlay--success');
                loading.classList += " modal__overlay--visible";         // adding a class always add a space
    
    /* await */ emailjs
                .sendForm(
                'service_m6r0lzm',
                'template_wigd9m1',
                event.target,
                'rsPrK5AtL2d9Ax1_E'
                ).then(() => {                                         /* need to wait for the email server, so add .then() */
                throw new Error("error");
                loading.classList.remove("modal__overlay--visible");
                success.classList += " modal__overlay--visible";
                }).catch(() => {
                    loading.classList.remove("modal__overlay--visible");
                  alert(
                 "The email service is temporarily unavailable. Please contact me directly at nadzzrahim@gmail.com."
                     );
                 })                                                      /* dont have to use then() if use async/await */
    
//setTimeout(() => {
 
 //console.log('IT WORKED')
 // }, 1000);
}


let isModalOpen = false;
function modal() {
  // console.log('peace');

if (isModalOpen) {
  return document.body.classList.remove("modal--open");
} else {
isModalOpen = !isModalOpen;
document.body.classList += " modal--open";
 }
}
// Tutorial - https://youtu.be/VufN46OyFng

// Targetting all classes & id from HTML

let id = (id) => document.getElementById(id); // llamo a todos los id que declare abajo. --- al se una sola linea no necesito el return pero está implícito

let classes = (classes) => document.getElementsByClassName(classes); // llamo a todas las clases

//* declaración de variables

let username = id("username"),
  email = id("email"),
  Telefono = id("Telefono"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// Adding the submit event Listener

form.addEventListener("submit", (e) => {  //* en esta arrow function le digo que por cada posición del array durante el evento submit cumpla la func prevent...
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");  //? los números 1,1,2, corresponden a un array con los tres mensajes de error según su clase.
  engine(email, 1, "Email cannot be blank");
  engine(Telefono, 2, "Telefono cannot be blank");
});

// engine function which will do all the works

let engine = (id, serial, message) => {   //? si el id en el array cualquiera de los 3 esta vacío dispara el mensaje de error
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1"; //* con la opacity lo hago visible
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};


//? slide show  https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


/* Setting the display property of the slide to block. */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
 /* Setting the display property of the slide to block. */
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//! 222222222222222222




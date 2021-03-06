var mapsmall = document.querySelector(".map-small");
var fullmap = document.querySelector(".full-map");

if (fullmap) {
var mapclose = fullmap.querySelector(".full-map-close");
}

if (mapsmall) {
mapsmall.addEventListener("click", function(event) {
  event.preventDefault();
  fullmap.classList.add("modal-content-show");
  });
}
if (mapclose) {
mapclose.addEventListener("click", function(event) {
  event.preventDefault();
  fullmap.classList.remove("modal-content-show");
  });
}

var contactbtn = document.querySelector(".contact-btn");
var popup = document.querySelector(".write-us");

if (popup) {
  var close = popup.querySelector(".write-us-close");
  var form = popup.querySelector(".letter-form");
  var login = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var close = popup.querySelector(".write-us-close");
}

var storage = localStorage.getItem("login");
var buy = document.querySelectorAll(".buy");
var popupcart = document.querySelector(".cart");

if (popupcart) {
  var cartclose = popupcart.querySelector(".cart-close");
  var continueshopping = popupcart.querySelector(".continue-shopping");
}

var contactbtn = document.querySelector(".contact-btn");
var popup = document.querySelector(".write-us");

if (contactbtn) {
  contactbtn.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");

    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }

  });
}

for (var i=0; i<buy.length; i++) {
  buy[i].addEventListener("click", function(event) {
    event.preventDefault();
    popupcart.classList.add("modal-content-show");
  });
}

if (cartclose) {
  cartclose.addEventListener("click", function(event) {
    event.preventDefault();
    popupcart.classList.remove("modal-content-show");
  });
}

if (continueshopping) {
  continueshopping.addEventListener("click", function(event) {
    event.preventDefault();
    popupcart.classList.remove("modal-content-show");
  });
}

if (close) {
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });
}

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!login.value || !email.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести логин и пароль");
    } else {
      localStorage.setItem("login", login.value);
    }
  });
}

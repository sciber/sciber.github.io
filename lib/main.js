"use strict";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAYnNGUNzi9l7wxUpTUdiVUHIAjxy8KLto",
  authDomain: "scibergithubio.firebaseapp.com",
  databaseURL: "https://scibergithubio.firebaseio.com",
  projectId: "scibergithubio",
  storageBucket: "scibergithubio.appspot.com",
  messagingSenderId: "455447409161",
  appId: "1:455447409161:web:0c326b967b3e407f59bed8",
  measurementId: "G-TV9DFZJWPK"
};
firebase.initializeApp(firebaseConfig);

// Firebase analytics
// firebase.analytics();

var contactFormMessage = firebase.database().ref("contact-messages");

document.addEventListener("DOMContentLoaded", function () {
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function (el) {
      el.addEventListener("click", function () {
        var target = el.dataset.target;
        var $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("guestName").value;
    var contact = document.getElementById("guestContact").value;
    var message = document.getElementById("guestMessage").value;
    var date = new Date().toString();

    sendContactMessage(name, contact, message, date);

    document.getElementById("contactForm").reset();

    openConstactSuccessModal();
  });
});

function sendContactMessage(name, contact, message, date) {
  var newContactFormMessage = contactFormMessage.push();

  newContactFormMessage.set({
    name: name,
    contact: contact,
    message: message,
    date: date
  });
}

var $contactSuccessModal = document.getElementById("contactSuccessModal");

function openConstactSuccessModal() {
  $contactSuccessModal.classList.add("is-active");
}

function closeContactSuccessModal() {
  $contactSuccessModal.classList.remove("is-active");
}
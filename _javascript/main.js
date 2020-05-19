// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAYnNGUNzi9l7wxUpTUdiVUHIAjxy8KLto",
  authDomain: "scibergithubio.firebaseapp.com",
  databaseURL: "https://scibergithubio.firebaseio.com",
  projectId: "scibergithubio",
  storageBucket: "scibergithubio.appspot.com",
  messagingSenderId: "455447409161",
  appId: "1:455447409161:web:0c326b967b3e407f59bed8",
  measurementId: "G-TV9DFZJWPK",
};
firebase.initializeApp(firebaseConfig);

// Firebase analytics
// firebase.analytics();

let contactFormMessage = firebase.database().ref("contact-messages");

document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("guestName").value;
    let contact = document.getElementById("guestContact").value;
    let message = document.getElementById("guestMessage").value;
    let date = new Date().toString();

    sendContactMessage(name, contact, message, date);

    document.getElementById("contactForm").reset();

    openConstactSuccessModal();
  });
});

function sendContactMessage(name, contact, message, date) {
  let newContactFormMessage = contactFormMessage.push();

  newContactFormMessage.set({
    name,
    contact,
    message,
    date,
  });
}

const $contactSuccessModal = document.getElementById("contactSuccessModal");

function openConstactSuccessModal() {
  $contactSuccessModal.classList.add("is-active");
}

function closeContactSuccessModal() {
  $contactSuccessModal.classList.remove("is-active");
}

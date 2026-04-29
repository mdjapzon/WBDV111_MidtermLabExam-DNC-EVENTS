document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("inquiryForm");
  const button = document.getElementById("submitBtn");
  const status = document.getElementById("statusMessage");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // =============================
  // NAME: letters only
  // =============================
  name.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
  });

  name.oninvalid = () => {
    name.setCustomValidity("Please fill this field.");
  };

  // =============================
  // CUSTOM VALIDATION MESSAGES
  // =============================
  subject.oninvalid = () =>
    subject.setCustomValidity("Please complete this field");

  message.oninvalid = () =>
    message.setCustomValidity("Please complete this field");

  email.oninvalid = () => {
    if (email.value === "") {
      email.setCustomValidity("Please complete this field");
    } else {
      email.setCustomValidity("Please include a valid email address.");
    }
  };

  // RESET VALIDATION ON INPUT
  [name, email, subject, message].forEach(input => {
    input.oninput = () => input.setCustomValidity("");
  });

  // =============================
  // FORM SUBMIT
  // =============================
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // HTML validation check
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // EMAIL STRICT CHECK
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
      email.setCustomValidity("Please include a valid email address.");
      email.reportValidity();
      return;
    }

    // NAME STRICT CHECK (extra safety)
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(name.value)) {
      name.setCustomValidity("Name must contain letters only.");
      name.reportValidity();
      return;
    }

    // =============================
    // LOADING STATE
    // =============================
    button.disabled = true;
    button.textContent = "Sending...";
    button.classList.add("loading");

    status.textContent = "Sending your message...";
    status.className = "loading";

    // =============================
    // SUCCESS MESSAGE
    // =============================
    setTimeout(() => {

      status.textContent = "Message sent successfully! We’ll get back to you shortly.";
      status.className = "success";

      form.reset();

      button.disabled = false;
      button.textContent = "SEND MESSAGE";
      button.classList.remove("loading");

    }, 1500);

  });

  const nav = document.querySelector("nav");
const toggle = document.querySelector(".menu-toggle");
const overlay = document.querySelector(".overlay");

/* TOGGLE MENU */
function toggleMenu() {
    nav.classList.toggle("show");
    overlay.classList.toggle("show");
}

/* CLICK ☰ */
toggle.addEventListener("click", toggleMenu);

/* CLICK OUTSIDE */
overlay.addEventListener("click", () => {
    nav.classList.remove("show");
    overlay.classList.remove("show");
});

/* CLICK LINKS */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
        overlay.classList.remove("show");
    });
});

/* AUTO CLOSE ON SCROLL */
window.addEventListener("scroll", () => {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        overlay.classList.remove("show");
    }
});

});
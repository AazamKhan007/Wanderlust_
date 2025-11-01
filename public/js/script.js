// To simulate a click on all buttons when the "Enter" key is pressed
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is the "Enter" key
  if (event.key === "Enter") {
    // event.preventDefault();
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.click();
    });
  }
});

// New Listing description placeholder animation(new.ejs)
const input = document.getElementById("animated-input");
const textArray = [
  "Gomti Nagar, Lucknow",
  "New Town, Kolkata",
  "Jaipur, Rajisthan",
  "Saket, Delhi",
];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    input.placeholder += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80); // Adjust typing speed here
  } else {
    setTimeout(erase, 1500); // Wait before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    input.placeholder = input.placeholder.slice(0, -1);
    charIndex--;
    setTimeout(erase, 50); // Adjust erasing speed here
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0; // Loop back to the beginning
    }
    setTimeout(type, 500); // Wait before typing the next phrase
  }
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
  if (input) {
    setTimeout(type, 1000);
  }
});

// Stop the animation when the user starts typing
// Stop the animation when the user starts typing (guarded in pages that have #animated-input)
if (input) {
  input.addEventListener("input", () => {
    if (input.value !== "") {
      input.placeholder = "";
    }
  });
}

//For validation of form
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

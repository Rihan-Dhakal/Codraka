
'use strict';

// Select elements
const serviceButtons = document.querySelectorAll(".service-btn");
const cards = document.querySelectorAll(".card");

const modal = document.querySelector(".modal");
const modalCloseBtn = modal.querySelector(".modal-close");
const modalIcon = modal.querySelector(".modal-icon");
const modalTitle = modal.querySelector(".modal-title");
const modalDesc = modal.querySelector(".modal-desc");

// Show content modal when a card is clicked
cards.forEach(card => {
  card.addEventListener("click", () => {
    const icon = card.querySelector(".icon").textContent;
    const title = card.querySelector(".card-title").textContent;
    const desc = card.dataset.desc;

    // Fill modal content
    modalIcon.textContent = icon;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    // Show modal
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });
});

// Close modal on close button click
modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
});

// Also close modal on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
});

// Optional: Filter cards when filter buttons are clicked
serviceButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active from all buttons
    serviceButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.service;

    // Show all cards if filter is "all" or undefined
    cards.forEach(card => {
      if (filter === "all" || card.dataset.service === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
const getStartedBtn = document.getElementById("getStartedBtn");

getStartedBtn.addEventListener("click", () => {
  // Example action: scroll smoothly to the section with id="contact"
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
});

getStartedbtn.addEventListener("click", () => {
  // Example action: scroll smoothly to the section with id="contact"
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
});







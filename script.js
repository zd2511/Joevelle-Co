const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const searchDialog = document.getElementById("search-dialog");
document.getElementById("search-open").addEventListener("click", () => searchDialog.showModal());
document.getElementById("search-collections").addEventListener("click", () => searchDialog.close());

document.getElementById("newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const message = document.querySelector(".form-message");
  if (!email) return;
  message.textContent = "Thank you! The signup form is a demo and still needs an email marketing connection.";
  event.target.reset();
});

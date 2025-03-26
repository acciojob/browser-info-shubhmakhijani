//your JS code here. If required.
//your JS code here. If required.
const searchContainer = document.querySelector(".search");
const searchInput = document.querySelector(".input");
const searchButton = document.querySelector(".btn");

searchButton.addEventListener("click", () => {
    searchContainer.classList.toggle("active");
    searchInput.focus();
});
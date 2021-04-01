import createTopNav from "./components/topnav";
import createSideBar from "./components/sidebar";
import createCarousel from "./components/carousel";
import createBookCard from "./components/bookcard";
import books from "../data/books";
import Flickity from "flickity";

function customizeCarouselIcons() {
  document.querySelector(".flickity-prev-next-button.previous").innerHTML = /*html*/ `
    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 11.0577L5.49846 0.673065L0.5 5.86537L5.5 11.0577Z" fill="black"/>
    </svg>
  `;

  document.querySelector(".flickity-prev-next-button.next").innerHTML = /*html*/ `
    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 11.0577L0.501541 0.673065L5.5 5.86537L0.5 11.0577Z" fill="black"/>
    </svg>
    `;
}

function toggleSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("is-open");
}

function toggleSearchBar() {
  const searchbar = document.querySelector(".searchbar");
  searchbar.classList.toggle("is-open");
}

function filterSearchResults() {
  const searchInput = document.querySelector(".searchbar__box__input");
  const filteredBooks = books.filter((book) =>
    book.name
      .toLowerCase()
      .includes(searchInput.value.slice(0, searchInput.value.indexOf("-")).toLowerCase().trim())
  );

  const carouselContainer = document.querySelector(".content__carousel");
  carouselContainer.innerHTML = createCarousel(filteredBooks);
  const flkty = new Flickity(".carousel", {
    cellAlign: "center",
    wrapAround: true,
  });
  flkty.resize();
  removeEventListeners();
  addEventListeners();
}

function toggleCarouselCellDetails(elem) {
  elem.classList.toggle("show");
}

function addEventListeners() {
  const sidebarButtonToggle = document.querySelector(".sidebar__back-button");
  const topnavSidebarToggle = document.querySelector(".nav__sidebar-toggle");

  sidebarButtonToggle.addEventListener("click", toggleSideBar);
  topnavSidebarToggle.addEventListener("click", toggleSideBar);

  const searchbarToggle = document.querySelector(".searchbar__toggle");
  const searchbarButton = document.querySelector(".searchbar__box__button");

  searchbarToggle.addEventListener("click", toggleSearchBar);
  searchbarButton.addEventListener("click", toggleSearchBar);

  const searchInput = document.querySelector(".searchbar__box__input");

  searchInput.addEventListener("change", filterSearchResults);

  const carouselCells = document.querySelectorAll(".carousel__cell");
  carouselCells.forEach((elem) => {
    const toggleButton = elem.querySelector(".carousel__cell__toggle");
    const closeButton = elem.querySelector(".carousel__cell__details__close-button");
    const detailsElem = elem.querySelector(".carousel__cell__details");
    toggleButton.addEventListener("click", () => toggleCarouselCellDetails(detailsElem));
    closeButton.addEventListener("click", () => toggleCarouselCellDetails(detailsElem));
  });
}

function removeEventListeners() {
  const sidebarButtonToggle = document.querySelector(".sidebar__back-button");
  const topnavSidebarToggle = document.querySelector(".nav__sidebar-toggle");

  sidebarButtonToggle.removeEventListener("click", toggleSideBar);
  topnavSidebarToggle.removeEventListener("click", toggleSideBar);

  const searchbarToggle = document.querySelector(".searchbar__toggle");
  const searchbarButton = document.querySelector(".searchbar__box__button");

  searchbarToggle.removeEventListener("click", toggleSearchBar);
  searchbarButton.removeEventListener("click", toggleSearchBar);

  const searchInput = document.querySelector(".searchbar__box__input");

  searchInput.removeEventListener("change", filterSearchResults);

  const carouselCells = document.querySelectorAll(".carousel__cell");
  carouselCells.forEach((elem) => {
    const toggleButton = elem.querySelector(".carousel__cell__toggle");
    const closeButton = elem.querySelector(".carousel__cell__details__close-button");
    const detailsElem = elem.querySelector(".carousel__cell__details");

    toggleButton.removeEventListener("click", () => toggleCarouselCellDetails(detailsElem));
    closeButton.removeEventListener("click", () => toggleCarouselCellDetails(detailsElem));
  });
}

function buildUI() {
  const appUI = /*html*/ `
    ${createTopNav()}
    <main>
      ${createSideBar()}
      <div class="content">
        <section>
          <h2 class="content__title">Featured Books</h2>
          <div class="content__carousel">
            ${createCarousel(books)}
          </div>
        </section>
        <section>
          <h2 class="content__title">Recently Added</h2>
          <div class="content__books">
            ${books.map((book) => createBookCard(book)).join("")}
          </div>
        </section>
        <section>
          <h2 class="content__title">All Books</h2>
          <div class="content__books">
            ${books.map((book) => createBookCard(book)).join("")}
          </div>
        </section>
      </div>
    </main>
  `;
  document.querySelector("#app").innerHTML = appUI;
}

export function runApp() {
  buildUI();
  document.addEventListener("DOMContentLoaded", () => {
    customizeCarouselIcons();
    addEventListeners();
  });
}

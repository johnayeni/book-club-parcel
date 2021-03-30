import createTopNav from "./components/topnav";
import createSideBar from "./components/sidebar";
import createCarousel from "./components/carousel";
import createBookCard from "./components/bookcard";
import books from "../data/books";

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

function buildUI() {
  const appUI = /*html*/ `
    ${createTopNav()}
    <main>
      ${createSideBar()}
      <div class="content">
        <section>
          <h2 class="content__title">Featured Books</h2>
          ${createCarousel(books)}
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
  });
}

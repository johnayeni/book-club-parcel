import books from "../../data/books";

const createSearchBar = () => {
  const suggestions = books.map((book) => `${book.name} - ${book.author}`);

  const searchBar = /*html*/ `
  <div class="searchbar">
    <button class="searchbar__toggle">
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.28185V6.5338H3.37343L8.67118 1.23606L7.43512 0L0.901316 6.5338L0 7.40783L0.901316 8.28185L7.43512 14.8157L8.67118 13.5796L3.37343 8.28185H16Z" fill="black"/>
      </svg>
    </button>
    <div class="searchbar__box">
      <input list="searchbar__list" class="searchbar__box__input" placeholder="Search books, genres, authors, etc.">
      <datalist id="searchbar__list">
          ${suggestions.map((suggestion) => /*html*/ `<option>${suggestion}</option>`).join("")}
      </datalist>
      <button class="searchbar__box__button">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
          <g>
            <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"/>
          </g>
        </svg>
      </button>
    </div>
  </div>
   `;

  return searchBar;
};

export default createSearchBar;

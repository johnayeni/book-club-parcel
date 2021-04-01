import "flickity";

const createCarousel = (books) => {
  const carousel = /*html*/ `
  <div class="carousel js-flickity"
  data-flickity-options='{ "cellAlign": "center", "wrapAround": true }'>
  ${books
    .map(
      (book) => /*html*/ `
    <div class="carousel__cell">
      <button class="carousel__cell__toggle">
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.5C0 20.9558 6.04416 27 13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5Z" fill="white"/>
          <path d="M12 7.5C12 8.32843 12.6716 9 13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6C12.6716 6 12 6.67157 12 7.5Z" fill="#999999"/>
          <path d="M12 13.5C12 14.3284 12.6716 15 13.5 15C14.3284 15 15 14.3284 15 13.5C15 12.6716 14.3284 12 13.5 12C12.6716 12 12 12.6716 12 13.5Z" fill="#999999"/>
          <path d="M13.5 21C12.6716 21 12 20.3284 12 19.5C12 18.6716 12.6716 18 13.5 18C14.3284 18 15 18.6716 15 19.5C15 20.3284 14.3284 21 13.5 21Z" fill="#999999"/>
        </svg>  
      </button>
      <img src="${book.image}" alt="${book.name}"/>
      <div class="carousel__cell__details">
        <button class="carousel__cell__details__close-button">
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99998 5.54187L1.20836 0.750244L-6.10352e-05 1.95866L4.79156 6.75029L-1.8537e-05 11.5419L1.2084 12.7503L5.99998 7.9587L10.7915 12.7502L11.9999 11.5418L7.2084 6.75029L12 1.9587L10.7916 0.750287L5.99998 5.54187Z" fill="#DDDDDD"/>
          </svg>
        </button>
        <span class="carousel__cell__details__available ${book.available ? "yes" : "no"}">${
        book.available ? "Available" : "Borrowed Out"
      }</span>
        <span class="carousel__cell__details__name">
          ${book?.name}
        </span>
        <span class="carousel__cell__details__text">
          ${book?.author}
        </span>
        <span class="carousel__cell__details__text">
         ${book?.year ? book.year : ""}
        </span>
        <span class="carousel__cell__details__genre">
          <b>Genre:</b> ${book?.categories.join(", ")}
        </span>
        <div class="carousel__cell__details__footer">
          <section>
            <span>Ratings: ${book.rating}</span>
            <svg width="72" height="11" viewBox="0 0 72 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="11">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H71.876V11H0V0Z" fill="white"/>
              </mask>
              <g mask="url(#mask0)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03867 0L7.91383 3.62102L12.0773 4.19917L9.058 7.01383L9.77311 11L6.03867 9.12863L2.30423 11L3.01933 7.01383L0 4.19917L4.17939 3.62102L6.03867 0Z" fill="#EBA430"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4139 0L22.289 3.62102L26.4525 4.19917L23.4332 7.01383L24.1483 11L20.4139 9.12863L16.6794 11L17.3945 7.01383L14.3752 4.19917L18.5546 3.62102L20.4139 0Z" fill="#EBA430"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.7891 0L36.6643 3.62102L40.8278 4.19917L37.8084 7.01383L38.5235 11L34.7891 9.12863L31.0547 11L31.7698 7.01383L28.7504 4.19917L32.9298 3.62102L34.7891 0Z" fill="#EBA430"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.1643 0L51.0394 3.62102L55.2029 4.19917L52.1836 7.01383L52.8987 11L49.1643 9.12863L45.4298 11L46.1449 7.01383L43.1256 4.19917L47.305 3.62102L49.1643 0Z" fill="#EBA430"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M63.5395 0L65.4147 3.62102L69.5782 4.19917L66.5589 7.01383L67.274 11L63.5395 9.12863L59.8051 11L60.5202 7.01383L57.5009 4.19917L61.6802 3.62102L63.5395 0Z" fill="#DDDDDD"/>
              </g>
            </svg>
          </section>
          <section>
            <div class="carousel__cell__details__footer__stats">
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41008 11C8.74665 11 9.0195 10.7324 9.0195 10.4022C9.0195 9.51523 8.75342 8.68925 8.29529 7.99685C8.87764 7.48512 9.64689 7.17392 10.4902 7.17392C12.3078 7.17392 13.7811 8.61926 13.7811 10.4022C13.7811 10.7324 14.054 11 14.3906 11C14.7272 11 15 10.7324 15 10.4022C15 7.95892 12.9809 5.97827 10.4902 5.97827C9.34305 5.97827 8.29589 6.39847 7.5 7.09054C6.70411 6.39847 5.65695 5.97827 4.50975 5.97827C2.01908 5.97827 0 7.95892 0 10.4022C0 10.7324 0.272849 11 0.609426 11C0.946002 11 1.21885 10.7324 1.21885 10.4022C1.21885 8.61926 2.69224 7.17392 4.50975 7.17392C5.35311 7.17392 6.12237 7.48512 6.70471 7.99684C6.24658 8.68924 5.9805 9.51523 5.9805 10.4022C5.9805 10.7324 6.25335 11 6.58992 11C6.9265 11 7.19935 10.7324 7.19935 10.4022C7.19935 9.92026 7.307 9.46299 7.5 9.05227C7.693 9.46299 7.80065 9.92026 7.80065 10.4022C7.80065 10.7324 8.0735 11 8.41008 11ZM4.50975 5.5C2.9615 5.5 1.70639 4.26878 1.70639 2.75C1.70639 1.23122 2.9615 0 4.50975 0C6.058 0 7.31311 1.23122 7.31311 2.75C7.31311 4.26878 6.058 5.5 4.50975 5.5ZM4.50975 4.30435C5.38485 4.30435 6.09426 3.60844 6.09426 2.75C6.09426 1.89156 5.38485 1.19565 4.50975 1.19565C3.63465 1.19565 2.92524 1.89156 2.92524 2.75C2.92524 3.60844 3.63465 4.30435 4.50975 4.30435ZM10.4902 4.30435C11.3653 4.30435 12.0748 3.60844 12.0748 2.75C12.0748 1.89156 11.3653 1.19565 10.4902 1.19565C9.61515 1.19565 8.90574 1.89156 8.90574 2.75C8.90574 3.60844 9.61515 4.30435 10.4902 4.30435ZM10.4902 5.5C8.942 5.5 7.68689 4.26878 7.68689 2.75C7.68689 1.23122 8.942 0 10.4902 0C12.0385 0 13.2936 1.23122 13.2936 2.75C13.2936 4.26878 12.0385 5.5 10.4902 5.5Z" fill="black"/>
              </svg>
              <svg width="518" height="462" viewBox="0 0 518 462" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M180.004 402.136L180.01 402.141L180.015 402.146C197.609 417.138 217.544 434.128 238.219 452.206C243.969 457.243 251.348 460.016 259 460.016C266.648 460.016 274.03 457.243 279.777 452.215C300.499 434.093 320.465 417.076 338.09 402.06L338.09 402.06L338.188 401.976C389.687 358.087 434.304 320.063 465.378 282.567C500.187 240.567 516.5 200.603 516.5 156.871C516.5 114.46 501.96 75.2742 475.49 46.5614L474.387 47.5781L475.49 46.5613C448.698 17.5033 411.925 1.5 371.973 1.5C342.079 1.5 314.691 10.9582 290.61 29.5829C278.966 38.5873 268.384 49.5147 259 62.1903C249.619 49.5145 239.034 38.5873 227.394 29.5831L227.394 29.583C203.313 10.9582 175.925 1.5 146.031 1.5C106.075 1.5 69.3059 17.5034 42.5144 46.5613L42.5143 46.5614C16.044 75.2742 1.5 114.46 1.5 156.871C1.5 200.603 17.8169 240.567 52.6263 282.57L53.7812 281.613L52.6263 282.57C83.7083 320.073 128.345 358.111 179.869 402.019L179.914 402.058L179.926 402.067L180.004 402.136ZM275.262 94.5391L276.55 95.3078C283.212 84.1459 294.551 68.24 310.789 55.6786C328.982 41.6108 349.556 34.4922 371.973 34.4922C402.623 34.4922 430.764 46.7205 451.233 68.923C472.019 91.4701 483.512 122.687 483.512 156.871C483.512 192.845 470.168 225.088 439.978 261.519C410.755 296.782 367.263 333.85 316.733 376.917L316.691 376.952C299.274 391.789 279.569 408.584 258.959 426.521C238.469 408.619 218.795 391.851 201.414 377.038L201.408 377.033L201.402 377.027L201.321 376.96C201.318 376.958 201.316 376.956 201.314 376.954C150.765 333.875 107.255 296.79 78.026 261.519L76.8711 262.477L78.026 261.519C47.8322 225.088 34.4883 192.845 34.4883 156.871C34.4883 122.687 45.9809 91.4701 66.7669 68.923C87.24 46.7204 115.377 34.4922 146.031 34.4922C168.444 34.4922 189.018 41.6109 207.211 55.6788C223.453 68.2401 234.792 84.1459 241.45 95.3075L241.45 95.3079C245.174 101.546 251.741 105.277 259 105.277C266.259 105.277 272.826 101.546 276.55 95.3079L275.262 94.5391Z" fill="black" stroke="black" stroke-width="3"/>
              </svg>
            </div>
            <div class="carousel__cell__details__footer__stats">
              <span>${book.sold}</span>
              <span>${book.likes}</span>
            </div>          
          </section>
        </div>
    </div>
    </div>
  `
    )
    .join("")}
  </div>
   `;

  return carousel;
};

export default createCarousel;

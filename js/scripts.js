const placeholderProductGrid = document.getElementById('product-grid');

function getProducts() {
  fetch('../data/products.json')
  .then((res) => res.json())
  .then((data) => {
    const templateProductGrid = `
      <div class="items__grid">
        <ul class="items__list">
        ${
          data.map((product, index) => {
            return (`
              <li class="items__item items__item--item-0${index + 1}"><a href="${product.url}" target="_blank"><span>${product.title}</span></a></li>
            `)
          }).join('')
        }
        </ul>
      </div>
    `;
    placeholderProductGrid.innerHTML = templateProductGrid;
  })
}

getProducts();
//  Hamburger menu
const navbarNav = document.querySelector(`.navbar-nav`);
document.querySelector(`#hamburger-menu`).onclick = () => {
  navbarNav.classList.toggle(`active`);
};

// Click anywhere outside the element to close
const BtnHamburger = document.querySelector(`#hamburger-menu`);
const BtnSearch = document.querySelector(`#search-button`);
const BtnShopping = document.querySelector('#shopping-cart-button');

document.addEventListener(`click`, function (event) {
  if (
    !BtnHamburger.contains(event.target) &&
    !navbarNav.contains(event.target)
  ) {
    navbarNav.classList.remove(`active`);
  }
  if (!BtnSearch.contains(event.target) && !searchForm.contains(event.target)) {
    searchForm.classList.remove(`active`);
  }
  if (
    !BtnShopping.contains(event.target) &&
    !shoppingCartModal.contains(event.target)
  ) {
    shoppingCartModal.classList.remove(`active`);
  }
});

//  For Search Bar
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector(`#search-box`);

document.querySelector(`#search-button`).onclick = (event) => {
  searchForm.classList.toggle(`active`);
  searchBox.focus();
};

const getProducts = async () => {
  const response = await fetch(`https://dummyjson.com/products`);
  const data = await response.json();
  return data.products;
};

// const renderTags = (item) => {
//   let tags = ``;
//   item.forEach((tag) => {
//     return `<div>${tag}</div>`;
//   });
// };

const renderProduct = (product) => {
  return `
    <div class="product">
      <div class="product-img-container">
        <img class="product-img" src=${product.images[0]} alt=${product.title} />
      </div>
      <h3 class="product-title">${product.title}</h3>
      <div class="product-info">
      <p class="product-brand">${product.brand}</p>
      <p class="product-category">${product.category}</p>
      </div>
      <p class="product-desc">${product.description}</p>
      <div class="product-detail">
        <p class="product-price">$<span class="product-nominal">${product.price}</span>
        </p>
        <p class="product-rating">${product.rating}/5</p>
      </div>
      </div>`;
};

function updateUI(items) {
  let products = ``;
  let limit = 15;
  items.forEach((product, i) => {
    if (i < limit) {
      return (products += renderProduct(product));
    }
  });
  const containerProduct = document.querySelector('.container-products');
  containerProduct.innerHTML = products;
}

async function renderUI() {
  const products = await getProducts();
  console.log(products);
  updateUI(products);
}

renderUI();

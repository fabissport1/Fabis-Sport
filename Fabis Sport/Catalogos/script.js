const productsPerPage = 10;
let currentPage = 1;

const products = [
    { img: "../Imagenes/Everlast negro.jpeg", brand: "Everlast", code: "EV001", price: 120 },
    { img: "../Imagenes/Everlast gris.jpeg", brand: "Everlast", code: "EV002", price: 90 },
    { img: "../Imagenes/Everlast negro blanco.jpeg", brand: "Everlast", code: "EV003", price: 150 },
    { img: "../Imagenes/Everlast plomo.jpeg", brand: "Everlast", code: "EV004", price: 80 },
    { img: "../Imagenes/Everlast plomo naranja.jpeg", brand: "Everlast", code: "EV005", price: 200 }
];

function displayProducts() {
    const container = document.getElementById("productContainer");
    container.innerHTML = "";

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    products.slice(start, end).forEach(p => {
        container.innerHTML += `
            <div class="product">
                <img src="${p.img}">
                <p><strong>${p.brand}</strong></p>
                <p>Código: ${p.code}</p>
                <p>$${p.price}</p>
            </div>
        `;
    });

    createPagination();
}

function createPagination() {
    const pages = Math.ceil(products.length / productsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= pages; i++) {
        pagination.innerHTML += `
            <button onclick="changePage(${i})">${i}</button>
        `;
    }
}

function changePage(page) {
    currentPage = page;
    displayProducts();
}

displayProducts();

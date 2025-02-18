const product = [
    { rasmi: "./images/kovrik.png", nomi: "Mars Rug", narxi: 100, qoldiq: 50 },
    { rasmi: "./images/stiker.png", nomi: "Stiker", narxi: 49, qoldiq: 11 },
    { rasmi: "./images/smartwatch.png", nomi: "Smart Watch", narxi: 899, qoldiq: 4 },
    { rasmi: "./images/keyboard.png", nomi: "Klavitura", narxi: 200, qoldiq: 20 },
    { rasmi: "./images/mouse.png", nomi: "Mouse", narxi: 150, qoldiq: 24 },
    { rasmi: "./images/airpods.png", nomi: "AirPods", narxi: 1299, qoldiq: 11 },
    { rasmi: "./images/powerbank.png", nomi: "Powerbank", narxi: 899, qoldiq: 5 },
    { rasmi: "./images/fleshka.png", nomi: "USB flash drive", narxi: 299, qoldiq: 21 },
    { rasmi: "./images/phone.png", nomi: "Smartphone", narxi: 3699, qoldiq: 2 },
    { rasmi: "./images/playstation.png", nomi: "PlayStation 5", narxi: 7499, qoldiq: 1 },
    { rasmi: "./images/yandex.png", nomi: "Yandex Station", narxi: 1999, qoldiq: 4 },
    { rasmi: "./images/planshet.png", nomi: "Planshet Samsung", narxi: 4999, qoldiq: 24 },

];

const productForm = document.querySelector("#product__form");
const productInput = document.querySelector("#product__input");
const productWrapper = document.querySelector("#product__list");

function renderShop(magazin) {
    productWrapper.innerHTML = "";
    productWrapper.innerHTML = magazin.map(obyektlar => 
        `
        <div class="box">
            <img src="${obyektlar.rasmi}" alt="${obyektlar.nomi}">
            <h3 id="Nomi">${obyektlar.nomi}</h3>
            <p id="white">Narxi: ${obyektlar.narxi}<img id="coinlaaaar"  src="./images/coin.png"></p>
            <p id="white">Qoldiq: ${obyektlar.qoldiq} ta mavjud</p>
            <button class="btn btn-primary" onclick="buyProduct(${obyektlar.narxi})">Sotib olish</button>
        </div>
        `
    ).join(""); 
}

renderShop(product);

productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inpQiymat = productInput.value.toLowerCase();
    const filterProduct = product.filter(item => item.nomi.toLowerCase().includes(inpQiymat));
    renderShop(filterProduct); 
});

function buyProduct(narxi) {
    const tasdiq = confirm(` Mahsulot narxi: ${narxi}coin. Sotib olmoqchimisiz?`);
    
    if (tasdiq) {
        alert("Sotib oldingiz! Rahmat!");
    } else {
        alert("Sotib olishdan voz kechdingiz!");
    }
}


const shopProdu = document.getElementById("shopProdu");
const verCarrito = document.getElementById("ver-carrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre: "Milanesa",
        precio: 1050,
        img: "./img/mila.png",
    },
    {
        id: 2,
        nombre: "Matambre",
        precio: 850,
        img: "./img/matambre.png",
    },
    {
        id: 3,
        nombre: "Hamburguesa",
        precio: 400,
        img:"./img/hamburguesa.png",
    },
    {
        id: 4,
        nombre: "Bastones",
        precio: 750,
        img: "./img/bastones.png",
    },
];

let carrito = [];

productos.forEach((product) =>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}"> 
        <h3>${product.nombre}</h3> 
        <p class= "valor">$ ${product.precio}</p> 
    `;

    shopProdu.append(content);
    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", ()=>{
        carrito.push({
            id: product.id,
            img:product.img,
            nombre: product.nombre,
            precio: product.precio,
        })
    });

});

verCarrito.addEventListener("click", () =>{
    const modalHeader = document.createElement("div");
    modalHeader.className ="modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "Eliminar";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {

    })

    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src =${product.img}">
    <h3>${product.nombre}</h3>
    <p>$ ${product.precio} <p>
    `;

    modalContainer.append(carritoContent);

    const total = carrito.reduce ((acc, el)=> acc + el.precio, 0);
});
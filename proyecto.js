const shopProdu = document.getElementById("shopProdu");

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
});


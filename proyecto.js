const shopProdu = document.getElementById("shopProdu");
const verCarrito = document.getElementById("ver-carrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre: "Milanesas de pollo, 1 kg",
        precio: 1050,
        img: "./img/mila.png",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Matambre de carne 1 u.",
        precio: 850,
        img: "./img/matambre.png",
        cantidad:1,
    },
    {
        id: 3,
        nombre: "Hamburguesa de carne 1 kg",
        precio: 400,
        img:"./img/hamburguesa.png",
        cantidad:1,
    },
    {
        id: 4,
        nombre: "Bastones de muzzarella 1 kg",
        precio: 750,
        img: "./img/bastones.png",
        cantidad:1,
    },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su producto se agrego al carrito',
            showConfirmButton: false,
            timer: 1500
        })
    const repeat = carrito.some((repetir)=> repetir.id === product.id);
    if (repeat){
        carrito.map((prod)=>{
            if(prod.id===product.id){
                prod.cantidad++
            }
        });
    }else{
        carrito.push({
            id: product.id,
            img:product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        guardado();
    };
});
});

const elegirCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className ="modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Productos elegidos:</h1>
    `;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "Cerrar";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () =>{
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <p>${product.nombre}</p>
        <p>$ ${product.precio}<p>
        <p> ${product.cantidad}<p>

        `;

    modalContainer.append(carritoContent);

    let eliminar = document.createElement("span");

    eliminar.innerText = "❌";
    eliminar.className= "borrar";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click",eliminarProducto);

});

    const total = carrito.reduce ((acc, el)=> acc + el.precio * el.cantidad , 0);

    const totalfinal = document.createElement ("div");
    totalfinal.className = "total-content";
    totalfinal.innerHTML =`Total: $ ${total}`;
    modalContainer.append(totalfinal);
};

verCarrito.addEventListener("click", elegirCarrito);

const eliminarProducto = () =>{
    const foundId =carrito.find((element)=> element.id);

    carrito= carrito.filter((carritoId) =>{
        return carritoId !== foundId;
    });
    guardado();
    elegirCarrito();
};


const guardado = () =>{
    localStorage.setItem("carrito",JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito"));


let api_key = "8ec2d2ccd6a71ed2b32ba11beafe4215";


navigator.geolocation.getCurrentPosition(showPosition)


function showPosition(position){


    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado= document.getElementById('iconoAnimado')

    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&lang=es&units=metric&appid="+api_key)
        .then(response=>response.json())
        .then(data=>{
            ubicacion.textContent = data.name 

            switch (data.weather[0].main) {
                case 'Thunderstorm':
                    iconoAnimado.src='animated/thunder.svg'
                    console.log('TORMENTA');
                break;
                case 'Drizzle':
                iconoAnimado.src='animated/rainy-2.svg'
                console.log('LLOVIZNA');
                break;
                case 'Rain':
                    iconoAnimado.src='animated/rainy-7.svg'
                    console.log('LLUVIA');
                break;
                case 'Clear': 
                    iconoAnimado.src='animated/day.svg'
                    console.log('LIMPIO');
                break;
                case 'Clouds':
                    iconoAnimado.src='animated/cloudy-day-1.svg'
                    console.log('NUBES');
                break;  
                default:
                iconoAnimado.src='animated/cloudy-day-1.svg'
                console.log('por defecto');
            }
    })
}

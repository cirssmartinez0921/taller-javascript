
let productos = [
    {nombre: "arroz", precio: 2},
    {nombre: "frijol", precio: 10},
    {nombre: "arveja", precio: 15},
    {nombre: "garbanzo", precio: 7},
    {nombre: "maiz", precio: 9},   
];

function productosBaratos(productos) {
    let nombreProductos = [];

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];

        if (producto.precio >= 5 && producto.precio <= 10) {
            nombreProductos.push (producto.nombre);            
        }
    }
    return nombreProductos;
}

let listaProductosBaratos = productosBaratos (productos);
console.log(listaProductosBaratos);
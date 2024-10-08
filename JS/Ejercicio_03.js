
// Objetos
const bg ="linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1)33%,rgba(0,212,255,1)86%)";
const style_console=`background: ${bg}; color:white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`



//Variables independientes
console.log("%c1.-Variables Independientes", style_console);


//Declaramos valores independientes relacionadas a un producto
 
let Producto_Nombre= "AstroMaster 130EQ Newtonian Telescope"
let Producto_Marca= "Celestron"
let Producto_Modelo="Reflector Telescope for Beginners"
let Producto_Precio= 5400.70;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("Tuf707e-dfsdfs")
let Producto_Stock= 12;
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categoria=["Instrumento", "Astronomia", "Catadioptrico","Promociones de Celestron", "Mas caros pero buenos"];

console.log(`Nombre del producto: ${Producto_Nombre}, y es de tipo de dato: ${typeof(Producto_Nombre)}>
Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
Modelo:${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
Precio:${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>
Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
Imagen:${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
Categorias: ${Producto_Categoria}, Tipo de Dato <${typeof(Producto_Categoria)}>

`);


console.log("En caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresion anterior");

console.log(Producto_SKU);
console.log(typeof(Producto_SKU));
// Ahora lo declaramos como un objeto
console.log("%c2.-Objeto", style_console);

let Producto = {
ID:100,
Nombre: "Tornamesa",
Marca:"Piooner",
Modelo:"Ddj-rev1 Golden",
Nombre:"Mezcladora",
Precio: 6600.50,
Disponibilidad:false,
SKU: "DZ20210505",
Stock: 0,
Barcode:null,
Categoria:["Electronica"]

}
console.table(Producto);


console.log("Accediendo a propiedades especificas del Producto")
console.log(`Nombre Completo del Producto: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);

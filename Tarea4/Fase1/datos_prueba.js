#Este archivo contiene los datos de prueba en formato JavaScript para insertar en MongoDB.


const nombresProductos = [
  "Camiseta Blanca", "Pantalones Jeans", "Zapatos Deportivos", "Bolsa de Mano", "Reloj de Pulsera",
  "Gafas de Sol", "Sombrero de Paja", "Bufanda de Lana", "Cartera de Cuero", "Corbata de Seda",
  "Vestido de Verano", "Abrigo de Invierno", "Chaqueta de Cuero", "Sandalias de Playa", "Botas de Montaña",
  "Traje de Baño", "Camisa de Algodón", "Pijama de Seda", "Guantes de Invierno", "Pantalones Cortos",
  "Falda de Tela", "Sudadera con Capucha", "Chaleco de Plumas", "Camiseta de Deporte", "Jersey de Lana",
  "Calcetines de Algodón", "Zapatos de Cuero", "Cinturón de Piel", "Sombrero de Invierno", "Gorra de Béisbol",
  "Polo de Manga Corta", "Bikini", "Kimono", "Traje de Noche", "Uniforme Escolar", "Botines de Cuero",
  "Pijama de Algodón", "Pantuflas de Casa", "Chancletas de Goma", "Falda Larga", "Abrigo de Lluvia",
  "Traje Formal", "Bata de Baño", "Chaqueta de Invierno", "Bufanda de Seda", "Guantes de Cuero",
  "Mocasines", "Sandalias de Cuero", "Pantalones de Lino", "Chaleco de Lana", "Gorra de Visera",
  "Camisa de Seda", "Pantalones de Deporte", "Leggings", "Zapatos de Tacón", "Mono de Trabajo",
  "Bata de Casa", "Chaleco de Seguridad", "Camiseta de Manga Larga", "Traje de Neopreno",
  "Falda Corta", "Chal de Lana", "Alpargatas", "Zapatos de Baile", "Uniforme de Trabajo",
  "Corbata de Lazo", "Guantes de Algodón", "Boina", "Bufanda de Cachemira", "Sombrero de Vaquero",
  "Botas de Invierno", "Chaleco de Tela", "Camiseta de Tirantes", "Polo de Manga Larga", "Camisa de Franela",
  "Pantalones Vaqueros", "Zapatos de Vestir", "Zapatos con Plataforma", "Calcetines de Lana", "Abrigo de Piel",
  "Bufanda de Algodón", "Sombrero de Tela", "Chaleco de Cuero", "Sandalias de Tela", "Botas de Lluvia",
  "Camisa Hawaiana", "Camiseta de Algodón", "Chaqueta de Traje", "Sombrero de Paja", "Camiseta de Manga Corta",
  "Corbata de Punto", "Cinturón de Tela", "Pantalones de Pana", "Guantes de Tela", "Pijama de Lana",
  "Traje de Buceo", "Camisa de Manga Corta", "Zapatos con Tacón", "Camiseta de Rayas", "Chaleco de Punto"
];

const productos = [];

for (let i = 0; i < 100; i++) {
  productos.push({
    nombre: nombresProductos[i],
    descripcion: `Descripción del ${nombresProductos[i]}`,
    precio: Math.floor(Math.random() * 1000) + 1,
    categoria: Math.floor(Math.random() * 10) + 1,
    stock: Math.floor(Math.random() * 100) + 1
  });
}

module.exports = productos;

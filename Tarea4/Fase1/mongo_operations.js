#Este archivo contiene el código para insertar los datos, así como algunas consultas que puedes realizar en tu base de datos de productos.

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'tienda_online';

async function main() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  console.log("Conectado a MongoDB");

  const db = client.db(dbName);
  const productosCollection = db.collection('productos');

  // Insertar los productos de prueba
  const productos = require('./datos_prueba.js');
  await productosCollection.insertMany(productos);
  console.log("Productos insertados");

  // Consultas Básicas
  const producto = await productosCollection.findOne({ nombre: "Camiseta Blanca" });
  console.log("Producto encontrado: ", producto);

  // Consultas con filtros
  const productosConStock = await productosCollection.find({ stock: { $gt: 10 } }).toArray();
  console.log("Productos con más de 10 en stock: ", productosConStock);

  // Agregación: Obtener el promedio de precios
  const promedioPrecio = await productosCollection.aggregate([
    { $group: { _id: null, promedioPrecio: { $avg: "$precio" } } }
  ]).toArray();
  console.log("Promedio de precios: ", promedioPrecio);

  await client.close();
}

main().catch(console.error);

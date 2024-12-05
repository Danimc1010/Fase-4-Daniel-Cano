# Diseño de la Base de Datos en MongoDB

El diseño de la base de datos para este caso de uso se enfoca en productos para una tienda en línea.

## Colección `productos`

- **Campos**:
  - `nombre`: Nombre del producto (cadena de texto).
  - `descripcion`: Descripción del producto (cadena de texto).
  - `precio`: Precio del producto (decimal).
  - `categoria`: Categoría del producto (entero, de 1 a 10).
  - `stock`: Cantidad disponible del producto (entero).

La colección `productos` almacena la información esencial para los productos disponibles en la tienda.

---

### 6. **documentacion/consultas.md** (Explicación de las Consultas)

```markdown
# Explicación de las Consultas en MongoDB

## Consultas Básicas

### Inserción
Se insertan 100 productos generados aleatoriamente en la colección `productos`.

### Selección
Se selecciona un producto específico basado en su nombre (por ejemplo, "Camiseta Blanca").

### Consultas con Filtros
Se obtienen productos con un stock superior a 10.

### Agregación
Se calcula el promedio de precios de todos los productos.

---

Con esta estructura, el repositorio se organiza para que puedas cargar los datos, realizar consultas y documentar todo el proceso.

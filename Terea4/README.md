# Fase 1: MongoDB

Este repositorio contiene el trabajo para la Fase 1 de MongoDB. En esta fase, se desarrolló una base de datos utilizando MongoDB, que incluye el diseño del esquema, la implementación con datos de prueba y consultas, así como la documentación sobre el diseño y las operaciones realizadas.

## Estructura del Repositorio

- `diseño_base_de_datos/`: Contiene el archivo JSON con el esquema de la base de datos en MongoDB.
- `implementacion/`: Incluye el archivo con el código de las operaciones MongoDB, así como un conjunto de datos de prueba.
- `documentacion/`: Documentación explicando el diseño de la base de datos y las consultas implementadas.

## Instrucciones

1. Para implementar la base de datos en MongoDB, puedes usar el archivo `mongo_operations.js`.
2. Los datos de prueba están en `datos_prueba.json`, puedes cargarlos en tu base de datos de MongoDB.
3. Revisa la documentación en `documentacion/` para más detalles sobre el diseño y las consultas realizadas.

# Fase 2 Apache HBase

Este repositorio contiene la implementación de la segunda fase del proyecto de Apache HBase, donde se trabaja con un conjunto de datos sobre los beneficiarios de "Más Familias en Acción". Este repositorio incluye instrucciones para la instalación de HBase, configuración, carga de datos y ejecución de consultas.

## Descripción del Proyecto

En este proyecto se utilizará Apache HBase para almacenar y consultar los datos de beneficiarios. Utilizamos HBase para su capacidad de escalar grandes volúmenes de datos, y a través de Python interactuamos con la base de datos utilizando la librería `happybase`.

## Conjunto de Datos

El conjunto de datos utilizado es el de **Beneficiarios_familias_accion**, el cual contiene información sobre los beneficiarios de "Más Familias en Acción", como nombres, identificadores, ubicación, entre otros. 

## Estructura de la Tabla en HBase

### Familias de Columnas:
1. **informacion_basica**
   - Columnas: `nombre`, `direccion`, `municipio`, `estrato`
2. **ingreso_familiar**
   - Columnas: `ingreso_mensual`
3. **estado_familia**
   - Columnas: `estado`, `fecha_registro`

### Clave Primaria:
- `ID Beneficiario` (clave única para cada fila)

## Requisitos

- HBase instalado y funcionando.
- Python 3.x.
- Dependencias: `happybase`, `pandas`.

Puedes instalar las dependencias con el siguiente comando:

```bash
pip install -r requirements.txt

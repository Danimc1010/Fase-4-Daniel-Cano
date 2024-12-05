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

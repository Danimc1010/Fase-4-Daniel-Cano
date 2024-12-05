test_hbase.py: Conecta a HBase, verifica si la tabla beneficiarios existe y la crea con las familias de columnas informacion_basica, ingreso_familiar y estado_familia.
cargar_datos.py: Lee el archivo CSV y carga sus datos en HBase. Cada fila representa un beneficiario identificado por una clave única (ID Beneficiario).
consultas.py: Proporciona herramientas para consultar los datos, como:
Listar beneficiarios de un municipio.
Calcular ingresos promedio por estrato.
Obtener beneficiarios activos registrados en un rango de fechas.

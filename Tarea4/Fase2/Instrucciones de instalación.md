1. Configuración de la Máquina Virtual
Conéctate a la máquina virtual y asegúrate de tener configurado HBase siguiendo los pasos mencionados en el instructivo de instalación.

2. Instalación de HBase
Descarga e instala HBase.
Configura las variables de entorno y las configuraciones necesarias en los archivos ~/.bashrc, hbase-site.xml y hbase-env.sh.
3. Instalación de Dependencias de Python
Instala la librería happybase para interactuar con HBase:

bash
Copiar código
pip install happybase
4. Cargar el Conjunto de Datos a HBase
Para cargar el conjunto de datos, utiliza el script cargar_datos.py, que carga el archivo CSV en la tabla de HBase.

5. Realizar Consultas
Utiliza el script consultas.py para realizar consultas y análisis sobre los datos cargados. Este script permite ejecutar análisis como:

Coches con precios menores a un valor específico.
Análisis de propietarios de vehículos.
Cálculo del precio promedio por tipo de combustible, entre otros.

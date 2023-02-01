# tuGerente-test
test técnico de tuGerente


## Consignas

✅ Las reservas pueden tener 3 estados: Pendiente, Pagado y Eliminado. 
✅ Los datos a almacenar para la reserva son: los detalles del cuarto reservado, los días de estadía, los datos de facturación e identificación del cliente, el monto pagado y el método de pago. 
✅ Debes proponer los endpoints a crearse para tratar de cubrir el flujo normal de operación de reserva y explicar por qué. Luego que tengas ya todo el código.
✅ Crear un repositorio para la entrega del código y en un readme del repositorio la justificación de los endpoints creados.
✅ El proyecto debe correrse en un contenedor de docker, se puede usar cualquier gestor de base de datos relacionales.
✅ También debes adjuntar en el repositorio, un archivo con ejemplos de consumo de la API para Postman.


## Endpoints

-**GET reserva/**
  - devuelve la lista completas de las reservas.
-**GET reserva/:id**
  - devuelve una reserva especificada con el ID con mas detalles.
-**POST reserva/**
  - permite cargar una nueva reserva en formato JSON.
-**DELETE reserva/:id**
  - elimina la reserva especificada con el ID.


## Base de datos
![drawSQL-tugerente-test-export-2023-02-01](https://user-images.githubusercontent.com/30692558/216149834-6ff1492e-b7dc-4ad0-b372-46b981dcc23f.png)


## Ejemplos de uso de endpoints por Postman

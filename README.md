# E-commerce estilo galería de arte

![React badget](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React router badget](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap badget](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Firebase badget](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![CSS badget](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![JS badget](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=blacke)
![Build Pass](https://travis-ci.org/klugjo/hexo-autolinker.svg?branch=master)

![Logo](https://i.postimg.cc/cL0jLDgD/111.png)

# Presentación y uso

Este proyecto fue realizado como entrega final del curso de React JS realizado en [CoderHouse](https://www.coderhouse.com/) posee funcionalidad de e-commerce en el cual se puede visualizar la lista completa de productos en la página principal y se puede filtrar por categoría utilizando los links de la parte superior derecha.  

Cada item tiene un botón que lleva a una vista detallada del producto con la posibilidad de agregar hasta 10 unidades del mismo al carrito y luego si se desea se puede regresar al listado principal para seguir explorando productos o se puede proceder a la vista del contenido del carrito en donde podremos ver el precio total de nuestra compra, borrar productos previamente agregados o finalizar la compra y recibir un detalle de nuestros datos con un numero de id único que representa nuestra orden de compra.  

Al clickear el botón terminar se vacía el carrito y se vuelve al listado principal de productos para continuar navegando.

![Screenshot1](https://i.lensdump.com/i/gLZnUH.md.jpg)
![Screenshot2](https://i1.lensdump.com/i/gLZLZ1.md.jpg)
![Screenshot3](https://i2.lensdump.com/i/gLZMmc.md.jpg)
![Screenshot4](https://i3.lensdump.com/i/gLZYuK.md.jpg)
![Screenshot5](https://i.lensdump.com/i/gLZuAZ.md.jpg)
![Screenshot6](https://i1.lensdump.com/i/gLZDQP.md.jpg)

&nbsp;

## Librerías utilizadas

* Bootstrap
* Firebase
* React-router-dom
* React-icons
* React-spring

>### React-icons
Una muy completa librería de iconos en formato vectorial para todos los usos. 
>### React-spring
Librería de animaciones usada para hacer un efecto básico de fade-in y dar transiciones más suaves en la navegación del sitio.

&nbsp;

## Instalación

* Clonamos y descargamos el proyecto desde Github.
* Usando la línea de comandos dentro de la carpeta del proyecto ejecutamos `npm start` para testear el sitio.
* Ejecutamos `npm run build` para compilarlo y dejarlo listo para el deploy.

&nbsp;

# Componentes

## ItemListContainer

En este componente se obtiene la lista completa o filtrada por categoría de los productos desde la base de datos, según se esté en una ruta raíz o en la ruta de category, esto se logra utilizando react-router-dom.

### ItemList

Aquí se itera el array de productos obtenidos previamente y se renderizan en pantalla en forma de tarjetas utilizando el componente `Item`. También posee un mensaje de error en caso de no haber podido comunicarse con la base de datos y utiliza el componente `Loading` durante el proceso de carga.

&nbsp;

## ItemDetailContainer

Cumple una función similar a `ItemListContainer` pero sin necesidad de iterar ya que se obtiene un único producto mediante su ID, el cual se renderiza en una vista más detallada utilizando `ItemDetail` 

### ItemDetail

A diferencia de `Item` este componente cambia si es llamado desde el `ItemDetailContainer` o desde el `Cart` para hacerlo reutilizable, también hace uso de `ItemCount` para agregar o quitar unidades del producto, agregar al carrito, ir hacia el carrito o volver al listado principal. Cuando es llamado desde `Cart` permite remover el producto del carro.

&nbsp;

## cartContext

Recibe todos los datos de los productos que se van agregando al carrito, genera un array con los mismos y una variable con la cantidad total de ítems para ser mostrado por `CartWidget`. También posee funciones para remover elementos del carrito y vaciarlo.
Por último espeja el contenido de las variables en el local storage para dar funcionalidad de carrito persistente.

## Cart

El `Cart` procesa la información del contexto e itera sobre el array `cart` para mostrar al usuario todo lo que se agregó al carrito, da la opción de vaciar el mismo, remover productos o finalizar la compra.
Al finalizar la compra muestra un formulario donde el usuario debe ingresar sus datos el cual posee una verificación básica para evitar que se envíen los campos vacíos y luego con esta información genera una orden la cual muestra en pantalla añadiendo un ID único generado por `firebase`. Al pulsar el boton terminar se vacía el carro, se limpia la variable de id generada anteriormente y se redirige al listado principal para poder hacer una nueva compra.

## Loading

Renderiza una animación de carga y por props recibe el mensaje que se quiera mostrar mientras corre dicha animación.

&nbsp;

---

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GTomasel)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabrieltomasel/)

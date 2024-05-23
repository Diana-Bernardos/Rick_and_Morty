<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 -->

 El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

Para ello primero hemos clonado el repositorio dado por Adalab , y he instalado las dependencias correspondientes para el desarollo, ademas de obtener los datos de los personajes de la API.

El codigo se compone de varios componentes :

*App.js
Este es el componente principal de la aplicación. Maneja la obtención de datos, el filtrado, el ordenamiento y el enrutamiento.

*CharacterList.js
Este componente muestra la lista de personajes filtrados por nombre y especie.

*CharacterDetail.js
Este componente muestra información detallada sobre un personaje específico.

*Filters.js
Este componente contiene el campo de entrada para filtrar personajes por nombre.

*Species.js
Este componente contiene un menú desplegable para filtrar personajes por especie.

*Header.js
Este componente muestra el encabezado de la aplicación.

El funcionamiento es muy sencillo y facil de manejar ademas de tener un diseño muy llamativo .

1 -La constante filteredData filtra los personajes basándose en el nombre y la especie seleccionada. 

2 -El componente Routes de react-router-dom maneja el enrutamiento. Define rutas para la página principal y la página de detalle de personajes.

3 -Cuando se selecciona un personaje, el componente CharacterDetail muestra información detallada sobre ese personaje.

Siguiendo estos pasos, puedes filtrar y ordenar personajes fácilmente en una aplicación React. La estructura del código es sencilla y los componentes están diseñados para ser reutilizables y fáciles de entender.



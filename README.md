# GitHub Users

### Descripción del proyecto
El ejercicio solicitaba mostrar motrar usuarios de GitHub de distintas formas, las reglas eran:

* Obtén una lista inicial de usuarios de la API de GitHub Users.
* Mostrar los usuarios en una lista con sus nombres y avatares.
* Implementar un buscador que permita filtrar los usuarios haciendo peticiones a la API por nombre. (con un boton de busqueda que dispare el request)
* Cada usuario debe tener un enlace a una página de detalle.
* Poder poner como favorito los usuarios (sin necesidad de persistir)

> ### ⚠️ Nota
> Este proyecto contiene una KEY por tiempo limitado, la key fue colocada porque la api de github me dejo sin solicitudes no autenticadas. Esta key será borrada el sabado 12-10-2024

Para realizarla el ejercicio decidí utilizar **[Next.js](https://nextjs.org/docs/pages)** junto con sus **[Hooks](https://react.dev/reference/react)** y **[TypeScript]https://www.typescriptlang.org/);** también utilicé patrones de diseño tales como:

* Stateful / Stateless
* Componentización
* Context API
* Hooks
* Compound Components
* Controlled Components
* Lifting State Up

### Justificacion de librerias

| Libreria | Justificación |
|--------------|--------------|
| **[Axios](https://axios-http.com/)** | Velocidad de desarrollo y mejor legibilidad |

### Inicio del proyecto

Se deben instalar las dependencias con:

```
npm i
```
luego se debe levantar el proyecto con:
```
npm run dev
```

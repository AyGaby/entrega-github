# GitHub Search App

Esta aplicación web permite a los usuarios buscar perfiles de usuarios y repositorios en GitHub. Utiliza la API de GitHub para recuperar datos en tiempo real y mostrarlos a los usuarios.

---

# Tecnologías Utilizadas

- React: La aplicación está construida utilizando React, una popular biblioteca de JavaScript para construir interfaces de usuario.

- GitHub API: La aplicación utiliza la API pública de GitHub para recuperar datos sobre usuarios y repositorios.

- Estilos: Los estilos están definidos en archivos CSS, lo que permite un diseño limpio y fácilmente personalizable.

# Reporte de Problemas y Soluciones

## !!Problema:

Al intentar realizar el push de mi aplicación, me encontré con un error persistente que provocaba un navegador en blanco y una serie de mensajes de error en la consola:

```
App.jsx:42 Error fetching data: Error: GitHub API request failed: at fetchData (App.jsx:26:13) at async handleSearch (App.jsx:36:24)
```

## Investigación:

Tras investigar en línea y consultar con el Profesor Roberto, identifiqué que el problema estaba relacionado con la solicitud a la API de GitHub. El profesor sugirió que podría haber un problema en el manejo de Git, posiblemente causando una reversión a la versión anterior cada vez que intentaba hacer push.

## Solución Temporal:

La única solución que encontré para hacer que la aplicación funcionara fue descargar un nuevo token de GitHub, reemplazar el anterior y reiniciar el servidor. Esto permitió que la aplicación funcionara correctamente, como se muestra en el video adjunto. Sin embargo, esta solución temporal no resuelve el problema subyacente de la reversión al intentar hacer push nuevamente.

## Limitaciones y Próximos Pasos:

A pesar de que la aplicación está funcional y he proporcionado evidencia en forma de este video, enfrento limitaciones de tiempo debido a la fecha límite de entrega. No he tenido el tiempo suficiente para investigar y resolver completamente el problema subyacente en el manejo de Git que está causando esta situación.

## Agradecimientos:

Agradezco su comprensión y apoyo durante este proceso. Estoy dispuesto a colaborar y aprender más sobre cómo abordar este problema de manera efectiva para futuros proyectos.

¡Gracias por su tiempo y consideración!

---

[Link al video para ver la app en funcionamiento 🖱](https://youtu.be/_9GUzAnGHH4)

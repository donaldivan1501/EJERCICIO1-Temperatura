# Control de temperatura

Ejercicio 1 de Programación de Aplicaciones Móviles.

## Funcionamiento

- Temperatura inicial: **20 °C**, guardada con `useState`.
- Cada botón modifica el valor en 1 °C.
- Los límites se protegen con `Math.min` y `Math.max`: **10 a 30 °C**.
- Los botones se deshabilitan al llegar al límite correspondiente.

| Temperatura | Mensaje |
| --- | --- |
| 10 a 17 °C | Ambiente frío |
| 18 a 24 °C | Temperatura agradable |
| 25 a 30 °C | Ambiente caliente |

## Archivos principales

- `src/components/ControlTemperatura.tsx`: estado, acciones e interfaz.
- `src/App.tsx`: muestra el componente.

## Para explicar el ejercicio

`useState(20)` entrega el valor actual y la función que lo modifica. Las funciones de los botones usan la forma `setTemperatura(actual => ...)`, por lo que calculan el nuevo valor a partir del estado más reciente. Al cambiar el estado, React vuelve a renderizar el número, el mensaje y la barra. El mensaje se deriva de la temperatura, así que no necesita otro estado.

## Ejecutar

Abre esta carpeta en Visual Studio Code. En una terminal de tipo **Command Prompt (CMD)** ejecuta:

```bat
npm.cmd install
npm.cmd run dev
```

Abre la dirección que muestra Vite. Para detenerlo, pulsa Ctrl+C. Para comprobar TypeScript y generar la versión de producción:

```bat
npm.cmd run build
```

Requisito: Node.js 22.12 o superior de una rama compatible (por ejemplo, Node 22 o 24). Vite también admite Node 20.19+. Cada proyecto tiene sus propias dependencias y se puede ejecutar de forma independiente.

## Tecnologías

React 19, Vite 7, TypeScript y Tailwind CSS 4. Tailwind está integrado en `vite.config.ts` mediante `@tailwindcss/vite`; `src/index.css` contiene `@import "tailwindcss";`.

El estado vive en memoria: recargar la página restaura los valores iniciales. Todos los datos son simulados.

## Referencias

- Guía de clase: **02 - EJERCICIOS - React.pdf**.
- [Inicio con Vite](https://vite.dev/guide/).
- [Tailwind CSS con Vite](https://tailwindcss.com/docs/installation/using-vite).

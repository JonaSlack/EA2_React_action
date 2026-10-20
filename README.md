# 🎮 LevelUp Store — Migración a React + Vite

**Proyecto académico** basado en el sitio HTML/CSS/JavaScript original: https://github.com/JonaSlack/version_final

Esta versión reconstruye la interfaz en componentes React, sin usar archivos HTML individuales para cada pantalla ni manipulación manual del DOM. Respeta el catálogo de 12 juegos, los precios y la línea visual oscura/morada del proyecto de referencia.

## Requisitos

- Node.js LTS moderno (recomendado **22.12+**, comprobar la versión requerida por Vite en `npm install`).
- npm, Visual Studio Code y conexión a Internet para instalar las dependencias.
- Para las pruebas de navegador: Chromium instalado mediante Playwright.

## Comenzar desde cero

1. Descomprime el ZIP **LevelUp_Store_React.zip**.
2. Abre en VS Code la carpeta **LevelUp_Store_React**, la que contiene `package.json`.
3. Abre Terminal → Nuevo terminal y ejecuta:

```bash
npm install
npm run dev
```

4. Abre la URL que indique Vite, normalmente **http://localhost:5173/**.

**Importante:** No tienes que ejecutar `npm create vite@latest`: este ZIP **ya es** el proyecto React. No se incluye `node_modules` para ahorrar espacio.

## Recorrido sugerido

1. `/` — página de inicio y juegos destacados.
2. `/catalogo` — búsqueda y filtros por plataforma / ofertas.
3. `/producto/minecraft` — ficha usando `useParams`.
4. Agrega productos y abre `/carrito` — prueba cantidades, eliminar y totales.
5. Actualiza el navegador — el carrito permanece gracias a `localStorage`.
6. Entra a `/checkout` — te enviará a `/login` si no hay sesión.
7. Login educativo con **mario / 1234** — usuario en `sessionStorage`.
8. Vuelve a `/checkout` — formulario de pedido simulado. No hay pagos reales.
9. `/registro` — registro local únicamente con datos ficticios.
10. `/contacto` y `/asistente` — formulario demo y panel Gemini con API Key propia.

## Comandos de pruebas

**Unitarias y de componentes (Vitest + Testing Library + JSDOM)**

```bash
npm run test:run
```

**Chromium real en modo navegador (Vitest Browser + Playwright)**

```bash
npx playwright install chromium
npm run test:browser:run
```

**Modo observación**

```bash
npm run test
npm run test:browser
```

**Pruebas básicas independientes de npm (Node nativo):**

```bash
node --test src/tests/cart.node.test.js
```

**Generar compilación para despliegue:**

```bash
npm run build
npm run preview
```

Si necesitas ver la ventana Chromium en vez de ejecutarla sin interfaz, cambia `headless: true` por `headless: false` en `vitest.browser.config.js`.

## Conceptos de la guía Duoc presentes

| Concepto | Dónde se aplica |
|---|---|
| JSX y componentes | `src/components` y `src/pages` |
| Props | `ListaProductos` → `Producto`; `ProtectedRoute` recibe `children` |
| `map()` / `filter()` | Catálogo y carrito |
| `find()` / spread | `src/utils/carrito.js` |
| `reduce()` | Unidades y total en `src/utils/carrito.js` |
| Eventos (`onClick`, `onChange`) | Botones, buscador y formularios |
| `useState` | `TiendaContext`, filtros y formularios |
| `useEffect` | Guardado de carrito en localStorage |
| React Bootstrap | `Card` y `Button` en `Producto.jsx` y CSS Bootstrap global |
| React Router y `useParams` | `src/App.jsx`, `DetalleProducto.jsx` |
| `useNavigate` | Login, registro y cierre de sesión |
| ProtectedRoute | Acceso al checkout |
| `localStorage` | Persistencia de carrito y pedidos demo |
| `sessionStorage` | Sesión educativa |
| Vitest / Testing Library | Archivos `*.test.jsx` / `*.test.js` |
| Playwright / Chromium | Archivos `*.browser.test.jsx` |

## Advertencias y límites

- **No hay backend, pagos ni envío real.** El checkout valida los datos y guarda un pedido simulado en este navegador.
- **No ingreses contraseñas ni datos personales reales.** Las cuentas registradas en la demostración se guardan en `localStorage` sin protección de servidor; las claves reales deben gestionarse siempre desde backend seguro.
- La página de contacto **no envía correos**: demuestra formularios controlados con React.
- El asistente de Gemini requiere una API Key propia y acceso a Google; la clave queda en el estado de la página, no se guarda en el proyecto. Para producción, llamar a Gemini desde un backend, no exponer la clave al navegador.
- Las **imágenes originales** de los juegos se consultan directamente desde el repositorio público de GitHub, por lo que requieren conexión y que sigan disponibles. Si fallan, se verá un marcador gráfico con un emoji.
- La web original mostraba accesos a secciones de distinta etapa; esta entrega incluye las pantallas principales de tienda y los flujos explicados en las guías, no un backend fullstack.

## Créditos

Proyecto académico de migración a React tomando como base el repositorio `JonaSlack/version_final`. Se mantienen títulos, identificadores y precios referenciales del catálogo. No está asociado comercialmente a las marcas de videojuegos.

## Pruebas separadas

- `npm run test:run`: pruebas de React con Vitest (excluye `*.node.test.js`).
- `npm run test:node`: pruebas de lógica pura con el runner de Node.js.
- `npm run test:browser:run`: pruebas de Chromium con Playwright (después de `npx playwright install chromium`).


## Publicación en GitHub Pages

Consulta [DESPLIEGUE_GITHUB.md](DESPLIEGUE_GITHUB.md). Incluye un workflow que ejecuta pruebas, compila con Vite y publica `dist` automáticamente.

# Guía de defensa — LevelUp Store en React

## Diferencias frente al proyecto HTML original

- Antes teníamos `index.html`, `catalogo.html`, `carrito.html`, `producto.html`, `login.html`, `registro.html`, `contacto.html` y `asistente.html` como páginas separadas. En React hay **un `index.html`** y las páginas se eligen con **React Router**.
- Antes había `document.querySelector`, `addEventListener` y `innerHTML`. Ahora React administra el DOM a partir de **JSX, Props, State y eventos declarativos**.
- Antes `datos-juegos.js` dejaba el catálogo en una variable global. Ahora `src/data/juegos.js` exporta el array y una función para buscar por ID.
- Antes el carrito se manipulaba por funciones globales y `localStorage`. Ahora está centralizado en un **Context de React** y funciones puras que se pueden probar aisladamente.
- El diseño conserva la identidad **negra, violeta y cyan** de la fuente; además las tarjetas utilizan **React Bootstrap**.

## Responsabilidad de cada carpeta

| Carpeta | Qué contiene |
|---|---|
| `src/components/` | Piezas reutilizables: tarjetas, carrito, menús, footer, protección |
| `src/pages/` | Pantallas de Inicio, Catálogo, Carrito, Detalle, Login, Registro, Contacto, Asistente y Checkout |
| `src/context/TiendaContext.jsx` | Estado global del carrito y sesión educativa |
| `src/data/juegos.js` | 12 objetos con títulos, precios, IDs e imágenes |
| `src/utils/carrito.js` | Funciones puras para agregar, aumentar, disminuir, eliminar, sumar y envío |
| `src/utils/almacenamiento.js` | Lectura y escritura del carrito en localStorage |
| `src/test/` | Preparación de Vitest y de las pruebas Chromium |
| `src/tests/` | Pruebas rápidas con Node, sin instalar paquetes |

## Conceptos de clases (con ejemplos reales)

1. **Componente:** `Producto.jsx` representa una tarjeta. Lo usamos muchas veces con diferentes juegos.
2. **JSX:** es JavaScript con etiquetas parecidas a HTML; requiere `className`, `htmlFor`, `onClick`, etc.
3. **Prop:** `ListaProductos` recorre el array usando `map()` y entrega `producto` a `<Producto producto={producto} />`.
4. **State:** `useState` conserva datos que cambian, como el carrito, la búsqueda o un formulario.
5. **Evento:** `onClick={() => agregarAlCarrito(producto)}` agrega cuando se presiona el botón.
6. **Spread:** `{ ...item, cantidad: item.cantidad + 1 }` crea un objeto nuevo, sin modificar el anterior.
7. **find():** busca un juego que ya estaba en el carrito.
8. **map():** convierte un array en una lista de tarjetas o modifica la cantidad de un juego sin cambiar los otros.
9. **filter():** conserva juegos según búsqueda o elimina uno de la compra.
10. **reduce():** suma todas las cantidades y los subtotales.
11. **useEffect:** guarda automáticamente el carrito cuando el State cambia.
12. **localStorage:** conserva el carrito al recargar o cerrar el navegador.
13. **sessionStorage:** mantiene la sesión hasta que cierre la pestaña/sesión; aquí representa un login educativo.
14. **BrowserRouter/Routes/Route:** enlazan URL con pantalla. `Link` cambia de ruta sin recargar toda la web.
15. **useParams:** obtiene `id` desde `/producto/minecraft`.
16. **useNavigate:** redirige después de iniciar/cerrar sesión.
17. **ProtectedRoute:** impide continuar al checkout si no existe sesión.
18. **React Bootstrap:** `Card` y `Button` en `Producto.jsx`.

## Matriz de pruebas automatizadas

| Código | Qué comprueba | Entorno |
|---|---|---|
| PF-01 a PF-04 | Campos de login, escritura, credenciales correctas e incorrectas | Vitest JSDOM y Chromium |
| PF-05 y PF-06 | `useParams`: juego válido e inexistente | Vitest JSDOM |
| PF-07 a PF-09 | Catálogo de 12 juegos, buscador y filtro de ofertas | Vitest JSDOM |
| PF-10 a PF-15 | Carrito: mostrar, sumar, restar, eliminar, total y estado vacío | Chromium |
| PF-16 a PF-24 | Reglas de carrito, unidades, subtotales y envío | Vitest puro |
| PF-25 y PF-26 | Datos del catálogo y búsqueda por ID | Vitest puro |
| PF-27 y PF-28 | Validaciones del checkout | Vitest JSDOM |
| PF-29 y PF-30 | Props de tarjeta y botón agregar al carrito | Vitest JSDOM |
| PF-31 | Búsqueda de catálogo en Chromium | Chromium |
| PF-32 y PF-33 | ProtectedRoute sin sesión y con sesión | Vitest JSDOM |

### Comandos de demostración

```bash
npm install
npm run dev
npm run test:run
npx playwright install chromium
npm run test:browser:run
npm run build
```

### Pruebas manuales especialmente recomendadas

- Sin iniciar sesión visita `/catalogo`, busca `Minecraft`, filtra `PC` y después `En oferta`.
- Agrega 2 unidades de un juego. En carrito debe aparecer **una sola fila con cantidad 2**.
- Prueba el botón `-` hasta eliminar el producto y luego `Vaciar carrito`.
- Agrega artículos, recarga F5 y comprueba que se conserva el carrito.
- Abre `/checkout` sin iniciar sesión; la navegación debe llevarte a `/login`.
- Ingresa **mario / 1234**, vuelve al checkout y verifica que el total contempla la cantidad y, si procede, el despacho.
- Cierra la sesión: se elimina `sessionStorage.usuario`, **no** el carrito de `localStorage`.
- Registra un usuario de prueba y luego inicia sesión con el usuario creado. **No uses ninguna contraseña real.**
- En checkout, intenta confirmar sin rellenar campos y comprueba los mensajes de error.

## Limitaciones académicas que debes explicar

- El checkout **no realiza pagos** y no entrega pedidos a ninguna empresa.
- La autenticación frontend **no sustituye** un backend seguro ni protege realmente recursos en servidor.
- El registro utiliza almacenamiento local con contraseñas de DEMO; nunca usar datos reales.
- La sección de contacto no envía correos, solo valida un formulario.
- La sección IA requiere API Key propia y conexión a Gemini. En producción la clave debe gestionarse en un servidor.
- Las portadas se consultan por URL pública desde el repositorio original. Para trabajar completamente offline hay que descargar esos recursos con permiso y agregarlos a `public/`.

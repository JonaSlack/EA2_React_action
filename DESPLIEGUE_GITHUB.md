# Publicar LevelUp Store React con GitHub Actions

## 1. Crear el repositorio

Crea un repositorio público llamado `levelup-store-react` en tu cuenta `JonaSlack`. **No hace falta** activar «Add a README» porque el proyecto ya lo tiene.

## 2. Subir el proyecto

Desde VS Code, abre la carpeta `LevelUp_Store_React` que contiene `package.json`, y ejecuta:

```bash
git init
git add .
git commit -m "Migrar LevelUp Store a React con pruebas"
git branch -M main
git remote add origin https://github.com/JonaSlack/levelup-store-react.git
git push -u origin main
```

Si el proyecto ya era un repositorio Git, omite `git init` y comprueba `git remote -v` antes de agregar origin. Si subes por interfaz web, comprueba que `package.json` queda en la raíz y que `.github/workflows/deploy.yml` también se subió. **No subir `node_modules` ni `dist`**.

## 3. Habilitar Pages

En GitHub: repositorio → `Settings` → `Pages` → `Build and deployment` → `Source: GitHub Actions`.

## 4. Ver despliegue

En la pestaña `Actions`, abre `Build, test and deploy LevelUp Store`. Al terminar en verde, la web queda disponible en:

https://jonaslack.github.io/levelup-store-react/

Las rutas internas tendrán la forma `/levelup-store-react/#/catalogo` porque usamos `HashRouter`: al refrescar una ruta interna, Pages conserva el acceso. Las pruebas React y Node deben pasar antes de publicar.

## Si cambias el nombre del repositorio

Cambia `base: '/levelup-store-react/'` en `vite.config.js` por `base: '/NOMBRE-REAL/'` y actualiza la URL remota.

## Para actualizar la web

```bash
git add .
git commit -m "Actualizar LevelUp Store"
git push
```

Cada push a `main` ejecutará pruebas, compilación y publicación.

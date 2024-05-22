<p align="center">
  <a href="https://es.react.dev/" target="blank">
    <svg width="300px" height="300px" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <circle cx="0" cy="0" r="2" fill="currentColor" />
      <g stroke="currentColor" stroke-width="1" fill="none">
        <ellipse rx="10" ry="4.5" />
        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
      </g>
    </svg>
  </a>
</p>

# Ejecutar en desarrollo
1. Clonar repositorio
2. Ejecutar:
  ```
  pnpm install
  ```
3. Cambiar el origen del repositorio:
  ```
  git remote set-url origin <URL_del_nuevo_repositorio>
  ```
4. Subir al nuevo repositorio:
  ```
  git add .
  git commit -m "Primer commit"
  git branch -M main
  git push -u origin main
  ```
5. Ejecutar:
  ```
  pnpm dev
  ```
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_API: string
  // Aquí las demás variables de entorno
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
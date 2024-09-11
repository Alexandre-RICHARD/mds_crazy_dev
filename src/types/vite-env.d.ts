/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_LOCAL_PORT: number;
  readonly VITE_ERROR_API_URL: string;
  readonly VITE_PROJECT_NAME: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};

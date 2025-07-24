import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Tambahkan konfigurasi ini untuk menonaktifkan aturan yang bermasalah
  {
    rules: {
      // Menonaktifkan aturan yang melarang penggunaan 'any' eksplisit
      "@typescript-eslint/no-explicit-any": "off", 
      // Menonaktifkan aturan yang memaksa penggunaan 'const' daripada 'let'
      "prefer-const": "off", 
    },
  },
];

export default eslintConfig;
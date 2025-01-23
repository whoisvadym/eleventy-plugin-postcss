import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {ignores: ["demo/*"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];
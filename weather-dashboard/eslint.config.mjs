import globals from "globals";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["**/*.json"],
    languageOptions: {
      sourceType: "module", // Ensure ES modules are supported
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs", // Explicitly set for CommonJS files
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      sourceType: "module", // Ensure ES modules are supported for .js and .jsx files
    },
  },
  {
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  {
    ...pluginReact.configs.flat.recommended, // Apply recommended React rules
    rules: {
      "react/react-in-jsx-scope": "off", // Disable rule for React 17+
      "react/prop-types": "off", // Disable PropTypes validation if not using PropTypes
    },
  },
];
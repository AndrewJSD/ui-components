module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    commonjs: true,
    node: true,
  },
  plugins: ["unused-imports", "simple-import-sort", "import", "prettier"],
  rules: {
    "no-undef": "error",
    "no-unused-vars": "off",
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "function",
      },
      {
        blankLine: "always",
        prev: "function",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-const",
      },
      {
        blankLine: "always",
        prev: "multiline-const",
        next: "*",
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/named": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  ignorePatterns: ["dist/*"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      env: {
        es2022: true,
        browser: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      plugins: [
        "@typescript-eslint",
        "unused-imports",
        "simple-import-sort",
        "import",
        "react",
        "react-hooks",
        "prettier",
      ],
      rules: {
        "no-undef": "error",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/await-thenable": "off",
        "import/no-unresolved": "error",
      },
      parserOptions: {
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      settings: {
        react: {
          version: "detect",
          pragma: "React",
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  ],
}

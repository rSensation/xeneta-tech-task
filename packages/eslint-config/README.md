# Xeneta ESLint Config

This npm package provides shared ESLint configuration files for Xeneta projects. It includes configurations for both regular JavaScript projects (`base`) and React projects (`react`).

## Installation

You can install this package via npm, yarn or pnpm:

```bash
npm install @xeneta/eslint-config --save-dev
# or
yarn add @xeneta/eslint-config --dev
# or
pnpm add @xeneta/eslint-config --dev
```

## Usage

To use the provided ESLint configurations, create an `.eslintrc` file in your project's root directory and add the following line:

For regular JavaScript projects:

```json
{
  "extends": ["@xeneta/eslint-config"]
}
```

For React projects:

```json
{
  "extends": ["@xeneta/eslint-config/react"]
}
```

This will extend the appropriate ESLint configuration from `@xeneta/eslint-config` based on your project type.

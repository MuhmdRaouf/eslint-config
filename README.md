# @muhmdraouf/eslint-config
ESLint and TypeScript configuration.

[![Tests and Release](https://github.com/MuhmdRaouf/eslint-config/actions/workflows/release.yml/badge.svg)](https://github.com/MuhmdRaouf/eslint-config/actions/workflows/release.yml)
[![npm version](https://badge.fury.io/js/%40muhmdraouf%2Feslint-config.svg)](https://badge.fury.io/js/%40muhmdraouf%2Feslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
## Usage

```sh
yarn add eslint @muhmdraouf/eslint-config --dev
```

In `.eslintrc`:

```json
{ 
  "extends": "@muhmdraouf/eslint-config"
} 
```

In `tsconfig.json`:

```json
{
  "extends": "@muhmdraouf/eslint-config/tsconfig"
}
```

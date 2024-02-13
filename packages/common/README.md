# Xeneta Components and Helpers

This npm package contains shared React components and JS helpers for Xeneta projects.

## How to Build

To build, you need to run:

```bash
pnpm build
```

This will generate the 3 files:
- `components.js` containing shared React component
- `helpers` containing helper functions
- `hooks` containing reusable React hooks

## How to Use

Just import any component or function you need from a corresponding file:

```javascript
import * from '@xeneta/common/components';
import * from '@xeneta/common/helpers';
import * from '@xeneta/common/hooks';
```

## Components

The library has the following reusable components:
- Dropdown
- ExchangeIcon
- LineChart
- PriceRangeChart
- Header
- Loader
- LoaderScreen

## Helpers

The library has the following helper function:
- createFetchFromApi
- getUrlWithQueryParams

## Hooks

The library has the following reusable hooks:
- useCacheLoader

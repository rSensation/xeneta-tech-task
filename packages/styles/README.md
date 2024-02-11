# Xeneta Shared Styles

This npm package contains shared styles for Xeneta projects.

## How to Build

To build the main CSS file, you need to run:

```bash
pnpm build
```

This will generate the `main.css` file containing the shared styles.

## How to Use

To inject the main CSS file into your project, simply import `@xeneta/styles`:

```javascript
import '@xeneta/styles';
```

Additionally, you can import specific components in your scss code:

- SCSS variables: `@import '@xeneta/styles/variables';`
- SCSS mixins: `@import '@xeneta/styles/mixins';`
- Main CSS file: `@import '@xeneta/styles/main';`

## Customizing Color Theme

You may override the color theme by defining new CSS variables after importing `@xeneta/styles/main`. The following variables are available for customization:

- `--primary-color`
- `--primary-color-light`
- `--primary-color-lighter`
- `--bg-color`
- `--bg-color-light`
- `--text-color`
- `--text-color-white`

For example:

```css
@import '@xeneta/styles/main';

:root {
  --primary-color: #007bff;
  --primary-color-light: #66bfff;
  --primary-color-lighter: #cce5ff;
  --bg-color: #f8f9fa;
  --bg-color-light: #ffffff;
  --text-color: #333333;
  --text-color-white: #ffffff;
}
```

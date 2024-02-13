import { StylesConfig, Theme } from 'react-select';

export const components = {
  IndicatorSeparator: null,
};

export const theme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'var(--primary-color)',
    primary75: 'var(--primary-color-light)',
    primary50: 'var(--primary-color-light)',
    primary25: 'var(--primary-color-lighter)',
  },
});

export const styles: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    minHeight: 'unset',
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: '6px 8px',
  }),
};

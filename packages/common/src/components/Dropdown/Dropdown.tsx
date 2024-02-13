import { FC } from 'react';
import Select from 'react-select';

import { Option } from './types';

import { components, styles, theme } from './customStyles';

interface DropdownProps {
  className?: string;
  options?: Option[];
  placeholder?: string;
  onChange?: (newValue?: string) => void;
}

const Dropdown: FC<DropdownProps> = ({
  className,
  options,
  placeholder,
  onChange,
}) => {
  const setValueOnChange = (option: unknown) => onChange?.((option as Option)?.value);

  return (
    <Select
      className={className}
      options={options}
      onChange={setValueOnChange}
      components={components}
      theme={theme}
      styles={styles}
      placeholder={placeholder}
    />
  );
};

export default Dropdown;

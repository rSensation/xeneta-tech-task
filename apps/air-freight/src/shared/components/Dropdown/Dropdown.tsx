import { FC } from 'react';
import Select from 'react-select';

import { Option } from './types';

import { components, styles, theme } from './customStyles';

interface DropdownProps {
  className?: string;
  options?: Option[];
  onChange?: (newValue?: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ className, options, onChange }) => {
  const setValueOnChange = (option: Option | null) => onChange?.(option?.value);

  return (
    <Select
      className={className}
      options={options}
      onChange={setValueOnChange}
      components={components}
      theme={theme}
      styles={styles}
    />
  );
};

export default Dropdown;

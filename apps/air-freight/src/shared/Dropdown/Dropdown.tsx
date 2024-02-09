import { FC } from 'react';
import Select from 'react-select';

export interface Option {
  value: string;
  label: string;
}

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
    />
  );
};

export default Dropdown;

import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string,
  name: string,
  options: Array<{
    value: string,
    label: string,
  }>,
  placeholder?: string
}

const Select: React.FC<SelectProps> = ({ label, name, options, placeholder, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} {...rest}>
        <option disabled hidden value="">{placeholder || "Selecione uma opção"}</option>
        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}

export default Select;

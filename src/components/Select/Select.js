import React, { useEffect } from "react";

const Select = ({ options, classModule, onChange = () => {} }) => {
  const handleSelectedValue = ({ target }) => onChange(target.value);

  // effects
  useEffect(() => {
    onChange(options[0]["value"]);
  }, []);

  return (
    <select className={classModule.select} onChange={handleSelectedValue}>
      {options.map(option => {
        const { value, name } = option;
        return !value ? (
          <option
            value=""
            hidden
            disabled
            selected
            className={classModule.option}
          >
            {name}
          </option>
        ) : (
          <option value={value} className={classModule.option}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;

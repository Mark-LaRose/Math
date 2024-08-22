import React from 'react';

/* 
  Dropdown component
  This component renders a dropdown menu with a list of options.
  When an option is selected, it triggers the onSelect callback with the selected value.
*/
const Dropdown = ({ options, onSelect }) => {
  return (
    <div className="dropdown">
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="p-2 bg-gray-800 text-white rounded custom-dropdown"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
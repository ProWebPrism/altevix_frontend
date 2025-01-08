import React, { useState } from 'react';
import "./DropDown.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className='product-filter-btn' style={{ position: 'relative', display: 'inline-block' }}>
      <button className='product-filter-btn-link' onClick={toggleDropdown}>
        {selectedOption}
      </button>
      {isOpen && (
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            position: 'absolute',
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            borderRadius: '4px',
            overflow: 'hidden',
            zIndex: 10,
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                borderBottom: index < options.length - 1 ? '1px solid #ddd' : 'none',
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

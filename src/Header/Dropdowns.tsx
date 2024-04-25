import React, { useState, useRef, useEffect } from 'react';
import './Header.css'; // Import your CSS file for styling
import dropdownIcon from '../image/dropdown.png'; // Import your dropdown icon
import dropupIcon from '../image/dropup.png'; // Import your dropup icon
interface DropdownProps {
  items: { id: number; label: string }[];
  onSelect: (label: string) => void;
  buttonText: string;
}

const Dropdowns: React.FC<DropdownProps> = ({ items, onSelect, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (label: string) => {
    onSelect(label);
    setIsOpen(false);
    console.log("");
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropbtn" onClick={toggleDropdown}>
        {buttonText}
        {isOpen ? (
          <img src={dropupIcon} alt="Dropup Icon" style={{ width: '15px', height: '15px', verticalAlign: 'top' }} />
        ) : (
          <img src={dropdownIcon} alt="Dropdown Icon" style={{ width: '15px', height: '15px', verticalAlign: 'top' }} />
        )}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item) => (
            <div className="dropdown-item" key={item.id}>
              <button
                style={{ width: '100%', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                onClick={() => handleItemClick(item.label)}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdowns;

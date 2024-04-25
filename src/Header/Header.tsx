import React, { useState, useEffect, useRef } from 'react';
import './Header.css'; // Import your CSS file for styling
import dropdownIcon from '../image/dropdown.png'; // Import your dropdown icon
import dropupIcon from '../image/dropup.png'; // Import your dropup icon

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const [isProfileSettingDropdownOpen, setIsProfileSettingDropdownOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileSettingRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    switch (dropdown) {
      case 'profile':
        setIsProfileDropdownOpen((prev) => !prev);
        setIsNotificationDropdownOpen(false);
        setIsProfileSettingDropdownOpen(false);
        break;
      case 'notification':
        setIsNotificationDropdownOpen((prev) => !prev);
        setIsProfileDropdownOpen(false);
        setIsProfileSettingDropdownOpen(false);
        break;
      case 'profileSetting':
        setIsProfileSettingDropdownOpen((prev) => !prev);
        setIsProfileDropdownOpen(false);
        setIsNotificationDropdownOpen(false);
        break;
      default:
        setIsProfileDropdownOpen(false);
        setIsNotificationDropdownOpen(false);
        setIsProfileSettingDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node) &&
        !profileRef.current.querySelector('.dropdown-content')?.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node) &&
        !notificationRef.current.querySelector('.dropdown-content')?.contains(event.target as Node)
      ) {
        setIsNotificationDropdownOpen(false);
      }
      if (
        profileSettingRef.current &&
        !profileSettingRef.current.contains(event.target as Node) &&
        !profileSettingRef.current.querySelector('.dropdown-content')?.contains(event.target as Node)
      ) {
        setIsProfileSettingDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="logo">
          <img src={logoSrc} alt="Logo" style={{ width: "40px", height: "40px" }} />
        </div>
        <div className="dropdown" ref={profileRef}>
          <button className="dropbtn" onClick={() => toggleDropdown('profile')}>
            Other
            {isProfileDropdownOpen ? (
              <img src={dropupIcon} alt="Dropup Icon" style={{ width: '20px', height: "20px" }} />
            ) : (
              <img src={dropdownIcon} alt="Dropdown Icon" style={{ width: '20px', height: "20px" }} />
            )}
          </button>
          {isProfileDropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="dropdown" ref={notificationRef}>
          <button className="dropbtn" onClick={() => toggleDropdown('notification')}>
            Notification
            {isNotificationDropdownOpen ? (
              <img src={dropupIcon} alt="Dropup Icon" style={{ width: '20px', height: "20px" }} />
            ) : (
              <img src={dropdownIcon} alt="Dropdown Icon" style={{ width: '20px', height: "20px" }} />
            )}
          </button>
          {isNotificationDropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
          )}
        </div>
        <div className="dropdown" ref={profileSettingRef}>
          <button className="dropbtn" onClick={() => toggleDropdown('profileSetting')}>
            Profile
            {isProfileSettingDropdownOpen ? (
              <img src={dropupIcon} alt="Dropup Icon" style={{ width: '20px', height: "20px" }} />
            ) : (
              <img src={dropdownIcon} alt="Dropdown Icon" style={{ width: '20px', height: "20px" }} />
            )}
          </button>
          {isProfileSettingDropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

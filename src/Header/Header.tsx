import React, { useState, useEffect, useRef } from 'react';
import './Header.css'; // Import your CSS file for styling
import dropdownIcon from '../image/dropdown.png'; // Import your dropdown icon
import dropupIcon from '../image/dropup.png'; // Import your dropup icon

interface HeaderProps {
  logoSrc: string;
}

const profileDrop=[
  { id: 1, label: 'Profile 1' },
  { id: 2, label: 'Profile 2' },
  { id: 3, label: 'Profile 3' },
  { id: 4, label: 'Profile 4' },
]

const notificationDrop=[
  { id: 1, label: 'Notify 1' },
  { id: 2, label: 'Notify 2' },
  { id: 3, label: 'Notify 3' },
  { id: 4, label: 'Notify 4' },
]
const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const [isProfileSettingDropdownOpen, setIsProfileSettingDropdownOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileSettingRef = useRef<HTMLDivElement>(null);
  const [OtherItems, setOtherItems] = useState([
    { id: 1, label: 'O Link 1', href: '#' },
    { id: 2, label: 'O Link 2', href: '#' },
    { id: 3, label: 'O Link 3', href: '#' },
    { id: 4, label: 'O Link 4', href: '#' },
  ]);
  const [otherText, setOtherText]=useState(OtherItems[0].label)
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
const otherFunction =(itemname : string)=>{
  setOtherText(itemname);
  toggleDropdown('profile')
}

const notyFunction =(itemname : string)=>{
  toggleDropdown('notification')
}
const profiFunction =(itemname : string)=>{
  toggleDropdown('profileSetting')
}
  return (
    <header className="header">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="logo">
          <img src={logoSrc} alt="Logo" style={{ width: "40px", height: "40px" }} />
        </div>
        <div style={{marginLeft:"20px"}} className="dropdown" ref={profileRef}>
          <button className="dropbtn" onClick={() => toggleDropdown('profile')}>
            {otherText}
            {isProfileDropdownOpen ? (
              <img src={dropupIcon} alt="Dropup Icon" style={{ width: '15px', height: "15px" , verticalAlign: "top"}} />
            ) : (
              <img src={dropdownIcon} alt="Dropdown Icon" style={{ width: '15px', height: "15px" , verticalAlign: "top"}} />
            )}
          </button>
          {isProfileDropdownOpen && (
            <div className="dropdown-content">
            {/* {OtherItems.map((item) => (
              <div>
            <button style ={{width:'100%'}}onClick={()=>{otherFunction(item.label) }}>{item.label}</button>
              </div>
            ))} */}
            {OtherItems.map((item) => (
           <div className="dropdown-item" key={item.id}>
             <button style={{ width: '100%', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
             onClick={()=>{otherFunction(item.label) }}
             >{item.label}</button>
           </div>
         ))}
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
            {notificationDrop.map((item) => (
              <div className="dropdown-item" key={item.id}>
                <button style={{ width: '100%', backgroundColor: 'transparent', border: 'none', cursor: 'pointer'  }}
                  onClick={()=>{notyFunction(item.label) }}
                >{item.label}</button>
              </div>
            ))}
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
         {profileDrop.map((item) => (
           <div className="dropdown-item" key={item.id}>
             <button style={{ width: '100%', backgroundColor: 'transparent', border: 'none', cursor: 'pointer'  }}
              onClick={()=>{profiFunction(item.label) }}
             >{item.label}</button>
           </div>
         ))}
       </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

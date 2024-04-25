import React, { useState } from "react";
import Dropdown from "./Dropdown";
import './Header.css'; // Import your CSS file for styling
import logo from '../image/three.png'
interface HeaderProps {
    logoSrc?: string;
}
const firstData = [

    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },

];
const HeaderTwo: React.FC<HeaderProps> = ({ logoSrc }) => {
    const [selectedItem1, setSelectedItem1] = useState<string>(firstData[0].label);
    const [selectedItem2, setSelectedItem2] = useState<string>('');
    const [selectedItem3, setSelectedItem3] = useState<string>('');

    const handleSelectItem1 = (label: string) => {
        setSelectedItem1(label);
    };

    const handleSelectItem2 = (label: string) => {
        setSelectedItem2(label);
    };

    const handleSelectItem3 = (label: string) => {
        setSelectedItem3(label);
    };

    return (
        <header className="header">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="logo">
                    <img src={logo} alt="Logo" style={{ width: "40px", height: "40px" }} />
                </div>
                <div style={{ marginLeft: "20px" }}>
                    <Dropdown
                        items={firstData}
                        onSelect={handleSelectItem1}
                        buttonText={selectedItem1}
                   
                    />
                </div>
            </div>
            <div>
                <Dropdown
                    items={[
                        { id: 1, label: 'Option A' },
                        { id: 2, label: 'Option B' },
                        { id: 3, label: 'Option C' },
                    ]}
                    onSelect={handleSelectItem2}
                    buttonText="Select Option 2"
                
                />
                {/* <h1>Selected Item 3: {selectedItem3}</h1> */}
                <Dropdown
                    items={[
                        { id: 1, label: 'Choice 1' },
                        { id: 2, label: 'Choice 2' },
                        { id: 3, label: 'Choice 3' },
                    ]}
                    onSelect={handleSelectItem3}
                    buttonText="Select Choice"
                    
                />
            </div>

        </header>
    );
};

export default HeaderTwo;

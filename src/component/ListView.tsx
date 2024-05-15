// ListView.tsx
import React, { useState } from 'react';
import './ListView.css'; // Assuming you have some CSS for styling

interface ListItem {
  id: number;
  text: string;
}

interface ListViewProps {
  items: ListItem[];
}

function ListView({ items }: ListViewProps) {
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);

  const handleClick = (item: ListItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="list-container">
      {items.map((item) => (
        <div
          key={item.id}
          className={`list-item ${selectedItem?.id === item.id ? 'selected' : ''}`}
          onClick={() => handleClick(item)}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default ListView;

import React from 'react';
import ListView from './ListView';

const items = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
];

function SideNavigation() {
  return (
    <div>
      <h1>List View Example</h1>
      <ListView items={items} />
    </div>
  );
}

export default SideNavigation;
import React from 'react';
import { exportToExcel } from './ExportToExcel';

type User = {
  name: string;
  age: number;
  city: string;
};

const Example: React.FC = () => {
  const users: User[] = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 28, city: 'Chicago' },
  ];

  const handleDownload = () => {
    exportToExcel(users, 'users.xlsx');
  };

  return (
    <div>
      <h2>Export Users to Excel</h2>
      <button onClick={handleDownload}>Download Excel</button>
    </div>
  );
};

export default Example;

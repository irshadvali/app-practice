import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export function exportToExcel<T>(jsonData: T[], fileName: string = 'data.xlsx'): void {
  // Step 1: Convert JSON to worksheet
  const worksheet = XLSX.utils.json_to_sheet(jsonData);

  // Step 2: Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Step 3: Write workbook to array buffer
  const excelBuffer: ArrayBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  });

  // Step 4: Create blob and trigger file download
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(blob, fileName);
}

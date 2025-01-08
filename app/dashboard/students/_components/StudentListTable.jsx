import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // Import AgGridReact correctly
import 'ag-grid-community/styles/ag-grid.css'; // Import styles for ag-Grid
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Import theme for ag-Grid

function StudentListTable({ studentList }) {
    // Define the `useState` hooks correctly
    const [colDefs, setColDefs] = useState([
        { field: "id", filter: true },
        { field: "name", filter: true },
        { field: "address", filter: true },
        { field: "contact", filter: true },
    ]);
    const [rowData, setRowData] = useState([]);

    // Use `useEffect` to set the `rowData` when `studentList` changes
    useEffect(() => {
        if (studentList && Array.isArray(studentList)) {
            setRowData(studentList);
        } else {
            console.warn('studentList is not an array or is undefined');
        }
    }, [studentList]);

    return (
        <div className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
    );
}

export default StudentListTable;

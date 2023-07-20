import React, { useState } from 'react';

const Table = ({ add, data, modify, remove }) => {
  const [newData, setNewData] = useState(data);

  const handleChange = (event, id) => {
    const updatedData = newData.map((row) => {
      if (row.id === id) {
        return { ...row, [event.target.name]: event.target.value };
      }
      return row;
    });
    setNewData(updatedData);
  };

  const handleAddRow = () => {
    // Create a new empty row with unique ID (You can change how you generate IDs if needed)
    const newRow = { id: Date.now(), name: '', age: '', email: '' };
    setNewData([...newData, newRow]);
  };

  const handleRemoveRow = (id) => {
    const updatedData = newData.filter((row) => row.id !== id);
    setNewData(updatedData);
  };

  const handleSubmit = () => {
    modify(newData);
  };

  return (
    <div>
      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, index) => (
              <th key={index} style={{ border: '1px solid black', padding: '5px' }}>
                {key}
              </th>
            ))}
            <th style={{ border: '1px solid black', padding: '5px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((row, index) => (
            <tr key={index}>
              {Object.keys(row).map((key, index) => (
                <td key={index} style={{ border: '1px solid black', padding: '5px' }}>
                  <input
                    type="text"
                    name={key}
                    value={row[key] || ''}
                    onChange={(event) => handleChange(event, row.id)}
                  />
                </td>
              ))}
              <td style={{ border: '1px solid black', padding: '5px' }}>
                {remove && <button onClick={() => handleRemoveRow(row.id)}>Remove</button>}
                <button onClick={() => handleSubmit(row.id)}>Modify</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {add && <button onClick={handleAddRow}>Add Row</button>}
    </div>
  );
};

export default Table;

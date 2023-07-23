import React, { useState, useEffect } from 'react';

const Table = ({ add, data, modify, remove }) => {
  const [newData, setNewData] = useState(data);

  const handleChange = (event, id) => {
    const updatedData = newData.map((row) => {
      if (row.PK_ID === id) {
        return { ...row, [event.target.name]: event.target.value };
      }
      return row;
    });
    setNewData(updatedData);
  };

  const handleAddRow =  async() => {
    const newRow = {};

    Object.keys(newData[0]).map((key) => {
      newRow[key] = '';
    });

    try{
      const response = await add(newRow);
      newRow.PK_ID = response.data.PK_ID;
      setNewData(oldArray => [...oldArray, newRow]);
    } catch(error) {
      console.error("Error while adding the row:", error);
    }
  };

  const handleRemoveRow = (id) => {
    const updatedData = newData.filter((row) => row.PK_ID !== id);
    remove(id)
    setNewData(updatedData);
  };

  const handleModify = (id) => {
    const modifiedData = newData.filter((row) => row.PK_ID === id);
    modify(modifiedData[0]);
  };

  return (
    <div>
      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            {Object.keys(newData[0]).map((key, index) => (
              <th key={index} style={{ border: '1px solid black', padding: '5px' }}>
                {key}
              </th>
            ))}
            <th style={{ border: '1px solid black', padding: '5px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newData && newData.map((row, index) => (
            <tr key={index}>
              {Object.keys(row).map((key, index) => (
                <td key={index} style={{ border: '1px solid black', padding: '5px' }}>
                  <input
                    type="text"
                    name={key}
                    value={row[key] || ''}
                    onChange={(event) => handleChange(event, row.PK_ID)}
                  />
                </td>
              ))}
              <td style={{ border: '1px solid black', padding: '5px' }}>
                {remove && index !== 0 && <button onClick={() => handleRemoveRow(row.PK_ID)}>Remove</button>}
                {modify && <button onClick={() => handleModify(row.PK_ID)}>Modify</button>}
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

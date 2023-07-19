import React, { useState } from 'react';

const Table = ({ data, submit }) => {
    const [newData, setNewData] = useState({ data });

    const keys = Object.keys(data[0]);
    console.log(data);

    console.log(keys);

    const handleChange = (event, data) => {
        // Update the data in the state
        const updatedData = data.map((row) => {
            if (row.id === event.target.id) {
                row[event.target.name] = event.target.value;
            }
            return row;
        });
        setNewData(updatedData);
    };

    const handleSubmit = () => {
        submit(data);
    };

    return (
        <div>
          <h2>here</h2>
          <table  style={{border:'1px solid black'}}>
            <thead>
              <tr>
                {keys.map((key) => (
                  <th key={key} style={{border:'1px solid black', padding:'5px'}}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
                <tr>
                    {data.map((entry) => {
                        
                    })}
                </tr>
            </tbody>
            {/* Add the table body and rows if needed */}
          </table>
        </div>
      );
};

export default Table;
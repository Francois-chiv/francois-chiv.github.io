import React, { useState, useEffect } from 'react';
import bulletPoint from '../../services/bulletPointAPI';
import Table from './table';

const CvTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await bulletPoint.getAll();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Error fetching user data');
      setLoading(false);
    }
  };

  const postData = async(data) => {
    const res = await bulletPoint.create(data)
    setData(data);
    return res;
  };

  const updateData = (data) => {
    const formattedData = {
      CONTENT: data.CONTENT,
    };

    const PK_ID = data.PK_ID;
    bulletPoint.update(PK_ID, formattedData)
  }

  const deleteData = (id) => {
    bulletPoint.delete(id);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
  <>
    <h3>T_BULLET_POINT</h3>
    <Table data={data} modify={updateData} add={postData} remove={deleteData}/>
  </>
  );
};

export default CvTable;

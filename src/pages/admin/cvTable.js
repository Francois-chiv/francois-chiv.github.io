import React, { useState, useEffect } from 'react';
import curriculumVitaeAPI from '../../services/curriculumVitaeAPI';
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
      const response = await curriculumVitaeAPI.getAll();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Error fetching user data');
      setLoading(false);
    }
  };

  const postData = async(data) => {
    const res = await curriculumVitaeAPI.create(data)
    setData(data);
    return res;
  };

  const updateData = (data) => {
    const formattedData = {
      CATEGORY: data.CATEGORY,
      TITLE: data.TITLE,
      DURATION: data.DURATION,
      LOCATION: data.LOCATION,
      DESCRIPTION: data.DESCRIPTION,
    };

    const PK_ID = data.PK_ID;
    curriculumVitaeAPI.update(PK_ID, formattedData)
  }

  const deleteData = (id) => {
    curriculumVitaeAPI.delete(id);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
  <>
    <h3>T_CV</h3>
    <Table data={data} modify={updateData} add={postData} remove={deleteData}/>
  </>
  );
};

export default CvTable;

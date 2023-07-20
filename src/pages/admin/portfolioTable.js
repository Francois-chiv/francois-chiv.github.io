import React, { useState, useEffect } from 'react';
import portfolioAPI from '../../services/portfolioAPI';
import Table from './table';

const PortfolioTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await portfolioAPI.getAll();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Error fetching user data');
      setLoading(false);
    }
  };

  const postData = (data) => {
    const formattedData = {
      TITLE: data[0].TITLE,
      IMAGE: data[0].IMAGE,
      DESCRIPTION: data[0].DESCRIPTION,
      CATEGORY: data[0].CATEGORY,
    };
    
    portfolioAPI.create(formattedData)
      .then(() => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };

  const updateData = (id, data) => {
    const formattedData = {
      TITLE: data[0].TITLE,
      IMAGE: data[0].IMAGE,
      DESCRIPTION: data[0].DESCRIPTION,
      CATEGORY: data[0].CATEGORY,
    };

    portfolioAPI.update(id, formattedData)
  }

  const deleteData = (id) => {
    portfolioAPI.delete(id);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
  <>
    <h3>T_PORTFOLIO</h3>
    <Table data={data} modify={updateData} add={postData} remove={deleteData}/>
  </>
  );
};

export default PortfolioTable;

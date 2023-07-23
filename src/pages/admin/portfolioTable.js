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

  const postData = async(data) => {
    const res = await portfolioAPI.create(data)
    setData(data);
    return res;
  };

  const updateData = (data) => {
    const formattedData = {
      TITLE: data.TITLE,
      IMAGE: data.IMAGE,
      DESCRIPTION: data.DESCRIPTION,
      CATEGORY: data.CATEGORY,
    };

    console.log(formattedData);
    const PK_ID = data.PK_ID;
    portfolioAPI.update(PK_ID, formattedData)
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

import React, { useState, useEffect } from 'react';
import userAPI from '../../services/userAPI';
import Table from './table';


const UserTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API using Axios and store it in the state
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await userAPI.getUser(); // Use await here
      setData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const postUserData = (data) => {
    userAPI.updateUser(data).then(res=>{
      setData(res.data);
    });
  }

  return (
    <Table data={data} submit={postUserData}/>
  );
};

export default UserTable;

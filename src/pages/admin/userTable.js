import React, { useState, useEffect } from 'react';
import userAPI from '../../services/userAPI';
import Table from './table';

const UserTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await userAPI.getUser();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Error fetching user data');
      setLoading(false);
    }
  };

  const postUserData = (data) => {
    const formattedData = {
      FIRSTNAME: data[0].FIRSTNAME,
      LASTNAME: data[0].LASTNAME,
      EMAIL: data[0].EMAIL,
      DEGREE: data[0].DEGREE,
      ADDRESS: data[0].ADDRESS,
      PHONE_NUMBER: data[0].PHONE_NUMBER,
      AVAILABILITY: data[0].AVAILABILITY,
      BIRTHDAY: data[0].BIRTHDAY,
      PROFILE_IMAGE: data[0].PROFILE_IMAGE
    };
    
    userAPI.updateUser(formattedData)
      .then((response) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
  <>
    <h3>T_USER</h3>
    <Table data={data} modify={postUserData} />
  </>
  );
};

export default UserTable;

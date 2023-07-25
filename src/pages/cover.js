import Typed from 'react-typed/dist/react-typed';
import welcomeApi from '../services/welcomeAPI';
import React, { useState, useEffect } from 'react';

export default function Cover() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await welcomeApi.getData();
      setData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>{data && data[0].FIRSTNAME+" "+data[0].LASTNAME}</h1>
          <p>Je suis <span>
            <Typed
              className="text-light"
              strings={[
                'Développeur',
                'Artiste',
                'Scientifique']}
              typeSpeed={40}
              backSpeed={50}
              loop >
            </Typed>
          </span>
          </p>
        </div>
      </section>
    </>
  );
}

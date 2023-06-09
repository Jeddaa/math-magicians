import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quote = () => {
  const [fetchData, setFetchData] = useState();
  const [getError, setGetError] = useState();
  const [loader, setLoader] = useState(true);
  const getQuote = () => {
    axios
      .get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': '/Ngvmr+DmlIJq7t/dCmSPg==VGYgFDIj4NgtMCLz',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setFetchData(response.data[0]);
        setLoader(false);
      })
      .catch((error) => {
        setGetError(error.message);
        setLoader(false);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);
  return !loader ? (
    <div className="quote">
      {fetchData ? (
        <>
          <p className="paragraph">
            {fetchData.quote}
            {' '}
            -
            {fetchData.author}
          </p>
        </>
      ) : (
        <p className="paragraph">{getError}</p>
      )}
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default Quote;

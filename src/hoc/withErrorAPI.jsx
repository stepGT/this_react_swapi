import { useState } from 'react';

export const withErrorAPI = (View) => {
  return (props) => {
    const [errorAPI, setErrorAPI] = useState(false);
    return (
      <>
        {errorAPI ? (
          <h1>Error API</h1>
        ) : (
          <View setErrorAPI={setErrorAPI} {...props} />
        )}
      </>
    );
  };
};

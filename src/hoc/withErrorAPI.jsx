import { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

export const withErrorAPI = (View) => {
  return (props) => {
    const [errorAPI, setErrorAPI] = useState(false);
    return (
      <>
        {errorAPI ? (
          <ErrorMessage />
        ) : (
          <View setErrorAPI={setErrorAPI} {...props} />
        )}
      </>
    );
  };
};

import React from 'react';
import { Spinner, Alert } from 'react-bootstrap';

const SpinnerComponent = ({ animation, label }) => {
  return (
    <div>
      <div>
        <Alert variant='light'>
          {label}
        </Alert>
      </div>
      <div>
        <Spinner animation={animation} role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}
 
export default SpinnerComponent;
import React, { useState, useEffect } from 'react';
import { typeOperation } from '../utils/constants';

const Calculator = ({ valueA, valueB, operation }) => {
  const [operationState, setOperationState] = useState(operation);
  let sum = 0;
  let multiplication = 0;
  let substraction = 0;
  let division = 0;

  useEffect(() => {
    setOperationState(operation);
  }, [operation]);

  if (valueA && valueB){
    sum = valueA + valueB;
    multiplication = valueA * valueB;
    substraction = valueA - valueB;
    division = valueA / valueB;
  }

  return ( 
    <React.Fragment>
      {(typeOperation.SUM === operationState) && (
        <div>
          The sum of {valueA} and {valueB} is: {sum}
        </div>)}
      
      {(typeOperation.MULTIPLICATION === operationState) && (
        <div>
          The multiplication of {valueA} and {valueB} is: {multiplication}
        </div>)}

      {(typeOperation.SUBSTRACTION === operationState) && (
        <div>
          The substraction of {valueA} and {valueB} is: {substraction}
        </div>)}

      {(typeOperation.DIVISION === operationState) && (
        <div>
          The division of {valueA} and {valueB} is: {division}
        </div>)}
    </React.Fragment>
  );
}
 
export default Calculator;
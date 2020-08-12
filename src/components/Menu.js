import React, { useState } from 'react';
import { Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import { typeOperation } from '../utils/constants';
import Calculator from './Calculator';

const Menu = () => {
  const [operation, setOperation] = useState(1);
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  
  const handleSelect = (eventKey) => {
    setOperation(parseInt(eventKey));
  };
  
  return (
    <div>
      <Dropdown onSelect={handleSelect} id="menuDropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select an operation
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey={typeOperation.SUM}>Addition</Dropdown.Item>
          <Dropdown.Item eventKey={typeOperation.SUBSTRACTION}>Substraction</Dropdown.Item>
          <Dropdown.Item eventKey={typeOperation.MULTIPLICATION}>Multiplication</Dropdown.Item>
          <Dropdown.Item eventKey={typeOperation.DIVISION}>Division</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <InputGroup size="sm" className="mb-3">
        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setValueA(e.target.value)}/>
        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setValueB(e.target.value)}/>
      </InputGroup>
      <Calculator valueA={parseInt(valueA)} valueB={parseInt(valueB)} operation={operation}/>
    </div>
      
  );
}
 
export default Menu;
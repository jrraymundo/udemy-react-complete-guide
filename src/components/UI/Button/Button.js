import React from 'react';
import styled from 'styled-components'

import './Button.css';

/**
 * styled is an object that contains all kinds of HTML elements
 * 
 * styled.button will return a button component
 * and by using template literals or backticks, we can inject css to the returned button
 * 
 * When the styled button is rendered, styled-components generates and assigns a unique className
 * to the component which is good because it handles scoping of css automatically for us
 */

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;

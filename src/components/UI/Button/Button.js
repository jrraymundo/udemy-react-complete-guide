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
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

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

export default Button;

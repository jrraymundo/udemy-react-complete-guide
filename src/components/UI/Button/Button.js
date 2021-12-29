import React from 'react'

/** Using CSS Modules */
import styles from './Button.module.css'

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

/** Check git history for styled components version */

export default Button;

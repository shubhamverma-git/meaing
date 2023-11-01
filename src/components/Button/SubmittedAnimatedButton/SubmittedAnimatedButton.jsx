import React from 'react'
import styles from './SubmittedAnimatedButton.module.scss';
const SubmittedAnimatedButton = ({ text, onClick, bgColor, textColor,bgtextColor }) => {
    const halfBackgroundStyle = {
        backgroundColor: bgColor,
      };
    
      const textColorStyle = {
        color: textColor,
      };
    
      return (
        <button className={styles.customButton} onClick={onClick}>
            <div style={{position:"relative"}}>
          <div className={styles.buttonBackground} style={halfBackgroundStyle}>
            <span className={styles.buttonText} style={textColorStyle}>
              {text}
            </span>
          </div>
          <div className={styles.buttonBackground_2} style={{backgroundColor:bgColor, position:"absolute", top:0, left:0, zIndex:-1}}>
            <span className={styles.buttonText} style={{color:bgtextColor}}>
              {text}
            </span>
          </div>
          </div>
        </button>
      );
}

export default SubmittedAnimatedButton;
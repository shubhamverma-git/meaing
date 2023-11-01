import React from 'react'
import styles from './PrivacyPolicyHeroBackgroundText.module.scss';
const PrivacyPolicyHeroBackgroundText = ({title}) => {
  return (
    <div className={styles.container}>
        <p className={styles.background_text}>
        {title}
        </p>
      <div className={styles.sub_heading}>
        <h5 className={styles.sub_heading_text}>{title}</h5>
      </div>
    </div>
  );
}

export default PrivacyPolicyHeroBackgroundText
import React from 'react'
import styles from './JoinUs.module.scss';
import Button from '@/Button/BasicButton/Button.jsx';
import Link from "next/link";
import { useRouter } from 'next/router';
const JoinUs = ({bgColor, textColor}) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
        router.push('/contact');
    }, 800);
}
  return (
    <div className={styles.joinus_container}>

        <h2 className={styles.heading}>Be a Part of Something Big - Join Our Project Today!</h2>
        <p className={styles.content}>Make a Difference and Contribute Your Skills to a Worthy Cause.</p>
        <div className={styles.button}>
          <Link href="/contact" onClick={handleClick}>
                <Button text="Join now"
                onClick={() => console.log("Button clicked")}
                bgColor={bgColor}
                textColor = {textColor}
                />
          </Link>
        </div>
       
    </div>
  )
}

export default JoinUs
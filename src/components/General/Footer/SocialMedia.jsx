import React from 'react'
import styles from './Footer.module.scss'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare,
  } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className={styles.nav_socials_ids}>
    <h3>Connect with us</h3>
    <div>
      <FaLinkedin
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/company/droot",
            "_blank"
          )
        }
        size={30}
      />
      <FaFacebookSquare
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open("https://www.facebook.com/drootindia", "_blank")
        }
        Square
        size={30}
      />
      <FaTwitterSquare
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://twitter.com/drootconsulting?s=09",
            "_blank"
          )
        }
        size={30}
      />
      <FaInstagramSquare
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://instagram.com/droot_official?igshid=MzRlODBiNWFlZA==",
            "_blank"
          )
        }
        size={30}
      />
    </div>
  </div>
  )
}

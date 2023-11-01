import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "@/../styles/error_page.module.scss";
import Logo from "@/../../public/assets/images/errorLogo.svg";
import CustomButton from "@/Button/custom-button/CustomButton";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.white_section}>
          <Image alt="error image" src={Logo} className={classes.img} />
        </div>
        <div className={classes.brown_section}>
          <h2>Sorry, page not found !</h2>
          <h4>The page you requested could not be found</h4>
        <CustomButton 
          name='GO BACK HOME'
          onClick={() => router.push("/")}
          customClass={classes.custom_btn}
          iconThickness={1}
        />

        </div>
      </div>
    </>
  );
};

export default ErrorPage;

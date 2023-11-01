import React from "react";
import styles from "./Footer.module.scss";
import CustomButton from "@/Button/custom-button/CustomButton";

import { useForm } from "react-hook-form";
import { subscribePost } from "../../../services/utilityService";

export default function Subscribe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const emailSubmitHandler = (result) => {
    subscribePost(result)
    .then(res => reset())
    .catch(err => console.log(err))
  };


  return (
    <div className={styles.subscribe}>
      <div className={styles.inp_container}>
        <form onSubmit={handleSubmit(emailSubmitHandler)}>
          <span style={{ display: "flex" }}>
            <input
              // required={true}
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                pattern: /[a-z0-9]+@[a-z]+\.[a-z]/,
              })}
              className={errors.email && styles.input_error}
            />

            <CustomButton
              name="Subscribe"
              type="submit"
              customClass={styles.custom_btn}
              iconThickness={1}
              // onClick={}
            />
          </span>
        </form>
      </div>
    </div>
  );
}

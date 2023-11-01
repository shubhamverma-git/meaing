import React from "react";
import classes from "./QueryForm.module.scss";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/router";
import { postQuery } from "../../services/utilityService";
import { StrapyBaseUrl } from "../../utils/Utility";
import CustomButton from "@/Button/custom-button/CustomButton";

function QueryForm({ attributes, formImage, page, className, quireBtn }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const router = useRouter();

  let text_color = attributes?.name === "Design" ? "black" : "white";

  let color = attributes?.color ? attributes?.color : "#424242";

  const onSubmit = async (formData) => {
    const data = {
      first_name: formData.fname,
      last_name: formData.lname,
      email: formData.email,
      phone_number: formData.phone_number,
      query: formData.query,
      page: page ? page : router.query.service,
    };

    try {
      const response = await postQuery({ data });
      if (response.status === 200) {
        reset();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.container}>
      {page === "contact" ? (
        <div className={`${classes.left_container_image}`}>
          <Image
            src={`${StrapyBaseUrl}${formImage.url}`}
            blurDataURL={`${StrapyBaseUrl}${formImage.url}`}
            alt={formImage.alternativeText}
            width={formImage.width}
            height={formImage.height}
            style={{
              height: "100%",
              objectFit: "cover",
              width: "100%",
            }}
            placeholder="blur"
            className={classes.form_image}
          />
        </div>
      ) : (
        <>
          <div
            className={`page_spacing ${classes.left_container}`}
            style={{ backgroundColor: color, color: text_color }}
          >
            <h2>Allow us to be your trusted partner.</h2>
            <h3>
              Let&apos;s work together! We are committed to your success via
              trust, excellence, and seamless collaboration.
            </h3>
          </div>
        </>
      )}
      <div className={`page_spacing ${classes.right_container} ${className}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.form_container}>
            <div className={classes.name_input}>
              <div className={classes.first_name}>
                <label className={classes.label_text} htmlFor="first_name">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("fname", {
                    required: true,
                    pattern: /^[a-zA-Z]+$/i,
                    minLength: 3,
                    maxLength: 48,
                  })}
                  id="first_name"
                  placeholder="Enter your first name"
                  className={`${classes.form_input} ${
                    errors.fname && classes.error_content
                  }`}
                />
              </div>
              <div className={classes.last_name}>
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  {...register("lname", {
                    pattern: /^[a-zA-Z]+$/i,
                    minLength: 3,
                    maxLength: 48,
                  })}
                  id="last_name"
                  placeholder="Enter your last name"
                  className={` ${classes.form_input} ${
                    errors.lname && classes.error_content
                  }`}
                />
              </div>
            </div>
            <div className={classes.contact_details_input}>
              <div className={classes.email}>
                <label className={classes.label_text} htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /.*@[a-z0-9.-]*/i,
                    maxLength: 48,
                  })}
                  id="email"
                  placeholder="Enter your email"
                  className={` ${classes.form_input} ${
                    errors.email && classes.error_content
                  }`}
                />
              </div>
              <div className={classes.phone_number}>
                <label htmlFor="number">Phone Number</label>
                <input
                  type="tel"
                  {...register("phone_number", {
                    pattern: /^[0-9]+$/i,
                    minLength: 10,
                    maxLength: 10,
                  })}
                  id="number"
                  placeholder="Contact number"
                  className={`${classes.form_input} ${
                    errors.phone_number && classes.error_content
                  }`}
                />
              </div>
            </div>
            <div className={classes.query_container}>
              <label htmlFor="query" className={classes.label_text}>
                Your Query
              </label>
              <textarea
                type="text"
                {...register("query")}
                id="query"
                placeholder="Enter your message"
                className={classes.query_textarea}
              />
            </div>
          </div>
          <div className={classes.submit_btn}>
            <CustomButton
              name="Submit"
              type="submit"
              customClass={quireBtn == null ? classes.custom_btn : quireBtn}
              iconThickness={1}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default QueryForm;

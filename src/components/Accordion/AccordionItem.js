import React, { useRef } from "react";
// import { ReactComponent as ArrowIcon } from "../arrow-icon.svg";
import classes from "./Accordion.module.scss";
import { BsChevronDown } from "react-icons/bs";

export const AccordionItem = ({ faqItem, onClick, isOpen }) => {
  const itemRef = useRef(null);
  const { question, answer } = faqItem.attributes;
  return (
    <>
      <li className={`${classes.main_container}`}>
        <button className={classes.accordion_btn} onClick={onClick}>
          <div className={classes.button_content}>
            <h2>{question}</h2> {" "}
            <BsChevronDown style={{ strokeWidth: "1" }} className={`${classes.accordion_arrow} ${isOpen && classes.arrow_active}`} />
          </div>
        </button>
        <div
          className={classes.accordion_collapse}
          style={
            isOpen
              ? { height: itemRef.current?.scrollHeight }
              : { height: "0px" }
          }
        >
          <p className={classes.accordion_body} ref={itemRef}>
            {answer}
          </p>
        </div>
      </li>
    </>
  );
};

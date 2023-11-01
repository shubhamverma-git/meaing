import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import classes from "./Accordion.module.scss";

const Accordion = ({ faqList }) => {
  const [openId, setId] = useState(null);

  return (
    <div className={`page_spacing ${classes.container}`}>
      <div className={classes.title}>frequently asked questions:</div>
      <ul className={classes.qa_container}>
        {faqList.map((faqItem, id) => {
          return (
            <AccordionItem
              onClick={() => (id === openId ? setId(null) : setId(id))}
              faqItem={faqItem}
              isOpen={id === openId}
              key={id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;

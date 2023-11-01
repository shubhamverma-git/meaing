import Link from "next/link";
import React from "react";
import classes from "./LinkText.module.scss";
import { useRouter } from "next/router";

const LinkText = ({ children, href, className, style, onClick }) => {
  const router = useRouter();
  return (
    <>
      {onClick ? (
        <div
          style={style}
          className={`${classes.container} ${className}`}
          onClick={() => {
            onClick();
            router.push(href);
          }}
        >
          {children}
        </div>
      ) : (
        <Link
          style={style}
          href={href}
          className={`${classes.container} ${className}`}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default LinkText;

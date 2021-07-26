import React, { useState } from "react";
import classes from "./TopBar.module.css";
import { Link } from "react-router-dom";
import { classExpression } from "@babel/types";

export default function TopBar() {
  const [showHideClass, setShowHideClass] = useState([classes.navBarWrapper]);
  const [iconClassBars, setIconClassBars] = useState("fas fa-bars");
  const [isShow, setIsShow] = useState(false);

  const changeShow = () => {
    if (isShow) {
      setShowHideClass([classes.navBarWrapper]);
      setIconClassBars("fas fa-bars");
      setIsShow(false);
    } else {
      setShowHideClass([classes.navBarWrapperShow]);
      setIconClassBars("fas fa-times");
      setIsShow(true);
    }
  };

  return (
    <div className={classes.topbar_wrapper}>
      <div className={classes.homeIconWrapper}>
        <i class="fas fa-home"></i>
      </div>
      <div className={classes.right_div}>
        <div onClick={changeShow}>
          <i class={iconClassBars}></i>
          {/* <i class="fas fa-times"></i> */}
        </div>
      </div>

      <div className={showHideClass}>
        <Link to="/" className={classes.routerLinks} onClick={changeShow}>
          <i class="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/resume" onClick={changeShow} className={classes.routerLinks}>
          <i class="fas fa-file"></i>
          <span>Resume</span>
        </Link>
        <Link
          to="/projects"
          onClick={changeShow}
          className={classes.routerLinks}
        >
          <i class="fas fa-project-diagram"></i>
          <span>Projects</span>
        </Link>
        <Link
          to="/contact"
          onClick={changeShow}
          className={classes.routerLinks}
        >
          <i class="fas fa-envelope"></i>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}

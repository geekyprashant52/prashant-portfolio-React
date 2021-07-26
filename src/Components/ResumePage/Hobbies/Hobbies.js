import React from "react";
import classes from "./Hobbies.module.css";

export default function Hobbies() {
  return (
    <div>
      <div className={classes.introTextWrapper}>
        <div className={classes.grey_line_div}></div>
        <h3>Hobbies</h3>
      </div>
      <div className={classes.hobbiesWrapper}>
        <ul>
          <li>Body-Building</li>
          <li>Gardening</li>
          <li>Mobile Gaming</li>
          <li>Skating</li>
          <li>Batminton</li>
        </ul>
      </div>
    </div>
  );
}

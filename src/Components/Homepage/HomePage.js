import React from "react";
import classes from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={classes.homePageWrapper}>
      <div className={classes.left_div_wrapper}>
        <div>
          <h2 className={classes.nameText}>Prashant </h2>
          <h2 className={classes.nameText}>Rohankar.</h2>
        </div>

        <div className={classes.yellow_line_div}></div>
        <div className={classes.iconWrapper}>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-github"></i>
          <i class="fas fa-envelope"></i>
        </div>
      </div>
      <div className={classes.right_div_wrapper}>
        <div>
          <div className={classes.introTextWrapper}>
            <div className={classes.grey_line_div}></div>
            <h3>Introduction</h3>
          </div>
          <div className={classes.roleTextWrapper}>
            <h2 className={classes.roleText}>
              Front End Developer, based in India.
            </h2>

            <h4 className={classes.roleDescription}>
              A self-motivated and responsible person desires to learn new
              technologies to improve current programming skills. Seeking for
              such an environment where enhancing professional and
              problem-solving skills are well appreciated.
            </h4>
          </div>
          <div className={classes.myStoryWrapper}>
            <h3>My story</h3>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

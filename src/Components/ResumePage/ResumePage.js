import React from "react";
import Certificates from "./Certificates/Certificates";
import Hobbies from "./Hobbies/Hobbies";
import Projects from "./Projects/Projects";
import classes from "./ResumePage.module.css";
import SkillsPage from "./SkillsPage";

export default function ResumePage() {
  return (
    <div className={classes.resumePageWrapper}>
      <div className={classes.nameHeadingWrapper}>
        <h1>Prashant's Resume</h1>
      </div>

      <div className={classes.yellow_line_div}></div>
      <div className={classes.iconWrapper}>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-github"></i>
        <i class="fas fa-envelope"></i>
        <i class="fab fa-hackerrank"></i>
      </div>
      <div className={classes.qualificationWrapper}>
        <div className={classes.grey_line_div}></div>
        <h2>Academic Qualification</h2>
      </div>
      <div className={classes.educationDetailsWrapper}>
        <div className={classes.verticleLine}></div>
        <div className={classes.edyodaWrapper}>
          <h2>2021</h2>
          <div>
            <h3 className={classes.bachelorText}>
              Full Stack MERN Development Program
            </h3>
            <h3 className={classes.branchText}>(Edyoda Digital University)</h3>
          </div>
        </div>
        <div className={classes.bachelorWrapper}>
          <h2>2021</h2>
          <div>
            <h3 className={classes.bachelorText}>
              Bachelor of Engineering in CSE
            </h3>
            <h3 className={classes.branchText}>
              (Rajiv Gandhi College Of Engineering and Research)
            </h3>
          </div>
        </div>
        <div className={classes.secondaryWrapper}>
          <h2>2017</h2>
          <div>
            <h3 className={classes.bachelorText}>Secondary School</h3>
            <h3 className={classes.branchText}>(Shri. Rajendra High School)</h3>
          </div>
        </div>
        <div className={classes.secondaryWrapper}>
          <h2>2015</h2>
          <div>
            <h3 className={classes.bachelorText}>Matriculation</h3>
            <h3 className={classes.branchText}>(Abhinandan High School)</h3>
          </div>
        </div>
      </div>

      <SkillsPage />
      <Projects />
      <Certificates />
      <Hobbies />
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import jobData from "../data/jobs.json";
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../data/img", false, /\.(png|jpe?g|svg)$/)
);
const matchImage = (images, str) => {
  let link = "";
  images.find((elem) => {
    if (elem.includes(str)) {
      link = elem;
    }
  });
  return link;
};

const Projects = (props) => {
  useEffect(() => {});
  return (
    <div className="section" data-anchor="resume" data-index="3">
      <h2 className="h1">Work Experience</h2>
      <div className="jobContainer">
        {jobData.map((job, idx) => {
          return (
            <div
              className="job"
              key={idx}
              data-school={job.is_school}
              data-aos="fade-in"
              data-aos-delay={idx * 100}
            >
              <h3 className="job--title">{job.title} </h3>
              <p className="job--dates">
                {job.start} - {job.end}
              </p>
              {job.skills.length > 0 ? (
                <h4 className="job--skillTitle">Skills</h4>
              ) : null}
              <div className="job--skillContainer">
                {job.skills.length > 0
                  ? job.skills.map((skill, idy) => {
                      return (
                        <div className="job--skill" key={idy}>
                          {skill}
                        </div>
                      );
                    })
                  : null}
              </div>
              {job.responsibilities.length > 0 ? (
                <h4 className="job--respTitle">Responsibilities</h4>
              ) : null}
              <ul className="job--respContainer">
                {job.responsibilities.length > 0
                  ? job.responsibilities.map((resp, idy) => {
                      return (
                        <li className="job--resp" key={idy}>
                          {resp}
                        </li>
                      );
                    })
                  : null}
              </ul>

            </div>

          );
        })}
      </div>
    </div>
  );
};
export default Projects;

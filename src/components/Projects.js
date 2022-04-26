import { useState, useEffect, useRef } from "react";
import data from "../data/projects.json";
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
    <div className="section" data-anchor="projects" data-index="2">
      <h2 className="h1">Recent Work</h2>
      <div className="cardContainer">
        {data.map((project, idx) => {
          return (
            <div
              className="card"
              key={idx}
              data-aos="fade-in"
              data-aos-delay={idx * 100}
            > <a href={project.case_study} target="_blank">
              <div className="card--overlay">
                <div className="card--overlay-text">{project.name}</div>
              </div>
              <img
                className="card--image"
                src={matchImage(
                  images,
                  project.name.replace(" ", "-").toLowerCase()
                )}
              />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;

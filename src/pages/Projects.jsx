import React from "react";
import { projects } from "../helpers/projectsList";

import Project from "../components/Project";

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((item) => {
            return <Project key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </main>
  );
}

import Project from "../components/Project";
import projects from "../projects";


export default function Portfolio() {
    return (
      <div className="d-flex flex-wrap justify-content-around align-items-center">
        <Project projects={projects} />
      </div>
    );
  }
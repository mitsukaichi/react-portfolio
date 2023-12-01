import Project from "../components/Project";

const projects = [
  {
    image: "#",
    image_alt: "image_alt",
    name: "name",
    description: "description"
  },
  {
    image: "#",
    image_alt: "image_alt",
    name: "name",
    description: "description"
  },
  {
    image: "#",
    image_alt: "image_alt",
    name: "name",
    description: "description"
  },
  {
    image: "#",
    image_alt: "image_alt",
    name: "name",
    description: "description"
  }
]

export default function Portfolio() {
    return (
      <div className="d-flex flex-wrap justify-content-around align-items-center">
        <Project projects={projects} />
      </div>
    );
  }
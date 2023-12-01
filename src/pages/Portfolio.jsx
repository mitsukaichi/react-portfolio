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
  }
]

export default function Portfolio() {
    return (
      <div>
        <Project projects={projects} />
      </div>
    );
  }
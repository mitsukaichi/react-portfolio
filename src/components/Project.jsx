export default function Project({ projects }){
    return(
        <>
            {projects.map((project) => 
                (
                    <div className="card mb-3" key={project.name}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={project.image} className="card-img" alt={project.image_alt}></img>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text">{project.description}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                        </div>
                    </div>
                ) 
            )}
        </>
    )
}
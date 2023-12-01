/* eslint-disable react/prop-types */
export default function Project({ projects }){
    return(
        <>
            {projects.map((project) => 
                (
                    <div className="card col-md-3 m-1 shadow p-3 mb-5 bg-white rounded" key={project.name}>
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <img src={project.image} className="card-img" alt={project.image_alt}></img>
                            </div>
                            <div className="col-md-6">
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
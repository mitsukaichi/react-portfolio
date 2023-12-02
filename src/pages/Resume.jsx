export default function Resume() {
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      <div className="card col-md-5 m-2 shadow p-1 bg-white rounded">
          <div className="row no-gutters">
            <div className="card-body">
                <h4 className="card-title">Minami Itsukaichi</h4>
                <p className="card-text">Program Manager, Quality, Trust and Safety<br/>
                  <small className="text-muted">Mountain View, California, United States</small>
                </p>
                <br/>
                <h5 className="card-title">Experience</h5>
                <p className="card-text">Program Manager at Google<br/>
                  <small className="text-muted">May 2022 - Present</small>
                </p>
                <p className="card-text">Senior Solutions Consultant, Play Books, gTech at Google<br/>
                  <small className="text-muted">Sep 2018 - May 2022</small>
                </p>
                <h5 className="card-title">Education</h5>
                <p className="card-text">UC Berkeley Extension Full Stuck Web Developer Coding Bootcamp<br/>
                  <small className="text-muted">Sep 2023 - Dec 2023</small>
                </p>
                <p className="card-text">The University of Tokyo<br/>
                <small className="text-muted">Bachelor of Arts (B.A.)</small>
                  <small className="text-muted">2005 - 2009</small>
                </p>
            </div>
          </div>
      </div>
      <div className="card col-md-5 m-2 shadow p-1 bg-white rounded">
          <div className="row no-gutters">
            <div className="card-body">
                <h4 className="card-title text-center">Skills</h4>
                <ul className="align-items-center list-unstyled">
                  <li className="ms-5">HTML</li>
                  <li className="ms-5">CSS</li>
                  <li className="ms-5">Javascript</li>
                  <li className="ms-5">Node.js</li>
                  <li className="ms-5">React</li>
                  <li className="ms-5">MongoDB</li>
                  <li className="ms-5">MySQL</li>
                  <li className="ms-5">Express.js</li>
                </ul>
            </div>
          </div>
      </div>
    </div>
  );
}
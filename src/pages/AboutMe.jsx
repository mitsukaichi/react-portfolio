import profile from "../assets/profile_photo.png"

export default function About() {
  
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      <img className="col-md-4" src={profile} alt="Minami's profile photo" id="profile_photo"></img>
      <div className="col-md-6">
      2023 September cohort of <a href="https://bootcamp.berkeley.edu/coding/">UC Berkeley Full-time Coding Bootcamp Full-stuck Web Developer course</a>.
      A senior program manager with 10+ years experience of data analytics, scaled operations and project management in a high-velocity product team. Specialized in understanding complex user need, analyzing complex data and designing scalable product operations with detail-oriented, customer-centric mindset.
      </div>

    </div>
  );
  }
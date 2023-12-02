export default function Contact() {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <form className="col-md-6">
          <div className="form-group my-4">
            <label >Name</label>
            <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
          </div>
          <div className="form-group my-4">
            <label >Email</label>
            <input type="email" className="form-control" id="inputEmail1" placeholder="Enter your email" />
          </div>
          <div className="form-group my-4">
            <label >Message</label>
            <textarea type="email" className="form-control" id="inputEmail1" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
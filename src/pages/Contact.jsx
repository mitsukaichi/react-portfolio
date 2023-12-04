import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!userName) {
      setErrorMessage('Provide your name');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Provide valid email address');
      return;
    }
    if (!message) {
      setErrorMessage(`Provide message before submit form`);
      return;
    }

    setUserName('');
    setEmail('');
    setMessage('');
  };
  

  // When at least one field is not empty (user started input) & mouse cursor left the form without filling out all the fields, show the alert
  const handleMouseLeave = () => {
    if (!(!userName && !email && !message) && !(userName && email && message)) {
      setErrorMessage(`Provide fill out all the fields`);
    }
  }

  const handleEmailFieldMouseLeave = () => {
    if (email && !validateEmail(email)) {
      setErrorMessage('Provide valid email address');
    } else {
      setErrorMessage('');
    }
  }

    return (
      <div className="d-flex align-items-center justify-content-center" >
        <form className="col-md-7 p-5" onSubmit={handleFormSubmit} onMouseLeave={handleMouseLeave}>
          <div className="form-group my-4">
            <label className="my-1">Name</label>
            <input 
              value={userName} 
              name="userName" 
              onChange={handleInputChange}
              type="text" 
              className="form-control" 
              id="inputName" 
              placeholder="Enter your name"
              
            />
          </div>
          <div className="form-group my-4" onMouseLeave={handleEmailFieldMouseLeave}>
            <label className="my-1">Email</label>
            <input 
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Enter your email" />
          </div>
          <div className="form-group my-4">
            <label className="my-1">Message</label>
            <textarea 
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="inputMessage"
              placeholder="Enter your message">
            </textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

export default Contact;
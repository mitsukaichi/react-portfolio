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

    if (!validateEmail(email) || !userName) {
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


    return (
      <div className="d-flex align-items-center justify-content-center">
        <form className="col-md-6" onSubmit={handleFormSubmit}>
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
          <div className="form-group my-4">
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
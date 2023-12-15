import { useState } from 'react';
import { validateEmail } from '../utils/helpers';


function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setErrorMessage('');
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setFullName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !fullName || !message) {
      setErrorMessage('Email or username or message is invalid');
      return;
    }

    setFullName('');
    setEmail('');
    setMessage('');
    setErrorMessage('Submission successful!')
  };

  const handleLostFocus = (e) => {
    if (!fullName) {
        setErrorMessage('You must enter your name');
        return;
    } else if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
    } else if(!message) {
        setErrorMessage('Please enter a message');
        return;
    } else {
      setErrorMessage('');
    }
  }

  return (
      <section className="bg-light m-auto container-sm">
      <div className="row">
        <h2>Contact Me</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label for="name" className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={fullName}
              id="name"
              onChange={handleInputChange}
              onBlur={handleLostFocus}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email:</label>
            <input value={email} onChange={handleInputChange} onBlur={handleLostFocus} type="email" id="email" name="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">Message:</label>
            <textarea
              name="message"
              value={message}
              onChange={handleInputChange}
              onBlur={handleLostFocus}
              id="message"
              cols="30"
              rows="5"
              className="form-control"
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
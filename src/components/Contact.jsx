import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="container">
    <div className="p-4">
      <form>
        <div className="row mb-3">
          <div className="col">
            <label for="first-name" className="form-label">First name</label>
            <input className="form-control" type="text" id="first-name" required />
          </div>
          <div className="col">
            <label for="last-name" className="form-label">Last name</label>
            <input className="form-control" type="text" id="last-name" required />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label for="email" className="form-label">Email</label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="col">
            <label for="phone" className="form-label">Phone</label>
            <input className="form-control" type="tel" id="phone" />
            <div id="phone-help" className="form-text">Optional</div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label for="subject" className="form-label">Subject</label>
            <input className="form-control" type="text" id="subject" required />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label for="message" className="form-label">Message</label>
            <textarea className="form-control" rows="4" id="message" required></textarea>
            <div id="message-help" className="form-text">Max. 500 characters</div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
        </>
    );
};

export default Contact;
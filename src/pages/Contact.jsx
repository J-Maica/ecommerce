import React, { useState } from 'react';
import coffee from "../assets/images/coffeebanner.png"
import Popper2 from "../component/Popper2.jsx"
import Footer from "../component/Footer.jsx"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Form data submitted:', formData);
      setFormSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='container py-5 text-secondaryBrown w-100 vh-100 d-grid mt-5'>
     <div className="row w-100 my-5">
        <div className="col-lg-7 mb-4 mb-lg-0 mb-5">
          <h1 className='text-center pb-5'>Contact Us</h1>
          {formSubmitted ? (
            <p className="text-success text-center">Form submitted successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} className='px-2 px-lg-5'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              <button type="submit" className="btn btn-secondaryBrown">Submit</button>
            </form>
          )}
        </div>
        <div className="d-none d-lg-block col-lg-5 d-flex my-auto align-items-center justify-content-center">
          <img src={coffee} alt="Coffee Image" className="img-fluid" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;

import { useState } from "react";

import "./Contact.css";

import Footer from "../components/Footer";

function Contact() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {

    e.preventDefault();

    alert(
      `Thank you ${formData.firstName}! Message Sent Successfully`
    );

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  return (

    <div>

      <div className="contact-page">

        <div className="contact-container">

          {/* LEFT SIDE */}

          <div className="contact-left">

            <h1>Contact Us</h1>

            <div className="line"></div>

            <form onSubmit={handleSubmit}>

              <div className="row">

                <div className="input-group">

                  <label>First Name</label>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="input-group">

                  <label>Last Name</label>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              <div className="row">

                <div className="input-group">

                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="e.g johndoe@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="input-group">

                  <label>Phone Number</label>

                  <input
                    type="text"
                    name="phone"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              <div className="input-group">

                <label>Message or Enquiry</label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Type something"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

          {/* RIGHT SIDE */}

          <div className="contact-right">

           <iframe
            title="hotel-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.092410676536!2d77.594566!3d11.016844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f8d61f2a7db%3A0x6db2f497bb7d5005!2sLuxury%20Hotel!5e0!3m2!1sen!2sin!4v1719384000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            ></iframe>

            <div className="contact-details">

              <p>
                📍 14B, Freedom street,
                Victoria Island, Lagos
              </p>

              <p>
                📞 +2348106506979,
                +2349026737062
              </p>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Contact;
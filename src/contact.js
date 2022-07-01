import emailjs from "emailjs-com";
import React from "react";
import Swal from "sweetalert2";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0sryq2n",
        "template_8pv6gwx",
        e.target,
        "user_BFbqsy2KIxiAGQL36TMLj"
      )
      .then(
        result => {
          console.log("result" + result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your mail has arrived.",
            showConfirmButton: false,
            timer: 1500
          });
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <form onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="Full name"
                name="name"
              />
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                name="email"
                type="email"
                required
                className="form-control theme-light"
                placeholder="Email address"
              />
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="Subject"
                name="subject"

              />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <textarea
                rows="4"
                className="form-control theme-light"
                placeholder="Type comment"
                name="message"
              />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="btn-bar">
              <button className="px-btn px-btn-white">Send Message</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
}

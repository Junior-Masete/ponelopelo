import { Mail, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser"

function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

const [showPopup, setShowPopup] = useState(false);
const [popupMessage, setPopupMessage] = useState("");
const [popupSuccess, setPopupSuccess] = useState(true);

const handleChange = (e) => {
  const {name, value} = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }))
}

const sendEmail = (e) => {
  e.preventDefault()
  // console.log('Form submitted: ', formData)
  emailjs.send("service_3", "template_vc", formData,"6Bz")
  .then(() => {
    // alert("Message submitted!");
    setPopupMessage("Your message has been sent successfully!");
    setPopupSuccess(true);
    setShowPopup(true);

    setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
  })
  .catch((error) => {
    console.error("Email error:", error);

    setPopupMessage(
        "Something went wrong. Please try again later."
      );
      setPopupSuccess(false);
      setShowPopup(true);
  })
}

  return (
    <section 
    className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div className="text-left">

            <h3 className="text-4xl font-semibold text-red-500">
              Support Our Cause
            </h3>

            {/* <div className="w-24 h-1 bg-[#22613C] mt-6 rounded-full"></div> */}

            <p className="mt-4 text-base leading-tight text-gray-700">
              Help us build a brighter future, one school and one community at a time. You can donate,
                volunteer, become a Story Collector, donate shoes or sports equipment, or partner with us as a
                school, business, lodge or funder.
            </p>

            {/* Contact Info */}

            <div className="mt-14 space-y-8">

              <div className="flex items-center gap-6">

                {/* <div className="w-16 h-16 rounded-full bg-[#EEF3EF] flex items-center justify-center">

                  <Mail
                    size={28}
                    className="text-[#22613C]"
                  />

                </div> */}

                <div>

                  <h3 className="text-2xl font-semibold text-red-500">
                    General Contact
                  </h3>

                  <a
                    href="mailto:catchmentcollaboration@duct.org.za"
                    className="text-[1em] md:text-base text-gray-700 hover:text-[#22613C]"
                  >
                    info@ponelopelo.org
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-6">

                {/* <div className="w-16 h-16 rounded-full bg-[#EEF3EF] flex items-center justify-center">

                  <Linkedin
                    size={28}
                    className="text-[#22613C]"
                  />

                </div> */}

                <div>

                  <h3 className="text-2xl font-semibold text-red-500">
                    Follow Us
                  </h3>

                  <a
                    href="https://www.linkedin.com/company/cross-catchment-collective/about/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-[#22613C]"
                  >
                    LinkedIn
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8">

            <form onSubmit={sendEmail} className="space-y-5">

              <div>

                {/* <label className="block mb-2 font-semibold">
                  Name
                </label> */}

                <input
                  type="text"
                  placeholder="Name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-red-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#22613C]"
                />

              </div>

              <div>

                {/* <label className="block mb-2 font-semibold">
                  Email
                </label> */}

                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border border-red-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#22613C]"
                />

              </div>

              <div>

                {/* <label className="block mb-2 font-semibold">
                  Message
                </label> */}

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="w-full rounded-lg border border-red-500 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#22613C]"
                />

              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold flex justify-center items-center gap-3 transition"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>
            
            {showPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">

      {/* Icon */}
      <div
        className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${
          popupSuccess
            ? "bg-green-100 text-[#22613C]"
            : "bg-red-100 text-red-600"
        }`}
      >
        {popupSuccess ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>

      {/* Title */}
      <h2 className="mb-2 text-2xl font-bold text-gray-800">
        {popupSuccess ? "Message Sent!" : "Message Failed"}
      </h2>

      {/* Message */}
      <p className="mb-6 text-gray-600">
        {popupMessage}
      </p>

      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="w-full rounded-lg bg-[#22613C] px-6 py-3 font-semibold text-white transition hover:bg-[#18492C]"
      >
        Close
      </button>
    </div>
  </div>
)}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactPage;
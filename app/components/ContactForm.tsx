const ContactForm = () => {
  return (
    <section className="min-h-screen flex py-12 bg-gray-100">
      <div className="container mx-auto">
        <form
          action="#"
          className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <fieldset className="space-y-6">
            <legend>
              <h1 className="text-2xl font-bold text-center">Contact Us</h1>
            </legend>

            <div className="grid gap-6">
              {/* Full Name */}
              <div className="form-grid__unit full">
                <label htmlFor="fName" className="block font-semibold mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fName"
                  name="fName"
                  aria-required="true"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              {/* Email */}
              <div className="form-grid__unit">
                <label
                  htmlFor="emailField"
                  className="block font-semibold mb-1"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="emailField"
                  name="email"
                  aria-required="true"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              {/* Phone */}
              <div className="form-grid__unit">
                <label htmlFor="telField" className="block font-semibold mb-1">
                  Phone*
                </label>
                <input
                  type="tel"
                  id="telField"
                  name="tel"
                  aria-required="true"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              {/* Preferred Contact Method */}
              <div className="form-grid__unit full">
                <p className="font-semibold">Preferred Contact Method:</p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="contact-method"
                      id="contact-tel"
                      className="w-5 h-5"
                    />
                    <label htmlFor="contact-tel" className="font-normal">
                      Phone
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="contact-method"
                      id="contact-email"
                      className="w-5 h-5"
                    />
                    <label htmlFor="contact-email" className="font-normal">
                      Email
                    </label>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="form-grid__unit full">
                <label htmlFor="subject" className="block font-semibold mb-1">
                  Subject*
                </label>
                <select
                  id="subject"
                  name="subject"
                  aria-required="true"
                  className="w-full border border-gray-300 p-2 rounded-md"
                >
                  <option value="Empty" selected disabled>
                    Please select a subject
                  </option>
                  <option value="sales">Consulting</option>
                  <option value="pricing">Front-end Design</option>
                  <option value="support">SalesForce Admin</option>
                  <option value="careers">General</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-grid__unit full">
                <label htmlFor="message" className="block font-semibold mb-1">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  aria-required="true"
                  className="w-full border border-gray-300 p-2 rounded-md"
                ></textarea>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="permission"
                  name="permission"
                  className="w-5 h-5"
                />
                <label htmlFor="permission">
                  I Consent to the{" "}
                  <a
                    href="https://docs.google.com/document/d/1qS38_6FOYFMUXpbIRmQcwez7gkeXFa7aaVbM5MKKol8/edit?usp=sharing"
                    className="text-blue-500 underline"
                  >
                    terms & services
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="btn form-grid__unit full">
                <a
                  href="https://docs.google.com/document/d/1kYEBid1ifrH2xo-JIA1SiaB0U7ckJ-e9m3y-BJcaAYE/edit?usp=sharing"
                  className="block text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </a>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

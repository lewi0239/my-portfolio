"use client"; // Add this at the top of the file to mark it as a Client Component

import React, { useState } from "react";

const ContactForm = () => {
  // Define state to hold form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "email", // Default selected option
    subject: "",
    message: "",
    permission: false,
  });

  // State to handle success/error messages
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          contactMethod: "email",
          subject: "",
          message: "",
          permission: false,
        });
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="min-h-screen flex py-12 bg-gray-100">
      <div className="container mx-auto">
        {success && (
          <p className="text-green-500">
            Your message has been sent successfully!
          </p>
        )}
        {error && <p className="text-red-500">{error}</p>}

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <fieldset className="space-y-6">
            <legend>
              <h1 className="text-2xl font-bold text-center">Contact Us</h1>
            </legend>

            <div className="grid gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-semibold mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-semibold mb-1">
                  Phone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <p className="font-semibold">Preferred Contact Method:</p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="contact-tel"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === "phone"}
                      onChange={handleChange}
                      className="w-5 h-5"
                    />
                    <label htmlFor="contact-tel" className="font-normal">
                      Phone
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="contact-email"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === "email"}
                      onChange={handleChange}
                      className="w-5 h-5"
                    />
                    <label htmlFor="contact-email" className="font-normal">
                      Email
                    </label>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-semibold mb-1">
                  Subject*
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="consulting">Consulting</option>
                  <option value="frontend">Front-end Design</option>
                  <option value="salesforce">SalesForce Admin</option>
                  <option value="general">General</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-semibold mb-1">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded-md"
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="permission"
                  name="permission"
                  checked={formData.permission}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <label htmlFor="permission">
                  I Consent to the{" "}
                  <a href="#" className="text-blue-500 underline">
                    terms & services
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

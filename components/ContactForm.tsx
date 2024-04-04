import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phonenumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    email: '',
    phonenumber: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [file, setFile] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email address');
      return;
    }

    // Adjust the headers and body for FormData submission
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phonenumber', formData.phonenumber);
    data.append('message', formData.message);
   

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });
      

      if (response.ok) {
        setSubmitStatus('success');
        setEmailError(null);
        setFormData(initialFormData); // Reset form data
        setFile(null); // Reset file input
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setTimeout(() => {
      setFormData(initialFormData);
      setSubmitStatus(null);
      setEmailError(null);
    }, 5000); // Reset form after a delay
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 py-4 mx-2 sm:mx-auto sm:max-w-lg md:max-w-md border border-white rounded-lg shadow-sm bg-white">
      {/* Success and Error Messages */}
      {submitStatus === 'success' && (
        <div className="mb-4 text-green-500 font-bold">Email sent successfully!</div>
      )}
      {submitStatus === 'error' && (
        <div className="mb-4 text-red-500 font-bold">Error sending email. Please try again.</div>
      )}

      {/* Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-bold text-white">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name" // Placeholder provides additional guidance
          className="text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold text-white">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your email" // Placeholder for guidance
          className={`text-black w-full px-3 py-2 border rounded-lg focus:outline-none ${
            emailError ? 'border-red-500' : 'focus:border-blue-500'
          }`}
        />
        {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
      </div>

      {/* Phone Number Input */}
      <div className="mb-4">
        <label htmlFor="phonenumber" className="block text-sm font-bold text-white">Phone Number</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          required
          placeholder="Your phone number" // Placeholder for guidance
          className="text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Message Textarea */}
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-bold text-white">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message" // Placeholder for guidance
          className="text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;






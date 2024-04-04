import React from 'react';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto my-20 text-center">
      <p className="text-white-700 mb-8 text-4xl transition-all duration-300 transform hover:scale-105">
        Get in touch with us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <div className="md:pl-20 transition-all duration-300 transform hover:scale-105">
          <h2 className="text-4xl font-bold mb-4">Contact Form</h2>
          <ContactForm />
        </div>
        

        {/* In-person Hours */}
        <div className="md:pl-20 transition-all duration-300 transform hover:scale-105">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">In-person Hours</h2>
            <table className="text-2xl table-auto mx-auto">
              <tbody>
                <tr>
                  <td className="pr-4">Mon</td>
                  <td>09:00 am – until</td>
                </tr>
                <tr>
                  <td className="pr-4">Tue</td>
                  <td>09:00 am – until</td>
                </tr>
                <tr>
                  <td className="pr-4">Wed</td>
                  <td>09:00 am – until</td>
                </tr>
                <tr>
                  <td className="pr-4">Thu</td>
                  <td>09:00 am – until</td>
                </tr>
                <tr>
                  <td className="pr-4">Fri</td>
                  <td>09:00 am – until</td>
                </tr>
                <tr>
                  <td className="pl-4 pr-4 pt-5">Weekends:</td>
                  <td className='pt-5'>After hours is 2x payment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


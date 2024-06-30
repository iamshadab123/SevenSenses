import React from "react";
import ContactUsForm from "../ContactUsPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="bg-[#FCE7D4] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl lg:text-5xl font-semibold text-[#333333] mb-4">
          Get in Touch
        </h1>
        <p className="text-center text-lg text-[#6B7280] mb-8">
          We'd love to hear from you. Please fill out this form and we'll get
          back to you shortly.
        </p>
        <div className="mt-8">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;


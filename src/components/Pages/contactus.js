import React, { useState, useRef } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  width?: string;
  onChange: (value: string) => void; // Add onChange handler
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  width,
  onChange,
}) => {
  return (
    <div className={`flex flex-col ${width || "w-[50%]"} p-4`}>
      <label className="font-bold">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex-grow placeholder-normal" // Added placeholder-normal class
        onChange={(e) => onChange(e.target.value)} // Call onChange handler
      />
    </div>
  );
};

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow mt-2.5 tracking-tight text-gray-900 max-md:mt-10">
      <div className="flex gap-5 text-2xl font-bold leading-9">
        <img src={icon} alt="" className="shrink-0 aspect-square w-[54px]" />
        <h3 className="flex-auto self-start">{title}</h3>
      </div>
      <div className="pr-2px flex-auto self-start text-xl leading-8 px-20 w-auto">
        {content}
      </div>
    </div>
  </div>
);

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone number
    const phoneNumberRegex = /^\+?\d{1,3}(?:[-\s]?\d{3}){3}$/;

    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      const response = await fetch("https://your-backend-endpoint.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      // Reset form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };

  const contactData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Call us",
      content: (
        <>
          +1-940-394-2948
          <br />
          +1-389-385-3807
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Email us",
      content: (
        <>
          support@brainwave.io
          <br />
          contact@brainwave.io
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f06f2bccb9b07bf8a8046586bd9f211dbb71be297a47e5dd6d80a6ee9193342?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Visit us",
      content: (
        <>
          34 Madison Street,
          <br />
          NY, USA 10005
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto h-screen flex justify-center items-center p-10">
      <div className="bg-[#F4F7FA] px-10 py-10 max-w-[1250px] w-full rounded-2xl">
        <section className="flex flex-col px-10 text-center text-gray-900 max-w-[1266px] w-full flex-nowrap justify-center items-center">
          <h1 className="self-center text-6xl font-bold tracking-tighter leading-[64.8px] max-md:text-4xl pt-8">
            Contact us
          </h1>
          <p className="mt-16 w-full text-xl tracking-normal leading-8 max-w-[650px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
        </section>
        <section className=" py-20">
          <div className="flex gap-8 max-md:flex-col max-md:gap-0">
            {contactData.map((item, index) => (
              <ContactItem
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col px-11 py-12 text-base font-bold tracking-normal leading-6 text-gray-900 rounded-xl shadow-2xl max-md:px-5 bg-white">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex w-full max-w-[1000px] justify-between">
              <InputField
                label="First Name & Last Name"
                placeholder="i.e. John Smith"
                width="w-[48%]"
                onChange={(value) => handleChange("firstName", value)} // Add onChange prop
              />
              <InputField
                label="Email"
                placeholder="i.e. john@mail.com"
                width="w-[48%]"
                onChange={(value) => handleChange("email", value)} // Add onChange prop
              />
            </div>
            <div className="flex w-full max-w-[1000px] justify-between ">
              <InputField
                label="Phone Number"
                placeholder="i.e. +1-234-567-7890"
                width="w-[48%]"
                onChange={(value) => handleChange("phoneNumber", value)} // Add onChange prop
              />
              <InputField
                label="Subject"
                placeholder="i.e. I need help"
                width="w-[48%]"
                onChange={(value) => handleChange("subject", value)} // Add onChange prop
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center bg-white rounded-lg max-md:max-w-full w-[100%]">
            <InputField
              label="Message"
              placeholder="i.e. Type your message here."
              width="w-[93%]"
              onChange={(value) => handleChange("message", value)} // Add onChange prop
            />
            <div className="flex justify-start max-md:max-w-full w-[90%] pt-8">
              <button
                className="text-lg tracking-tight leading-8 text-center text-white bg-indigo-600 rounded-lg max-w-[300px] max-md:px-5 h-18 px-16 py-3 w-[200px]"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUsForm;

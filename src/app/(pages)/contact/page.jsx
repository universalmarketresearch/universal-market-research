"use client";
import React, { useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="dark:bg-dark mx-auto mt-10 max-w-7xl bg-white py-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Get in Touch With Us
                </h2>
                <p className="text-body-color dark:text-dark-6 mb-9 text-base leading-relaxed">
                  We&apos;re here to assist you. Reach out to us with your inquiries,
                  feedback, or collaboration proposals, and we&apos;ll get back to
                  you promptly. Your satisfaction is our priority.
                </p>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-200 bg-opacity-35 text-blue-400 sm:h-[70px] sm:max-w-[70px]">
                    <IoHomeOutline className="h-8 w-8" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold text-gray-800">
                      Our Location
                    </h4>
                    <p className="text-body-color dark:text-dark-6 text-base">
                      99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-200 bg-opacity-35 text-blue-400 sm:h-[70px] sm:max-w-[70px]">
                    <FiPhoneCall className="h-8 w-8" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold text-gray-800">
                      Phone Number
                    </h4>
                    <p className="text-body-color dark:text-dark-6 text-base">
                      (+62)81 414 257 9980
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-200 bg-opacity-35 text-blue-400 sm:h-[70px] sm:max-w-[70px]">
                    <IoMailOutline className="h-8 w-8" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold text-gray-800">
                      Email Address
                    </h4>
                    <p className="text-body-color dark:text-dark-6 text-base">
                    info@universalmarketresearch.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="dark:bg-dark-2 relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-blue-400 bg-blue-400 p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 w-full resize-none rounded border px-[14px] py-3 text-base outline-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border-stroke text-body-color focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 w-full rounded border px-[14px] py-3 text-base outline-none"
        />
      </div>
    </>
  );
};

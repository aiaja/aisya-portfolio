import React from "react";

function Contact() {
  return (
    <div className="px-20 py-10 bg-base-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-10 text-center">CONTACT ME</h2>
      <div className="flex flex-wrap w-full items-center justify-between">
        <div className="w-[50%] flex justify-center items-center content-center">
          <div className="w-[50%] bg-white p-10 rounded-lg">
            <form className="w-full">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Nama
                </label>
                <input type="text" placeholder="Your name" className="input" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <label className="input validator">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input type="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Nomor Telepon
                </label>
                <label className="input validator">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <g fill="none">
                      <path
                        d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <input
                    type="tel"
                    className="tabular-nums"
                    required
                    placeholder="Phone"
                    pattern="[0-9]*"
                    minlength="10"
                    maxlength="10"
                    title="Must be 10 digits"
                  />
                </label>
                <p className="validator-hint">Must be 10 digits</p>
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea className="textarea" placeholder="Message"></textarea>
              </div>
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center w-[50%]">
          <div className="card w-96 bg-base-100 card-xl shadow-sm">
            <div className="card-body p-0">
              <h2 className="card-title px-[1.5rem] pt-[1.5rem]">
                Xlarge Card
              </h2>
              <p className="px-[1.5rem]">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="h-10 bg-red-100 rounded-b-md "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

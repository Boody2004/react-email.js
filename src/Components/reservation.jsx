import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rbolb8a",
        "template_walaxnw",
        form.current,
        "OKZaMPQosL7FbL_HX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => {
    toast.success("Successfully Registered", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      window.location.reload(true);
    }, 4000);
  };

  return (
    <div className="bg-black px-[6.25vw]">
      <div className="xl:mx-52 py-16 sm:py-24 md:py-32 xl:py-36 border-b-[1px] border-gray-700">
        <div className="text-white mb-16">
          <h1 className="text-3xl md:text-4xl font-bold leading-10 mb-5 md:mb-10">
            Reserve a Table
          </h1>
          <p className="md:text-lg font-medium leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="col-span-2 md:col-span-1">
                <input
                  className="w-full bg-transparent text-lg text-white font-medium placeholder:text-gray-700 border-2 border-gray-700 focus:border-white outline-none duration-150 p-6"
                  type="text"
                  name="user_name"
                  placeholder="Name*"
                  required
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  className="w-full bg-transparent text-lg text-white font-medium placeholder:text-gray-700 border-2 border-gray-700 focus:border-white outline-none duration-150 p-6"
                  type="number"
                  name="phone_number"
                  placeholder="Contact number*"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-5">
              <div className="col-span-3 md:col-span-1">
                <input
                  className="w-full bg-transparent text-lg text-white font-medium placeholder:text-gray-700 border-2 border-gray-700 focus:border-white outline-none duration-150 p-6"
                  type="date"
                  name="date"
                  required
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <input
                  className="w-full bg-transparent text-lg text-white font-medium placeholder:text-gray-700 border-2 border-gray-700 focus:border-white outline-none duration-150 p-6"
                  type="text"
                  name="time"
                  placeholder="6pm*"
                  required
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <select
                  className="w-full bg-black text-lg text-white font-medium placeholder:text-gray-700 border-2 border-gray-700 focus:border-white outline-none duration-150 p-6"
                  name="guest_number"
                >
                  <option value="0">Number of Guests*</option>
                  <option label="1-2" value="1-2"></option>
                  <option label="2-4" value="2-4"></option>
                  <option label="4-8" value="4-8"></option>
                  <option label="8-10" value="8-10"></option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <textarea
                className="w-full bg-transparent text-lg text-white font-medium placeholder:text-gray-700 border-2 border-gray-700 focus:border-white outline-none duration-150 p-6"
                name="additional_information"
                placeholder="Additional information"
                rows="4"
              />
            </div>
            <div className="mb-5 relative">
              <img
                className="w-full"
                src="https://media.istockphoto.com/id/1483771201/photo/interior-of-a-luxury-restaurant-with-flower-decorated-walls.jpg?s=612x612&w=0&k=20&c=bZ8ko5wkamuSS7mMHKdFZtDyP5tmGsHds7NlPGpEr-I="
                alt="Img"
              />
              <div>
                <input
                  className="absolute top-[52.5%] left-[11%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                  type="radio"
                  value="1"
                  name="table_number"
                />
                <input
                  className="absolute top-[53%] left-[22.5%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                  type="radio"
                  value="2"
                  name="table_number"
                />
                <input
                  className="absolute top-[53.5%] left-[38.5%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                  type="radio"
                  value="3"
                  name="table_number"
                />
                <input
                  className="absolute top-[54%] left-[56%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                  type="radio"
                  value="4"
                  name="table_number"
                />
                <input
                  className="absolute top-[54.5%] left-[77.5%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                  type="radio"
                  value="5"
                  name="table_number"
                />
                <input
                  className="absolute top-[62%] left-[7%] w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10"
                  type="radio"
                  value="6"
                  name="table_number"
                />
                <input
                  className="absolute top-[65%] left-[39%] w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10"
                  type="radio"
                  value="7"
                  name="table_number"
                />
                <input
                  className="absolute top-[68%] left-[78%] w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10"
                  type="radio"
                  value="8"
                  name="table_number"
                />
              </div>
            </div>
            <div>
              <button
                className="w-full bg-transparent text-gray-700 text-2xl hover:text-white font-medium border-4 border-gray-700 hover:border-white outline-none cursor-pointer duration-150 p-6"
                onClick={notify}
                type="submit"
              >
                Submit Reservation
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="xl:mx-52 py-16 sm:py-24 md:py-32 xl:py-36">
        <div className="text-white mb-16">
          <h1 className="text-3xl md:text-4xl font-bold leading-10 mb-5 md:mb-10">
            Booking and Cancellation Policy
          </h1>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;

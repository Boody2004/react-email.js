import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const title = "Reserve a Table";
  const subtitle =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.";
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
          notify();
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
    <div>
      <div className="size border-b border-base-100">
        <div className=" mb-16">
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="col-span-2 md:col-span-1">
              <input
                className="input-style"
                type="text"
                name="user_name"
                placeholder="Name*"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                className="input-style"
                type="number"
                name="phone_number"
                placeholder="Contact number*"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mb-5">
            <div className="col-span-3 md:col-span-1">
              <p className="md:hidden subtitle mb-2">Select Date*</p>
              <input className="input-style" type="date" name="date" required />
            </div>
            <div className="col-span-3 md:col-span-1">
              <input
                className="input-style"
                type="text"
                name="time"
                placeholder="6pm*"
                required
              />
            </div>
            <div className="col-span-3 md:col-span-1">
              <select className="input-style" name="guest_number">
                <option value="0">Number of Guests*</option>
                <option value="1-2">1-2</option>
                <option value="2-4">2-4</option>
                <option value="4-8">4-8</option>
                <option value="8-10">8-10</option>
              </select>
            </div>
          </div>
          <div className="mb-5">
            <textarea
              className="input-style"
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
                className="radio-style top-[52.5%] left-[11%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                type="radio"
                value="1"
                name="table_number"
              />
              <input
                className="radio-style top-[53%] left-[22.5%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                type="radio"
                value="2"
                name="table_number"
              />
              <input
                className="radio-style top-[53.5%] left-[38.5%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                type="radio"
                value="3"
                name="table_number"
              />
              <input
                className="radio-style top-[54%] left-[56%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                type="radio"
                value="4"
                name="table_number"
              />
              <input
                className="radio-style top-[54.5%] left-[77.5%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                type="radio"
                value="5"
                name="table_number"
              />
              <input
                className="radio-style top-[62%] left-[7%] w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10"
                type="radio"
                value="6"
                name="table_number"
              />
              <input
                className="radio-style top-[65%] left-[39%] w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10"
                type="radio"
                value="7"
                name="table_number"
              />
              <input
                className="radio-style top-[68%] left-[78%] w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10"
                type="radio"
                value="8"
                name="table_number"
              />
            </div>
          </div>
          <button
            className="w-full text-gray-800 hover:text-white text-2xl font-medium border-4 border-base-100 hover:border-white duration-150 p-6"
            type="submit"
          >
            Submit Reservation
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;

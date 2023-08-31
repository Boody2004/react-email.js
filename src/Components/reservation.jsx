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

  const data = [
    {
      title: "Larger Party Policy",
      subtitle:
        "Donec quis fermentum felis. Praesent felis orci, vulputate in fermentum ut, semper quis purus. Aenean sit amet sem ac turpis tincidunt dapibus nec eget felis. Donec sit amet est consectetur, dignissim diam ut, rhoncus nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla bibendum nisi vitae mauris accumsan consectetur. Nulla est mi, aliquam cursus nibh eu, iaculis cursus nunc. Nunc quis dapibus turpis. Nullam ornare mi ut malesuada cursus.",
      id: 1,
    },
    {
      title: "Reservation Timing Policy",
      subtitle:
        "Nam sed massa vitae quam pharetra ultricies. Nunc sem felis, aliquam vel viverra vel, convallis vitae ipsum. Donec pretium tortor velit, ut porttitor augue rhoncus eget. Pellentesque tempor, nulla a faucibus dignissim, magna felis consectetur ex, ac sodales ipsum arcu sed tortor. Etiam suscipit ligula vel arcu facilisis venenatis. Aenean commodo elementum ullamcorper. Mauris a diam eget diam consequat euismod eget ac tellus.",
      id: 2,
    },
    {
      title: "Dining Guidelines",
      subtitle:
        "Duis sit amet ante sollicitudin lacus vestibulum fringilla. In vitae mauris quis ipsum mattis viverra. Fusce sed massa sem. Phasellus gravida a arcu in lobortis. Sed quis ante risus. Nulla fringilla a tellus viverra ornare. Etiam nec sem quis arcu efficitur egestas. Curabitur in scelerisque velit. Duis in libero eros. Phasellus eget ullamcorper magna. Aliquam vel dapibus ex. Vivamus et mauris turpis. Cras molestie, sem a facilisis tempus, enim est dignissim ex, vel feugiat erat felis in turpis. Nullam vitae ex vel nulla viverra condimentum.",
      id: 3,
    },
    {
      title: "Service Charges and Other Policies",
      subtitle:
        "Ut mattis ex id est volutpat, a cursus sem posuere. Proin eget ante metus. In a diam varius, fermentum eros id, pellentesque ipsum. Cras odio velit, dapibus sed tempor convallis, luctus et orci. Sed lacinia massa arcu, sed mollis ipsum pulvinar sed. Nullam pulvinar diam id sollicitudin mattis. Nulla tristique diam et mattis pellentesque. Praesent vestibulum ligula purus, sed auctor sem aliquam sed. Nam sagittis urna justo, ac rhoncus augue pretium quis. Nullam magna turpis, tincidunt id ultricies ac, pellentesque et erat. Fusce et hendrerit lacus, quis elementum quam. Pellentesque molestie ipsum nec arcu luctus, sit amet viverra purus finibus.",
      id: 4,
    },
  ];

  return (
    <div className="bg-black px-[6.25vw]">
      <div className="xl:mx-52 py-16 sm:py-24 md:py-32 xl:py-36 border-b border-base-100">
        <div className="text-white mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-10">
            Reserve a Table
          </h1>
          <p className="md:text-lg font-medium md:leading-6">
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
                  className="w-full bg-transparent text-lg text-white font-medium placeholder:text-gray-800 border-2 border-base-100 focus:border-white outline-none duration-150 p-6"
                  type="text"
                  name="user_name"
                  placeholder="Name*"
                  required
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  className="w-full bg-transparent text-lg text-white font-medium placeholder:text-gray-800 border-2 border-base-100 focus:border-white outline-none duration-150 p-6"
                  type="number"
                  name="phone_number"
                  placeholder="Contact number*"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-5">
              <div className="col-span-3 md:col-span-1">
                <label>
                  <div className="md:hidden text-lg text-white font-medium mb-2">
                    Select Date
                  </div>
                </label>
                <input
                  className="w-full bg-transparent text-lg text-white font-medium border-2 border-base-100 focus:border-white outline-none duration-150 p-6"
                  type="date"
                  name="date"
                  required
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <input
                  className="w-full bg-transparent text-lg text-white font-medium placeholder:text-gray-800 border-2 border-base-100 focus:border-white outline-none duration-150 p-6"
                  type="text"
                  name="time"
                  placeholder="6pm*"
                  required
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <select
                  className="w-full bg-black text-lg text-white font-medium border-2 border-base-100 focus:border-white outline-none duration-150 p-6"
                  name="guest_number"
                >
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
                className="w-full bg-transparent text-lg text-white font-medium placeholder:text-gray-800 border-2 border-base-100 focus:border-white outline-none duration-150 p-6"
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
                  className="radio md:border-4 bg-gray-800 absolute top-[52.5%] left-[11%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                  type="radio"
                  value="1"
                  name="table_number"
                />
                <input
                  className="radio md:border-4 bg-gray-800 absolute top-[53%] left-[22.5%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                  type="radio"
                  value="2"
                  name="table_number"
                />
                <input
                  className="radio md:border-4 bg-gray-800 absolute top-[53.5%] left-[38.5%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                  type="radio"
                  value="3"
                  name="table_number"
                />
                <input
                  className="radio md:border-4 bg-gray-800 absolute top-[54%] left-[56%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                  type="radio"
                  value="4"
                  name="table_number"
                />
                <input
                  className="radio md:border-4 bg-gray-800 absolute top-[54.5%] left-[77.5%] w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-9 lg:h-9"
                  type="radio"
                  value="5"
                  name="table_number"
                />
                <input
                  className="radio md:border-4 bg-gray-800 absolute top-[62%] left-[7%] w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10"
                  type="radio"
                  value="6"
                  name="table_number"
                />
                <input
                  className="radio md:border-4 bg-gray-800 absolute top-[65%] left-[39%] w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10"
                  type="radio"
                  value="7"
                  name="table_number"
                />
                <input
                  className="radio md:border-4 bg-gray-800 absolute top-[68%] left-[78%] w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10"
                  type="radio"
                  value="8"
                  name="table_number"
                />
              </div>
            </div>
            <div>
              <button
                className="w-full text-gray-800 text-2xl hover:text-white font-medium border-4 border-base-100 hover:border-white duration-150 p-6"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-10">
            Booking and Cancellation Policy
          </h1>
        </div>
        <div>
          {data.map((item, i) => (
            <div
              tabIndex={0}
              className="collapse collapse-arrow text-white border-y rounded-none border-base-300 px-5 md:px-10"
              key={item.id}
            >
              <div className="collapse-title text-lg md:text-xl font-medium px-0 py-[30px]">
                {item.title}
              </div>
              <div className="collapse-content px-0">
                <p className="md:text-md md:leading-5 mb-6">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;

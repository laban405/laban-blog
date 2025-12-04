'use client'
import React, { useState } from "react";
import {
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);

  const myFun = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://vesselsystems.co.ke/api/send-email",
        data
      );

      if (response.status === 201) {
        setIsSuccessful(true);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 5000);
        reset();
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" bg-gradient-to-r m-0 p-0 min-h-[80vh] pt-36 max-w-screen-xl mx-auto mb-10">
      <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary  text-3xl font-bold mt-26 mb-8 p-4 dark:text ">
        Contact Us
      </h1>
      {isSuccessful && (
        <div className="h-16 w-full bg-secondary flex justify-center align-center p-4 mb-8">
          <p className="text-center text-black font-medium font-24">
            Message sent successfully, we will get back to you soon
          </p>
        </div>
      )}
      {isError && (
        <div className="h-16 w-full bg-red-500 flex justify-center align-center p-4 mb-8">
          <p className="text-center text-white dark:text-black font-medium font-24">
            An error ocurred, please try again later or call us
          </p>
        </div>
      )}
      <div className="flex justify-around  max-md:flex-col">
        <div className="p-6 rounded-lg shadow mx-8 md:mx-4 flex-1">
          <h1 className="text-center dark:text text-lg font-semibold">
            Get In Touch With Us
          </h1>
          <ul>
            <li className="p-7 flex">
              <a href="#" className="flex">
                <div className="bg-gradient-to-r from-secondary to-primary text-2xl text-white items-center rounded-lg  w-30 h-30 p-6  ">
                  <FaPhone className="" />
                </div>
                <div className="mt-2 ml-4">
                  <div className="ml-2 flex flex-col items-start">
                    <h5 className="font-bold mb-3 text-black-600 dark:text">
                      Phone No.
                    </h5>
                    <p className=" dark:text">+ 254 731 318 075</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="p-7 flex">
              <a href="#" className="flex">
                <div className="bg-gradient-to-r from-secondary to-primary text-2xl text-white items-center rounded-lg  w-30 h-30 p-6  ">
                  <FaEnvelope className="" />
                </div>
                <div className="mt-2 ml-4">
                  <div className="ml-2 flex flex-col items-start">
                    <h5 className="font-bold mb-3">Email Address</h5>
                    <p className="">info@vesselsystems.co.ke</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="p-7 flex">
              <a href="#" className="flex">
                <div className="bg-gradient-to-r from-secondary to-primary text-2xl text-white items-center rounded-lg  w-30 h-30 p-6  ">
                  <FaLocationArrow className="" />
                </div>
                <div className="mt-2 ml-4">
                  <div className="ml-2 flex flex-col items-start">
                    <h5 className="font-bold mb-3">Address</h5>
                    <p className="">P.O Box 603-00208, Ngong Hills</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-secondary to-primary p-6 rounded-lg shadow flex-1 mx-8 md:mx-4">
          <form className="mx-auto" onSubmit={handleSubmit(myFun)}>
            <div className="my-2 mx-auto">
              <input
                type="text"
                className="w-full mt-2 p-4 outline-none border-none rounded-lg bg-[#ffffff] text-[#010105]"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type == "required" && (
                <p className=" text-red-500 bg-white mt-2 w-2/4 text-left text-sm">
                  Please Enter Your Name!
                </p>
              )}
            </div>
            <div className="my-2 mx-auto">
              <input
                type="text"
                className="w-full mt-2 p-4 outline-none border-none rounded-lg bg-[#ffffff] text-[#010105]"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors.email && (
                <span className=" text-red-500 bg-white mt-2 w-2/4 text-left text-sm">
                  Please Enter Valid email!
                </span>
              )}
              {/* {errors.email && errors.email.type == "required" && (
                <p className=" text-red-500 bg-white mt-2 w-2/4 text-left text-sm">Please Enter Your Email!</p>
              )} */}
            </div>
            <div className="my-2 mx-auto">
              <input
                type="text"
                className="w-full mt-2 p-4 outline-none border-none rounded-lg bg-[#ffffff] text-[#010105]"
                placeholder="Enter Your Phone No.(Optional)"
                {...register("phone", { required: false })}
              />
            </div>
            <div className="my-2 mx-auto">
              <textarea
                className="w-full h-36 mt-2 p-4 outline-none border-none rounded-lg bg-[#ffffff] text-[#010105]"
                placeholder="Message...."
                {...register("message", { required: true })}
              ></textarea>

              {errors.message && errors.message.type == "required" && (
                <p className=" text-red-500 bg-white mt-2 w-2/4 text-left text-sm p-0">
                  Write your message
                </p>
              )}
            </div>
            <button className="w-full p-3 mt-2 bg-black text-lg text-white rounded-lg outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]">
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;

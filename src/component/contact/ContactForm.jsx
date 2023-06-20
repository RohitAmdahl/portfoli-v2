import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Your first name should be at least 3 characters.")
      .required("Please enter your first name"),
    email: yup
      .string()
      .email("email should be valid email.")
      .required("Please write your valid email"),
    message: yup
      .string()
      .min(3, "Your message should be at least 3 characters.")
      .required("Please write your subject"),
  })
  .required();

function onSubmit(data) {
  console.log(data);
}

// const submitForm = (data) => {
//   console.log(data);
// };

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className=" container mx-auto max-w-lg p-2">
      <div>
        <h1 className="py-3 text-center text-2xl font-bold">Contact Me </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
      >
        <input
          className="border-primary m-1 rounded-md border p-2 "
          type="text"
          {...register("firstName")}
          placeholder="First Name..."
        />
        <p className=" font-pins font-medium text-red-400 ">
          {errors.firstName?.message}
        </p>

        <input
          className="border-primary m-1 rounded-md border p-2 "
          type="text"
          {...register("email")}
          placeholder="Email..."
        />
        <p className=" font-pins font-medium text-red-400 ">
          {errors.email?.message}
        </p>
        <textarea
          className="border-primary m-1 mb-4 rounded-md border p-2 "
          {...register("message")}
          placeholder="Write your message..."
          cols="30"
          rows="5"
        ></textarea>
        <p className=" font-pins font-medium text-red-400 ">
          {errors.message?.message}
        </p>
        <input
          type="submit"
          id="submit"
          className="flex cursor-pointer  items-center  justify-center gap-2 rounded-full bg-green  px-2 py-2 text-lg capitalize  text-white shadow-md shadow-black duration-100 ease-out hover:bg-black hover:text-white"
        />
      </form>
    </div>
  );
};

export default ContactForm;

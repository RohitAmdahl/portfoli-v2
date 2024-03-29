import React from "react";
// import { useForm } from "react-hook-form";
import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("myyarvel");
  if (state.succeeded) {
    return (
      <>
        <p className="mx-auto py-3 text-center font-serif text-2xl font-bold">
          Thanks for your Message!
        </p>
        <p className="mx-auto py-3 text-center font-serif text-2xl font-bold">
          I will Contact You soon!
        </p>
      </>
    );
  }
  return (
    <div className=" container mx-auto flex  max-w-xl flex-col p-10 md:p-4 lg:p-5">
      <form
        action="https://formspree.io/f/myyarvel"
        onSubmit={handleSubmit}
        className="grid grid-cols-1"
      >
        <label htmlFor="name">Name</label>
        <input
          className="m-1 rounded-md  border-2 border-emerald-200 p-2 "
          id="name"
          type="name"
          name="name"
          placeholder="Your name"
          required
          autoComplete="off"
        />
        <label htmlFor="email">Email Address</label>
        <input
          className="m-1 rounded-md  border-2 border-emerald-200 p-2 "
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          required
          autoComplete="off"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="Message">Message</label>
        <textarea
          className="m-1 mb-4 rounded-md  border-2 border-emerald-200 p-2 "
          id="message"
          name="message"
          placeholder="Type your message"
          required
          autoComplete="off"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className=" container mx-auto mt-4 max-w-sm cursor-pointer rounded-lg bg-green px-2 py-2 text-lg text-white   duration-150 ease-in-out hover:bg-black"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

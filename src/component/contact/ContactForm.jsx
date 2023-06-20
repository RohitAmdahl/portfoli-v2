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
      </>
    );
  }
  return (
    <div className=" container mx-auto flex  max-w-xl flex-col p-2">
      <form
        action="https://formspree.io/f/myyarvel"
        onSubmit={handleSubmit}
        className="grid grid-cols-1"
      >
        <label htmlFor="name">Name</label>
        <input
          className="border-primary m-1 rounded-md border p-2 "
          id="name"
          type="name"
          name="name"
          required
          autoComplete="off"
        />
        <label htmlFor="email">Email Address</label>
        <input
          className="border-primary m-1 rounded-md border p-2 "
          id="email"
          type="email"
          name="email"
          required
          autoComplete="off"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="Message">Message</label>
        <textarea
          className="border-primary m-1 mb-4 rounded-md border p-2 "
          id="message"
          name="message"
          required
          autoComplete="off"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className=" container mx-auto mt-4 max-w-sm cursor-pointer rounded-full bg-green px-2 py-2 text-lg text-white shadow-md shadow-black duration-150 ease-in-out hover:bg-black"
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

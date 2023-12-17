"use client";

import {useForm, SubmitHandler} from "react-hook-form";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<ContactFormInputs>();
  const onSubmit: SubmitHandler<ContactFormInputs> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{color: "red"}}>
      <label>Full name</label>
      <input type="text" {...register("name", {required: true})} />
      {errors.name && <span>This field is required</span>}

      <label>E-mail</label>
      <input type="text" {...register("email", {required: true})} />
      {errors.email && <span>This field is required</span>}

      <label>Message</label>
      <textarea {...register("message")} />

      <button type="submit">Send</button>
    </form>
  );
};

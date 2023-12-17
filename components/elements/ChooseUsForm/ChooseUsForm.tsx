"use client";

import {useForm, SubmitHandler} from "react-hook-form";

export const ChooseUsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<ChooseUsForm>();
  const onSubmit: SubmitHandler<ChooseUsForm> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{color: "red"}}>
      <div>
        <div>
          <label>Full name</label>
          <input type="text" {...register("name", {required: true})} />
          {errors.name && <span>This field is required</span>}

          <label>E-mail</label>
          <input type="text" {...register("email", {required: true})} />
          {errors.email && <span>This field is required</span>}

          <label>Position</label>
          <input type="text" {...register("position", {required: true})} />
          {errors.position && <span>This field is required</span>}

          <label>Phone</label>
          <input type="tel" {...register("phone", {required: true})} />
          {errors.phone && <span>This field is required</span>}
        </div>

        <label>Message</label>
        <textarea {...register("message")} />
      </div>

      <input {...register("consent")} type="checkbox" value="confirmed" />
      <label>I confirm my consent to the processing of personal data.</label>

      <button type="submit">Send</button>
    </form>
  );
};

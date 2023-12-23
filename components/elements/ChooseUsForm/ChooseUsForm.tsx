"use client";

import {useForm, SubmitHandler} from "react-hook-form";

import styles from "./ChooseUsForm.module.scss";
import {Checkbox} from "@/components/icons/Checkbox";

export const ChooseUsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<ChooseUsForm>();
  const onSubmit: SubmitHandler<ChooseUsForm> = (data) => console.log(data);

  const consentValue = watch("consent");

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>Full name</label>
      <input
        className={styles.input}
        type="text"
        placeholder="John Smith"
        {...register("name", {required: true})}
      />
      {errors.name && <span>This field is required</span>}

      <label className={styles.label}>E-mail</label>
      <input
        className={styles.input}
        type="text"
        placeholder="johnsmith@email.com"
        {...register("email", {required: true})}
      />
      {errors.email && <span>This field is required</span>}

      <label className={styles.label}>Position</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Movie maker"
        {...register("position", {required: true})}
      />
      {errors.position && <span>This field is required</span>}

      <label className={styles.label}>Phone</label>
      <input
        className={styles.input}
        type="tel"
        placeholder="+ 38 (097) 12 34 567"
        {...register("phone", {required: true})}
      />
      {errors.phone && <span>This field is required</span>}

      <label className={styles.label}>Message</label>
      <textarea
        className={`${styles.input} w-280 h-[196px] resize-none`}
        {...register("message")}
      />

      <div className="pb-4">
        <label className={`${styles.label} flex gap-2 tracking-normal`}>
          <input
            className="visually-hidden"
            {...register("consent")}
            type="checkbox"
            value="confirmed"
          />
          <span>
            <Checkbox opacity={consentValue ? 1 : 0.1} />
          </span>
          I confirm my consent to the processing of personal data.
        </label>
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

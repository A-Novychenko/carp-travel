"use client";

import {useForm, SubmitHandler} from "react-hook-form";

import {IncorrectIcon} from "@/components/icons/IncorrectIcon";

import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ChooseUsForm>();
  const onSubmit: SubmitHandler<ChooseUsForm> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row md:gap-x-5">
        <div>
          <label className={styles.label}>
            <span className="pb-1">Full name</span>
            <div className="relative">
              <input
                className={styles.input}
                type="text"
                placeholder="John Smith"
                style={{color: errors.name ? "#FF5757" : "#FFF"}}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Incorrect name",
                  },
                })}
              />
              {errors.name && (
                <div className={styles.error}>
                  <IncorrectIcon />
                  <span>{errors.name.message}</span>
                </div>
              )}
            </div>
          </label>

          <label className={styles.label}>
            <span className="pb-1">E-mail</span>
            <div className="relative">
              <input
                className={styles.input}
                type="text"
                placeholder="johnsmith@email.com"
                style={{color: errors.email ? "#FF5757" : "#FFF"}}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Incorrect email",
                  },
                })}
              />
              {errors.email && (
                <div className={styles.error}>
                  <IncorrectIcon />
                  <span>{errors.email.message}</span>
                </div>
              )}
            </div>
          </label>
        </div>

        <label className={styles.label_msg}>
          <span className="pb-1">Message</span>
          <textarea className={styles.textarea} {...register("message")} />
        </label>
      </div>

      <button className={styles.send_btn} type="submit">
        Send
      </button>
    </form>
  );
};

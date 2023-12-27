"use client";

import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {PatternFormat} from "react-number-format";

import {CheckboxIcon} from "@/components/icons/CheckboxIcon";
import {IncorrectIcon} from "@/components/icons/IncorrectIcon";

import styles from "./ChooseUsForm.module.scss";

export const ChooseUsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm<ChooseUsForm>();
  const onSubmit: SubmitHandler<ChooseUsForm> = (data) => console.log(data);

  const consentValue = watch("consent");
  const phoneNumberValue = watch("phoneNumber");

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:gap-5 md:pb-4">
        <div className="md:w-[222px]">
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

          <label className={styles.label}>
            <span className="pb-1">Position</span>
            <input
              className={styles.input}
              type="text"
              placeholder="Movie maker"
              {...register("position")}
            />
          </label>

          <label className={styles.label__pb0}>
            <span className="pb-1">Phone</span>
            <div className="relative">
              <Controller
                control={control}
                name="phoneNumber"
                rules={{
                  required: true,
                  minLength: 10,
                }}
                render={({field: {onChange, value}}) => (
                  <div className="relative">
                    <PatternFormat
                      className={styles.input_phone}
                      style={{color: errors.phoneNumber ? "#FF5757" : "#FFF"}}
                      format="+38 (###) ## ## ###"
                      onValueChange={(values: any) => {
                        onChange(values.value);
                      }}
                      value={value}
                      placeholder="+38 (097) 12 34 567"
                    />
                    {!phoneNumberValue && (
                      <span className={styles.input_phone_code}>+38</span>
                    )}
                  </div>
                )}
              />
              {errors.phoneNumber && (
                <div className={styles.error}>
                  <IncorrectIcon />
                  <span>Incorrect phone</span>
                </div>
              )}
            </div>
          </label>
        </div>

        <label className={styles.label__pb0}>
          <span className="pb-1">Message</span>
          <textarea
            className={`${styles.input} w-280 h-[196px] resize-none p-2 block md:w-[221px] md:h-[220px]`}
            {...register("message")}
          />
        </label>
      </div>

      <div className="md:flex md:justify-between md:items-start">
        <div className="pb-4 md:pb-0">
          <label className={styles.label_checkbox}>
            <input
              className={`${styles.checkbox} visually-hidden`}
              {...register("consent")}
              type="checkbox"
              value="confirmed"
            />
            <span className={styles.custom_checkbox}>
              <span className="cursor-pointer">
                <CheckboxIcon opacity={consentValue ? 1 : 0.1} />
              </span>
            </span>
            <span className="md:w-[192px]">
              I confirm my consent to the processing of personal data.
            </span>
          </label>
        </div>

        <button
          className={`block ml-auto text-30 font-medium uppercase md:text-center md:leading-none ${
            !consentValue ? "opacity-20" : "link-transition"
          }`}
          type="submit"
          disabled={!consentValue}
        >
          Send
        </button>
      </div>
    </form>
  );
};

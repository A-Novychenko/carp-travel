'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { IncorrectIcon } from '@/components/icons/IncorrectIcon';

import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  useFormPersist('contactForm', { watch, setValue });

  const onSubmit: SubmitHandler<ContactFormInputs> = () => reset();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:w-[606px]"
      aria-label="contact-form"
      id="contact-form"
    >
      <div className="flex flex-col md:flex-row md:gap-x-5 lg:flex-col">
        <div className="lg:flex lg:justify-between lg:pb-10">
          <label className={styles.label}>
            <span className="inline-block pb-1">Full name</span>
            <span className="relative block">
              <input
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={
                  errors.name ? 'nameContactFormError' : undefined
                }
                className={styles.input}
                type="text"
                placeholder="John Smith"
                style={{ color: errors.name ? '#FF5757' : '#FFF' }}
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: 'Incorrect name',
                  },
                })}
              />
              {errors.name && (
                <div
                  className={styles.error}
                  role="alert"
                  id="nameContactFormError"
                >
                  <IncorrectIcon />
                  <span id="nameContactFormErrorMessage">
                    {errors.name.message}
                  </span>
                </div>
              )}
            </span>
          </label>

          <label className={styles.label}>
            <span className="inline-block pb-1">E-mail</span>
            <span className="relative block">
              <input
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={
                  errors.email ? 'emailContactFormError' : undefined
                }
                className={styles.input}
                type="text"
                placeholder="johnsmith@email.com"
                style={{ color: errors.email ? '#FF5757' : '#FFF' }}
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: 'Incorrect email',
                  },
                })}
              />
              {errors.email && (
                <div
                  className={styles.error}
                  role="alert"
                  id="emailContactFormError"
                >
                  <IncorrectIcon />
                  <span id="emailContactFormErrorMessage">
                    {errors.email.message}
                  </span>
                </div>
              )}
            </span>
          </label>
        </div>

        <label className={styles.label_msg}>
          <span className="inline-block pb-1">Message</span>
          <textarea className={styles.textarea} {...register('message')} />
        </label>
      </div>

      <button
        className={styles.send_btn}
        type="submit"
        aria-label="Submit form"
      >
        Send
      </button>
    </form>
  );
};

'use client';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { PatternFormat } from 'react-number-format';

import { CheckboxIcon } from '@/components/icons/CheckboxIcon';
import { IncorrectIcon } from '@/components/icons/IncorrectIcon';

import styles from './ChooseUsForm.module.scss';

export const ChooseUsForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<ChooseUsForm>();
  const onSubmit: SubmitHandler<ChooseUsForm> = () => {
    reset();
    setValue('phoneNumber', '');
  };

  const consentValue = watch('consent');
  const phoneNumberValue = watch('phoneNumber');

  useFormPersist('chooseUsForm', { watch, setValue });

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:gap-5 mb-4 lg:gap-6 lg:mb-9">
        <div className="md:w-[222px] lg:w-[290px] mb-4 md:mb-0">
          <label className={styles.label}>
            <span className="inline-block mb-1">Full name</span>
            <span className="relative block">
              <input
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'nameError' : undefined}
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
                <div className={styles.error} role="alert" id="nameError">
                  <IncorrectIcon />
                  <span id="nameErrorMessage">{errors.name.message}</span>
                </div>
              )}
            </span>
          </label>

          <label className={styles.label}>
            <span className="inline-block mb-1">E-mail</span>
            <span className="relative block">
              <input
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'emailError' : undefined}
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
                <div className={styles.error} role="alert" id="emailError">
                  <IncorrectIcon />
                  <span id="emailErrorMessage">{errors.email.message}</span>
                </div>
              )}
            </span>
          </label>

          <label className={styles.label}>
            <span className="inline-block mb-1">Position</span>
            <input
              className={styles.input}
              type="text"
              placeholder="Movie maker"
              {...register('position')}
            />
          </label>

          <label className={styles.label__mb0}>
            <span className="inline-block mb-1">Phone</span>
            <span className="relative block">
              <Controller
                control={control}
                name="phoneNumber"
                rules={{
                  required: true,
                  minLength: 10,
                }}
                render={({ field: { onChange, value } }) => (
                  <span className="relative block">
                    <PatternFormat
                      aria-required="true"
                      aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                      aria-describedby={
                        errors.email ? 'phoneNumberError' : undefined
                      }
                      className={styles.input_phone}
                      style={{ color: errors.phoneNumber ? '#FF5757' : '#FFF' }}
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
                  </span>
                )}
              />
              {errors.phoneNumber && (
                <div
                  className={styles.error}
                  role="alert"
                  id="phoneNumberError"
                >
                  <IncorrectIcon />
                  <span id="phoneNumberErrorMessage">Incorrect phone</span>
                </div>
              )}
            </span>
          </label>
        </div>

        <label className={styles.label__mb0}>
          <span className="inline-block mb-1">Message</span>
          <textarea
            className={`${styles.input} w-280 h-[196px] resize-none p-2 block 
            md:w-[221px] md:h-[231px] lg:h-[268px]`}
            {...register('message')}
          />
        </label>
      </div>

      <div className="md:flex md:justify-between md:items-start">
        <div className="mb-4 md:mb-0">
          <label className={styles.label_checkbox}>
            <input
              aria-invalid={!consentValue ? 'true' : 'false'}
              className={`${styles.checkbox} visually-hidden`}
              {...register('consent')}
              type="checkbox"
              value="confirmed"
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  setValue('consent', consentValue ? '' : 'confirmed');
                }
              }}
            />
            <span className={styles.custom_checkbox}>
              <span className="cursor-pointer">
                <CheckboxIcon opacity={consentValue ? 1 : 0.1} />
              </span>
            </span>
            <span className="md:w-[192px] lg:w-[258px]">
              I confirm my consent to the processing of personal data.
            </span>
          </label>
        </div>

        <button
          aria-label="Submit form"
          aria-disabled={!consentValue ? 'true' : 'false'}
          className={`block ml-auto text-30 font-medium uppercase md:text-center md:leading-none lg:text-33 ${
            !consentValue ? 'opacity-20' : 'link-transition'
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

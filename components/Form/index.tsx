"use client";

import styles from "./Form.module.scss";

type FormProps = {};

export default function Form({}: FormProps) {
  return (
    <div className={styles.container}>
      <form
        action="https://formsubmit.co/sparkerburn004@gmail.com"
        method="POST"
        className={styles.form}
      >
        <input type="hidden" name="_cc" value="ps@rywards.com" />
        <input
          type="hidden"
          name="_next"
          value="https://rywards.com/Thank-you"
        />
        <div className={styles.nameContainer}>
          <input
            type="text"
            name="First Name"
            required
            placeholder="First Name"
            className={styles.nameInput}
          />
          <input
            type="text"
            name="Last Name"
            required
            placeholder="Last Name"
            className={styles.nameInput}
          />
        </div>
        <input
          type="email"
          name="Email"
          required
          placeholder="Email"
          className={styles.input}
        />
        <input
          type="text"
          name="Subject"
          required
          placeholder="Subject"
          className={styles.input}
        />
        <textarea
          name="Description"
          placeholder="Description"
          className={styles.input}
          rows={5}
        />
        <input type="hidden" name="_captcha" value="false" />
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

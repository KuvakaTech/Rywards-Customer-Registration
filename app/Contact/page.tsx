import styles from "@/styles/Contact.module.scss";
import { Navbar, Footer } from "@/components";
import { Toaster } from "react-hot-toast";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Toaster />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.contact}>
          <form
            action=""
            method="POST"
            className={styles.form}
          >
            <input
              type="hidden"
              name="_cc"
              value="another@email.com, yetanother@email.com"
            ></input>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
            <button type="submit">Send</button>
          </form>
        </div>
        <Footer />
      </main>
    </div>
  );
}

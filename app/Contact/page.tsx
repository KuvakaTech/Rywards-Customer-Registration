import styles from "@/styles/Contact.module.scss";
import { Navbar, Footer, Form } from "@/components";
import { Toaster } from "react-hot-toast";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Toaster />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.title}>Contact Us</div>
            <div className={styles.contactContainer}>
              <div className={styles.left}>
                <div className={styles.image}>
                  <img src="Contact.png" alt="Contact" loading="lazy" />
                </div>
                <div className={styles.subtitle}>Make life rewarding</div>
              </div>
              <Form />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

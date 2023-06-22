import styles from "../styles/Home.module.scss";
import { Navbar, Landing, Points, Footer } from "../components";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Toaster />
        <Landing />
        <Points />
        <Footer />
      </main>
    </div>
  );
}

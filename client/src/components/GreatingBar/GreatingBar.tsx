import { Link } from "react-router-dom";
import styles from "./GreatingBar.module.scss";

export default function GreatingBar(): JSX.Element {
  return (
    <header className={styles.mainDiv}>
      <div className={styles.text}>
      
        <p className={`${styles.textContent} ${styles.boldText}`}>
          Caring for your health as our own
        </p>
        <p className={styles.textContent}>
          — Excellence in care. Privacy in attention.
        </p>
        <Link to="/register" className={styles.registerLink}>
          Register Now
        </Link>
      </div>

      <img
        className={styles.logo}
        src="./src/assets/_ce4843c4-f71a-420e-ad58-f6340ee54748.jpeg"
        alt="logo"
      />
    </header>
  );
}

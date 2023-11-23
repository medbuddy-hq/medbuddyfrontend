import svgObject from "@/styles/svgIcons";
import styles from "./RegistrationCompleteComponent.module.css";
import Link from "next/link";

const RegistrationCompleteComponent = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <main className={styles.welcome_details}>
        <div className={styles.welcome_image}>{svgObject.welcome}</div>
        <div className={styles.welcome_text}>
          <h3>Welcome on Board, John.</h3>
          <p>
            You have completed your Medbuddy profile. Now, let us add your
            medication to create your very first reminder.
          </p>
        </div>
      </main>
      <div className={styles.add_meds}>
        <Link href="/patient/medication"> Add My Meds</Link>
      </div>
      <div className={styles.skip_prompt}>
        <Link href="/patient"> Skip</Link>
      </div>
    </section>
  );
};

export default RegistrationCompleteComponent;

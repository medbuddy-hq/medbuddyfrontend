import svgObject from "@/styles/svgIcons";
import styles from "./FormStyles.module.css";
import Link from "next/link";

const GetNameComponent = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.bioName}</div>
        <h1>Let's get to know you better!</h1>
        <h1> What's your name?</h1>
        <div className={styles.percent_svg}>
          {svgObject.twentyPercent}
        </div>
        <div className={styles.form_input}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter your first name"
          />
          {/* Error for First name here*/}
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            placeholder="Enter your last name"
          />
          {/* Error for Last name here*/}
        </div>
      </form>

      <div className={styles.next_question}>
        <Link href="/patient/registerform/manage-health"> Next &gt;</Link>
      </div>
    </section>
  );
};

export default GetNameComponent;

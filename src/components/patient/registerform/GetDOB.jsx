import svgObject from "@/styles/svgIcons";
import styles from "./FormStyles.module.css";
import Link from "next/link";

const GetDOB = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.birthday}</div>
        <h1>What is your date of birth?</h1>

        <div className={styles.percent_svg}>{svgObject.seventypercent}</div>
        <div className={styles.birthdaywarning_svg}>{svgObject.birthdaywarning}</div>
        <div className={styles.form_input}></div>
      </form>

      <div className={styles.next_question}>
        <Link href="/patient/registerform/medbuddy-goals"> Next &gt;</Link>
      </div>
    </section>
  );
};

export default GetDOB;

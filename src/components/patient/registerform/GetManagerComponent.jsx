import svgObject from "@/styles/svgIcons";
import styles from './FormStyles.module.css'
import Link from "next/link";

const GetMangerComponent = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.bioName}</div>
        <h1>Whose health are you managing?</h1>

        <div className={styles.percent_svg}>
          {svgObject.thirtypercent}
        </div>
        <div className={styles.form_input}>
          <div className={styles.option}>My Health</div>
          <div className={styles.option}>Someone else's health</div>
        </div>
      </form>

      <div className={styles.next_question}>
        <Link href="/patient/registerform/gender-identity"> Next &gt;</Link>
      </div>
    </section>
  );
};

export default GetMangerComponent;

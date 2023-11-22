import svgObject from "@/styles/svgIcons";
import styles from "./FormStyles.module.css";
import Link from "next/link";

const GetGender = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.gender}</div>
        <h1>How do you identify?</h1>

        <div className={styles.percent_svg}>{svgObject.fiftyPercent}</div>
        <div className={styles.form_input}>
          <ul className={styles.pick_gender}>
            <li>
              <label className={styles.circular_checkbox}>
                <input type="checkbox" name="Male"/>
                <span class={styles.checkmark}></span>
               Male
              </label>
            </li>
            <li>
            <label className={styles.circular_checkbox}>
                <input type="checkbox" name="Female"/>
                <span class={styles.checkmark}></span>
             Female
              </label>
            </li>
            <li>
            <label className={styles.circular_checkbox}>
                <input type="checkbox" name="not-specified"/>
                <span class={styles.checkmark}></span>
            I'd rather not say
              </label>
            </li>
          </ul>
        </div>
      </form>

      <div className={styles.next_question}>
        <Link href="/patient/registerform/date-of-birth"> Next &gt;</Link>
      </div>
    </section>
  );
};

export default GetGender;

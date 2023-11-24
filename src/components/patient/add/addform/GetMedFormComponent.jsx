import styles from "./addFormStyles.module.css";
import svgObject from "@/styles/svgIcons";
import Link from "next/link";

const GetMedFormComponent = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.pharmacy}</div>
        <h1>What form is the med?</h1>
        <div className={styles.percent_svg}>{svgObject.twentyPercent}</div>

        <div className={styles.form_input}>
          <ul className={styles.medform_list}>
            <li>
              <div className={styles.medform_list_item}>
                <div className={styles.medform_svg}>{svgObject.tablets}</div>
                <div>Tablet</div>
              </div>
              <div> &gt;</div>
            </li>
            <li>
              <div className={styles.medform_list_item}>
                <div className={styles.medform_svg}>{svgObject.solution}</div>
                <div>Solution</div>
              </div>
              <div> &gt;</div>
            </li>
            <li>
              <div className={styles.medform_list_item}>
                <div className={styles.medform_svg}>{svgObject.capsule}</div>
                <div>Capsule</div>
              </div>
              <div> &gt;</div>
            </li>
            <li>
              <div className={styles.medform_list_item}>
                <div className={styles.medform_svg}>{svgObject.needle}</div>
                <div>Others</div>
              </div>
              <div> &gt;</div>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
};

export default GetMedFormComponent;

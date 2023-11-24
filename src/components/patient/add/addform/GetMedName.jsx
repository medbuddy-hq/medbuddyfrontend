import styles from "./addFormStyles.module.css";
import Link from "next/link";
import svgObject from "@/styles/svgIcons";

const GetMedName = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
        <h2>Add New Meds</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.form_input}>
          <div className={styles.med_name_svg}> {svgObject.pharmacy}</div>
          <input className={styles.med_name_input} type="text" placeholder="Enter name of medication here" name="drug_name" />
        </div>
      </form>

      <div className={styles.next_question}>
        <Link href="/patient/add/med-form"> Next &gt;</Link>
      </div>
    </section>
  );
};

export default GetMedName;

import styles from "./addFormStyles.module.css";
import Link from "next/link";
import svgObject from "@/styles/svgIcons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import MedTimeItem from "./MedTimeItem";

const GetMedTime = (props) => {
    const p = [1,2,3]
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
        <h2>Add New Meds</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.pharmacy}</div>
        <h1>Set the time needed for each dosage</h1>
        <div className={styles.percent_svg}>{svgObject.seventypercent}</div>
        <div className={styles.form_input}>
            {p.map(el => {
                <MedTimeItem/>
            })}
        </div>
      </form>

      <div className={styles.next_question}>
        <Link href="/patient/add/med-form"> Next &gt;</Link>
      </div>
    </section>
  );
};

export default GetMedTime;

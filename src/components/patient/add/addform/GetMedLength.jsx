import styles from "./addFormStyles.module.css";
import svgObject from "@/styles/svgIcons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { registerMedicationActions } from "@/store/generalStore";

const GetMedLength = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();


  const updateLengthHandler = (event) => {
    const days = parseInt(event.target.dataset.days);
    dispatch(registerMedicationActions.updateTotalDosage(days));
    router.push('/patient/add/med-comments')

  };

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
        <h2>Add New Meds</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.svg}>{svgObject.calendarSvg()}</div>
        <h1>How long is your treatment?</h1>
        <div className={styles.percent_svg}>{svgObject.hundredpercent}</div>

        <div className={styles.form_input}>
          <ul className={styles.medform_list}>
            <li data-days="5" onClick={updateLengthHandler}>
              <div className={styles.medform_list_item}>
                <div>5 days</div>
              </div>
              <div> &gt;</div>
            </li>
            <li data-days="7" onClick={updateLengthHandler}>
              <div className={styles.medform_list_item}>
                <div>1 week</div>
              </div>
              <div> &gt;</div>
            </li>
            <li data-days="15" onClick={updateLengthHandler}>
              <div className={styles.medform_list_item}>
                <div>15 days</div>
              </div>
              <div> &gt;</div>
            </li>
            <li>
              <Link href="">
                <div className={styles.medform_list_item}>
                  <div>Set number of days</div>
                </div>
                <div> &gt;</div>
              </Link>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
};

export default GetMedLength;

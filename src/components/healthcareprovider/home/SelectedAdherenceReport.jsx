import styles from "./SelectedAdherenceReport.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import svgObject from "@/styles/svgIcons";

const SelectedAdherenceReport = (props) => {
  const patientData = useSelector(
    (state) => state.healthCareProvider.selectedPatient
  );
  console.log(patientData);

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="/healthcareprovider/home" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
        <div className={styles.title}>
          <h3>Patient Adherence</h3>
        </div>
      </div>
      <div className={styles.patientName}>
        <h4>{patientData.name}</h4>
      </div>
    <div className={styles.adherence_item}>{svgObject.adherenceFrameOneSvg}</div>
    <div className={styles.adherence_item}>{svgObject.adherenceFrameTwoSvg}</div>
    <div className={styles.chatIcon}>
<Link href=''>
    {svgObject.chatBox}
</Link>
    </div>
    </section>
  );
};

export default SelectedAdherenceReport;

import svgObject from "@/styles/svgIcons";
import styles from "./MedicationSnippetComponent.module.css";
import { useSelector } from "react-redux";

const MedicationSnippetComponent = (props) => {
  const medications = useSelector(state => state.patientData.data.allMeds);
  console.log(medications)

  return (
    <main className={styles.med_container}>
      <div className={styles.med_container_text}>
        <h3>Ongoing Medication</h3>
      </div>
      {medications.map((el) => {
        return (
          <div key={Math.random() * 20000}
            className={
              el.form === 'Solution'
                ? styles.med_card
                : `${styles.med_card} ${styles.red_pill}`
            }
          >
            <div className={styles.drug_image}>
              <div>{el.form === 'Solution' ? svgObject.bottle : svgObject.pills}</div>
            </div>
            <div className={styles.drug_details}>
              <h2 className={styles.drug_name}>{el.name}</h2>
              <p>
                <span>{el.strength}  </span>
                <span>
                     {el.comment}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default MedicationSnippetComponent;

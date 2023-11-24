import svgObject from "@/styles/svgIcons";
import styles from "./MedicationSnippetComponent.module.css";

const MedicationSnippetComponent = (props) => {
  const dum = [1, 2, 3];
  return (
    <main className={styles.med_container}>
      <div className={styles.med_container_text}>
        <h3>Ongoing Medication</h3>
      </div>
      {dum.map((el) => {
        return (
          <div
            className={
              el / 2 === 1
                ? styles.med_card
                : `${styles.med_card} ${styles.red_pill}`
            }
          >
            <div className={styles.drug_image}>
              <div>{el / 2 === 1 ? svgObject.bottle : svgObject.pills}</div>
            </div>
            <div className={styles.drug_details}>
              <h2 className={styles.drug_name}>Ampicillin</h2>
              <text>
                <span>250mg. </span>
                <span>
                  Take 1 Pill(s) before eating. Do not take with beverages,
                  Lactose reduces the effectiveness of this drugs.
                </span>
              </text>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default MedicationSnippetComponent;

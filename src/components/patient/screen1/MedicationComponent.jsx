import svgObject from "@/styles/svgIcons";
import styles from "./MedicationComponent.module.css";

const MedicationComponent = (props) => {
  const dum = [1, 2, 3];
  return (
    <main className={styles.med_container}>
      <div className={styles.med_container_text}>
        <h3>Ongoing Medication</h3>
      </div>
      {dum.map((el) => {
        return (
          <div className={el / 2 === 1 ? styles.med_card : `${styles.med_card} ${styles.red_pill}`}>
            <div className={styles.drug_image}>
              <div>{el/ 2 === 1 ? svgObject.bottle : svgObject.pills}</div>
            </div>
            <div className={styles.drug_details}>
              <h2 className={styles.drug_name}>Ampicillin</h2>
              <text>
                <span>250mg. </span>
                <span>
                  bkdidkjhvoher;ljgiohye boeug8iyrepysg vfhipfoeht8ygir bjeklugu
                  ieherg iehriie ooe
                </span>
              </text>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default MedicationComponent;

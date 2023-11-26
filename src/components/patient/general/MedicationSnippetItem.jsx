import styles from "./MedicationSnippetItem.module.css";
import svgObject from "@/styles/svgIcons";

const MedicationSnippetItem = (props) => {
  return (
    <section className={styles.med_container}>
      <ul className={styles.top_list}>
        <li>{svgObject.infoIcon}</li>
        <li>
          <div>{svgObject.smallDeleteSvg}</div>
          <div>{svgObject.editSwordSvg}</div>
        </li>
      </ul>
      <div className={styles.blue_container}>
        <div className={styles.drug_header}>
          <div>{svgObject.bottle}</div>
          <div>Ampicillin</div>
        </div>
        <div className={styles.info_buttons}>
          <div className={styles.info_buttons_item}>
            <div>{svgObject.whiteCalender}</div>
            <div>Scheduled for 7:35 PM, today.</div>
          </div>
          <div className={styles.info_buttons_item}>
            <div>{svgObject.instructionsSvg}</div>
            <div>
              250mg. Take 1 Pill(s) before eating. Do not take with beverages,
              Lactose reduces the effectiveness of this drugs.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.action_buttons}>
        <div className={styles.action_buttons_item}>
          <div>{svgObject.skipSvg}</div>
          <div>Skip</div>
        </div>
        <div className={styles.action_buttons_item}>
          <div>{svgObject.takeSvg}</div>
          <div>Take</div>
        </div>
      </div>
    </section>
  );
};

export default MedicationSnippetItem;

//name, form, time , dosage, comment

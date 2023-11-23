import styles from './HistoryItem.module.css'
import svgObject from "@/styles/svgIcons";

const HistoryItem = () => {
    return <div className={styles.history_item}>
    <div className={styles.specific_details}>
      <div className={styles.specific_title}>
        Malaria Treatment
      </div>
      <div className={styles.specific_date}> 27/4/2023 </div>
    </div>
    <div className={styles.threeDots}>{svgObject.threeDots}</div>
</div>;
}

export default HistoryItem;
import styles from "./PatientHistoryComponent.module.css";
import Link from "next/link";
import HistoryItem from "../general/HistoryItem";

const PatientHistoryComponent = (props) => {
  const dum = [1, 2, 3];
  return (
    <main className={styles.history_container}>
      <div className={styles.history_container_text}>
        <h3>History</h3>
        <Link href='/'> See all</Link>
      </div>
      {dum.map((el) => {
        return <HistoryItem/>
      })}
    </main>
  );
};

export default PatientHistoryComponent;

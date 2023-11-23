import styles from "./PatientHomeComponent.module.css";
import svgObject from "@/styles/svgIcons";
import MedicationSnippetComponent from "./MedicationSnippetComponent";
import PatientHistoryComponent from "./PatientHistoryComponent";
import SearchComponent from "@/components/general/SearchComponent";

const PatientHomeComponent = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.welcome_container}>
        <li>
          <div className={styles.welcome_text}>
            <h3>Welcome Back!</h3>
          </div>
          <div className={styles.welcome_name}>
            <h4>Winston Ekpong!</h4>
          </div>
        </li>
        <li className={styles.notifications}>{svgObject.notification}</li>
      </ul>
      <SearchComponent/>
      <MedicationSnippetComponent />
      <PatientHistoryComponent />
    </section>
  );
};

export default PatientHomeComponent;

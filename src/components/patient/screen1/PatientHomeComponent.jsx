import styles from "./PatientHomeComponent.module.css";
import svgObject from "@/styles/svgIcons";
import MedicationComponent from "./MedicationComponent";
import PatientHistoryComponent from "./PatientHistoryComponent";
import SearchComponent from "@/components/general/SearchComponent";

const PatientHomeComponent = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.welcome_container}>
        <li className={styles.patient_image}>
          <img src="https://www.sportsadda.com/static-assets/waf-images/aa/42/35/16-9/Yze0Zg0Uz2.jpg?v=1.5&w=420%20420w" />
        </li>
        <li>
          <div className={styles.welcome_text}>
            <h3>Welcome Back!</h3>
          </div>
          <div>
            <h4>Winston Ekpong</h4>
          </div>
        </li>
        <li className={styles.notifications}>{svgObject.notification}</li>
      </ul>
      <SearchComponent/>
      <MedicationComponent />
      <PatientHistoryComponent />
    </section>
  );
};

export default PatientHomeComponent;

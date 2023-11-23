import PatientHomeComponent from "./PatientHomeComponent";
import styles from "./IndexComponent.module.css";

const IndexComponent = () => {
  return (
    <section className={styles.container}>
      <PatientHomeComponent />
    </section>
  );
};

export default IndexComponent;

import styles from "./ErrorComponent.module.css";
import svgObject from "@/styles/svgIcons";
import Link from "next/link";
import { useRouter } from "next/router";

const ErrorComponent = (props) => {
  const router = useRouter();

  const setGoBackHandler = () => {
    const token = localStorage.getItem("token");
    if (token === "undefined" || token === null) {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.back} onClick={setGoBackHandler}>
        <div className={styles.back_button}>{svgObject.goBack}</div>
      </div>
      <div className={styles.container_inner}>
        <div className={styles.medBuddyLogo}>{svgObject.medBuddyLogo}</div>
        <h3>For some reason, we could not get you what you wanted</h3>
        <div className={styles.errorSvg}>{svgObject.errorSvg}</div>
      </div>
      <div className={styles.get_started} onClick={setGoBackHandler}>
        <div href="medic-patient"> Get Started</div>
      </div>
    </section>
  );
};

export default ErrorComponent;

import styles from "../../healthcareprovider/home/HamBurger.module.css";
import svgObject from "@/styles/svgIcons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PatientHamBurgerComponent = (props) => {
  const [deleteToken, setDeleteToken] = useState(false);
  const router = useRouter();

useEffect(() => {
   
    const removeToken = () => {
        localStorage.removeItem('token'); 
      };

      removeToken()
}, [deleteToken])

  const logOutHandler = (event) => {
    setDeleteToken(true);
    router.push("/");
  };

  return (
    <section className={styles.container}>
      <main className={styles.hamburger_div}>
        <div onClick={props.removeHamburger}> X </div>
        <div className={styles.logo}>{svgObject.medbuddyBW}</div>
        <div className={styles.patients_heading}>Patients</div>
        <div className={styles.invite}>
          <div className={styles.shareApp}>{svgObject.shareApp}</div>
          <div> Invite Professional</div>
        </div>
        <div className={styles.settings_heading}>
          <div className={styles.sub_settings}> Settings</div>
          <div>
            <div className={styles.shareApp}>{svgObject.whiteQuestion}</div>
            <div>Restart help tour</div>
          </div>
          <div>
            <div className={styles.shareApp}>{svgObject.shareApp}</div>
            <div>Share app with friends</div>
          </div>
        </div>
        <div className={styles.log_out} onClick={logOutHandler}>
          <div className={styles.shareApp}>{svgObject.logOutDoor}</div>
          <div className={styles.logOut}>Log Out</div>
        </div>
      </main>
    </section>
  );
};

export default PatientHamBurgerComponent;

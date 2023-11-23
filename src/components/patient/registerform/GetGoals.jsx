import svgObject from "@/styles/svgIcons";
import styles from "./FormStyles.module.css";
import Link from "next/link";

const GetGoals = (props) => {
  const goalsArray = [
    {
      goal: "Get Reminders",
      distance: 20,
    },
    {
      goal: "Track Drugs",
      distance: 2,
    },
    {
      goal: "Improve Health",
      distance: 40,
    },
    {
      goal: "Check Up",
      distance: 2,
    },
    {
      goal: "Access Healthcare",
      distance: 40,
    },
    {
      goal: "get Reminders",
      distance: 16,
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Link href="" className={styles.back_button}>
          {svgObject.goBack}
        </Link>
      </div>
      <form className={`${styles.form} ${styles.form_getGoals}`}>
        <div className={styles.svg}>{svgObject.goals}</div>
        <h1>What do you hope to achieve with Medbuddy? </h1>

        <div className={styles.percent_svg}>{svgObject.hundredpercent}</div>
        <div className={styles.warning_svg}>{svgObject.choosemoreWarning}</div>
        <div className={styles.form_input}>
          {goalsArray.map((el) => {
            return <div className={styles.goal_width}>
                <div className={styles.goal_width_option} style={{
                    left: `${el.distance}%`
                }}>{el.goal}</div>
            </div>;
          })}
        </div>
      </form>

      <div className={styles.next_question}>
        <Link href="/patient/registerform/register-complete"> Done  !</Link>
      </div>
    </section>
  );
};

export default GetGoals;

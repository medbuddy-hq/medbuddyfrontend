import svgObject from "@/styles/svgIcons";
import styles from "./FormStyles.module.css";
import Link from "next/link";
import GetGoalItem from "./GetGoalItem";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerPatientActions } from "@/store/generalStore";
import { useState } from "react";

const GetGoals = (props) => {
  const userData = useSelector((state) => state.registerPatient.registerData);
  const router = useRouter();
  const [dataIsFetching, setDataisFetching] = useState(false);
  const dispatch = useDispatch();
  const [goalSelected, setGoalSelected] = useState(false);

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

  const buttonClass = goalSelected
    ? `${styles.button} ${styles.valid_button}`
    : `${styles.button}`;

  const updateSelectedHandler = () => {
    setGoalSelected(true);
  };

  const registerUserHandler = async () => {
    //Here, Since it is the next Question, we make the http request to register the new user
    if (goalSelected) {
      setDataisFetching(true);
      try {
        const registerRequest = await fetch(`/api/register-new`, {
          method: "POST",
          body: JSON.stringify({
            "firstname": "chiemelie",
            "lastname": "victor",
            "dob": "2003-11-22",
            "email": "vickayobiora@gmail.com",
            "password": "1234567",
            "gender": "male"
        }),
        });

        if (!registerRequest.ok) {
          // we handle the error if bad status code comes
          const errorData = await registerRequest.json();
          throw new Error(errorData.error || "Something went wrong");
        }

        console.log(registerRequest.status);

        const response = await registerRequest.json();
        console.log(response);
        localStorage.setItem("token", response.data.token);
        //Navigate to the regComplete page upon completion
        router.push("/patient/registerform/register-complete");
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(userData);
  return (
    <section className={styles.container}>
      {dataIsFetching && (
        <div className={styles.loading_spinner}>
          <TailSpin
            color="#066dfe"
            height="100"
            width="100"
            ariaLabel="tail-spin-loading"
            visible={true}
          />
        </div>
      )}
      {!dataIsFetching && (
        <div>
          <div className={styles.back}>
            <Link href="" className={styles.back_button}>
              {svgObject.goBack}
            </Link>
          </div>
          <form className={`${styles.form} ${styles.form_getGoals}`}>
            <div className={styles.svg}>{svgObject.goals}</div>
            <h1>What do you hope to achieve with Medbuddy? </h1>

            <div className={styles.percent_svg}>{svgObject.hundredpercent}</div>
            <div className={styles.warning_svg}>
              {svgObject.choosemoreWarning}
            </div>
            <div className={styles.form_input}>
              {goalsArray.map((el) => {
                return (
                  <GetGoalItem
                    key={el.goal}
                    distance={el.distance}
                    goal={el.goal}
                    updateSelectedHandler={updateSelectedHandler}
                  />
                );
              })}
            </div>
          </form>

          <div className={styles.next_question}>
            <div className={buttonClass} onClick={registerUserHandler}>
              Next &gt;
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GetGoals;

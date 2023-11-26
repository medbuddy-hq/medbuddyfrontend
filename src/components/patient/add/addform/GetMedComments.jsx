import styles from "./addFormStyles.module.css";
import Link from "next/link";
import svgObject from "@/styles/svgIcons";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { registerMedicationActions } from "@/store/generalStore";
import { useSelector } from "react-redux";

const GetMedComments = (props) => {
  const [dataIsFetching, setDataisFetching] = useState(false);
  const medData = useSelector((state) => state.registerMedication.medData);

  const [text, setText] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const buttonClass = `${styles.button} ${styles.valid_button}`;

  const updateCommentsHandler = (event) => {
    setText(event.target.value);
  };

  const nextPageHandler = async () => {
    dispatch(
      registerMedicationActions.updateMedicationData([
        {
          comment: text,
        },
      ])
    );

    setTimeout(async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      //For there to be a token, that means a user is signed In
      //We then use said token to make the call
      //Remember, localStorage ALWAYS returns a string
      //If there is no such item, localST returns 'undefined'. It is a string
      if (token !== "undefined") {
        setDataisFetching(true);
        try {
          const registerRequest = await fetch(`/api/register-med`, {
            method: "POST",
            body: JSON.stringify(medData),
            headers: {
              token,
            },
          });

          if (!registerRequest.ok) {
            // we handle the error if bad status code comes
            const errorData = await registerRequest.json();
            throw new Error(errorData.error || "Something went wrong");
          }

          console.log(registerRequest.status);

          const response = await registerRequest.json();
          console.log(response);

          //Navigate to the HomePage page upon completion
          setDataisFetching(false);
          router.push("/patient/home");
        } catch (err) {
          console.log(err);
          router.push("/error");
        }
      } else {
        // we send them back to the login page
        router.push("/");
      }
    }, 2000);
  };

  return (
    <section className={styles.container}>
      {dataIsFetching && (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TailSpin
            color="#066dfe"
            height="70"
            width="70"
            ariaLabel="tail-spin-loading"
            visible={true}
          />
        </div>
      )}
      {!dataIsFetching && (
        <div>
          <div className={styles.back}>
            <Link href="/med-length" className={styles.back_button}>
              {svgObject.goBack}
            </Link>
          </div>
          <div>{svgObject.hundredpercent}</div>
          <form className={styles.form}>
            <div className={styles.form_input}>
              <div className={styles.comment_container}>
                <input
                  onChange={updateCommentsHandler}
                  className={styles.med_name_input_comment}
                  type="text"
                  placeholder="Anything to note? (Optional)"
                  name="drug_name"
                />
              </div>
            </div>
          </form>
          <div className={styles.next_question}>
            <div onClick={nextPageHandler} className={buttonClass}>
              Set &gt;
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GetMedComments;

import { useRouter } from "next/router";
import PatientHomeComponent from "@/components/patient/screen1/PatientHomeComponent";

const patientPage = () => {

    return <PatientHomeComponent/>
}

export default patientPage;

/*
export const getStaticPaths = async () => {
    return {
      paths: [
      // no need to preset allowed params
      ],
      fallback: "blocking",
    };
  };
  

*/
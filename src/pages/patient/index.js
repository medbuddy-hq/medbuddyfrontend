import IndexComponent from "@/components/patient/home/indexComponent";
import TabsComponent from "@/components/patient/general/TabsComponent";

const patientPage = () => {
  return (
    <>
      <IndexComponent/>
      <TabsComponent/>
    </>
  );
};

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

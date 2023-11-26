import HistoryItem from "../general/HistoryItem";
import { useSelector } from "react-redux";

const ActiveMedsComponent = (props) => {
  const activeMeds = useSelector(state => state.patientData.data.activeMeds);

  return (
    <>
      {activeMeds.map((el) => {
        return <HistoryItem key={Math.random() *1000} data={el}/>;
      })}
    </>
  );
};

export default ActiveMedsComponent;

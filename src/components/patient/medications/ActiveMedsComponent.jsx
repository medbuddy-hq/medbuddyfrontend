import HistoryItem from "../general/HistoryItem";

const ActiveMedsComponent = (props) => {
  const dum = [1, 3, 2, 4, 5, 6];
  return (
    <>
      {dum.map((el) => {
        return <HistoryItem />;
      })}
    </>
  );
};

export default ActiveMedsComponent;

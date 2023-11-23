import HistoryItem from "../general/HistoryItem";

const InactiveMedsComponent = (props) => {
  const dum = [1, 3, 2];
  return (
    <>
      {dum.map((el) => {
        return <HistoryItem />;
      })}
    </>
  );
};

export default InactiveMedsComponent;

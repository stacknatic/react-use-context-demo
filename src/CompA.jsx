import CompB from "./CompB";

const CompA = () => {
  return (
    <>
      <div style={{ backgroundColor: "green" }}>CompA will be here</div>
      <div>{info}</div>
      <CompB info={info} />
    </>
  );
};

export default CompA;

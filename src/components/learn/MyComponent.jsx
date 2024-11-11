import "./style.css";

const MyComponent = () => {
  const hoidanit = [1, 2, 3];
  //   const hoidanit = { name: "hoidanit", age: 25 };

  return (
    <>
      <div>{JSON.stringify(hoidanit)} Dat & Hoi Dan IT</div>
      <div>{console.log("Erik")}</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};

export default MyComponent;

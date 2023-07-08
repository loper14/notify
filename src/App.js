import icon from "./logo192.png";

const App = () => {
  let a = () => {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        console.log("working");
        return new Notification("Title", {
          body: "Success",
          icon: icon,
        });
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <button
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "blue",
        }}
        onClick={() => a()}
      >
        Click
      </button>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import AppliedJobRow from "./components/AppliedJobRow";
import AppliedJobHeader from "./components/AppliedJobHeader";
function App() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    // const messageListener = (message) => {
    //   console.log(message.payload);
    //   if (message.type === "DETAILS") {
    //     setDetails(message.payload);
    //   }
    // };

    // chrome.runtime.onMessage.addListener(messageListener);

    // return () => chrome.runtime.onMessage.removeListener(messageListener);

    const fetchApplication = async () => {
      const res = await fetch("http://localhost:8080/application");
      const data = await res.json();
      setDetails(data);
    };
    fetchApplication();
  }, []);

  return (
    <div>
      <h1 className="text-blue-600 m-4">Application Tracker</h1>
      <div className="card">
        <AppliedJobHeader />
        {details.length > 0 &&
          details.map((data) => {
            console.log("this is data", data);
            return <AppliedJobRow details={data} key={data.id} />;
          })}
      </div>
    </div>
  );
}

export default App;

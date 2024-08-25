import { useEffect, useState } from "react";
import { messaging, onMessageListener } from "./firebase";
import { getToken } from "firebase/messaging";
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  async function requestPermission() {
    const vapidKey = "";
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, { vapidKey: vapidKey });
      console.log("Token ", token);
      setToken(token);
    } else if (permission === "denied") {
      alert("Permission not granted for notification");
    }
  }
  useEffect(() => {
    requestPermission();
  }, [])

  return (
    <div className="App">
      <h1>User</h1>
      <h5>{token}</h5>
    </div>
  );
}

export default App;

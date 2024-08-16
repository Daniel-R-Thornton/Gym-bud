import { useEffect, useState } from "react";
import "./App.css";
import { userData } from "./backend/dataTypes.ts";
import { EditUserModalContent } from "./components/modal/EditUserModalContent.tsx";

function App() {
  // no real backend so lets just setup a local storage for now
  const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };
  const getUserData = () => {
    return JSON.parse(localStorage.getItem("user") || "{}");
  };
  const [showModal, setShowModal] = useState(false);
  const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
  };

  useEffect(() => {
    function initializeNewUserIfNotExists() {
      const user = getLocalStorage("user");
      if (!user) {
        // create some sensible defaults
        const newUser: userData = {
          age: 0,
          bio: "",
          created_at: Date.now().toLocaleString(),
          description: "",
          exercises: [],
          first_name: "",
          gyms: [],
          height: 0,
          id: "",
          last_name: "",
          profileImage: "",
          updated_at: Date.now().toLocaleString(),
          weight: 0,
          workouts: [],
        };
        setLocalStorage("user", JSON.stringify(newUser));
      }
    }

    initializeNewUserIfNotExists();
  }, []);

  return (
    <div className="dark:bg-slate-900 bg-slate-100 min-h-screen flex flex-col justify-center gap-8 items-center">
      <div className="dark:text-white text-black text-center">
        {/* simple modal portal for the app */}
        {showModal && (
          <div className="z-50">
            <EditUserModalContent />
          </div>
        )}
        <h1>Gym Tracker</h1>
        <p>Coming soon</p>
      </div>
      <button
        type="button"
        className="text-bold bg-slate-600 drop-shadow-md rounded-md z-0"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      <div className="whitespace-pre text-white"></div>
    </div>
  );
}

export default App;

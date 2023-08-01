// React //
import { useState } from "react";

// Custom //
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [showSideBar, setshowSideBar] = useState(false);

  return (
    <div>
      <SideBar showSideBar={showSideBar} setshowSideBar={setshowSideBar} />
      <NavBar showSideBar={showSideBar} setshowSideBar={setshowSideBar} />
    </div>
  );
}

export default App;

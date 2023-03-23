import { Header } from "./Component/Header/Header";
import { Body } from "./Component/Body/Body";
import { Sidebar } from "./Component/Sidebar/Sidebar";
import { useState } from "react";

export function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  function sidebar(){
    setOpenSidebar(!openSidebar)
  }
  return (
    <>
      <button onClick={sidebar}>click</button>
     {openSidebar ? <Sidebar/>: false}
      <Header/>
      <Body/>
    </>
  );
}


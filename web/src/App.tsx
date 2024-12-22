import "./App.css";

import { useState } from "react";
import HomePage from "./pages/home";
import BoardsPage from "./pages/boards";
import Sidebar, { SidebarItems } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { MonthsProvider } from "./contexts/months";
import { initOxygen } from "oxygenio";

initOxygen()

const pages: SidebarItems[] = [
  {name: 'Home', icon: "ph ph-house", component: <HomePage />, active: true},
  {name: 'Transações', icon: "ph ph-repeat", component: <BoardsPage />, active: false}
]

function App() {
  const [pageIndex, setPageIndex] = useState(0)

  return (
    <div className="dashboard">
      <aside>
        <div className="logo"></div>
        <Sidebar 
          pages={pages} 
          setPage={setPageIndex} 
        />
      </aside>
      <div className="content">
        <Navbar />
        <main>
          <MonthsProvider>
            {pages[pageIndex].component}
          </MonthsProvider>
        </main>
      </div>
      
    </div>
  )
}

export default App

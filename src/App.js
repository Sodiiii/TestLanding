import "./app.css";
import Diagramm from "./components/companyDiagramm/Diagramm";
import { FullStat } from "./components/fullStat/FullStat";
import { Header } from "./components/header/Header";
import { Rate } from "./components/rate/Rate";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Statistics } from "./components/statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main_wrapper">
        <Sidebar />
        <div className="right_block">
          <Diagramm />
          <div className="middle_bars">
            <Rate />
            <Statistics />
          </div>
          <FullStat />
        </div>
      </div>
    </div>
  );
}

export default App;

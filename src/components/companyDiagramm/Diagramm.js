import React from "react";
import "./diagramm.css";

const Diagramm = () => {
  return (
    <div className="wrapper">
      <div className="left_area">
        <h1 className="title">Сводка по компании</h1>

        <div className="statistics">
          <div className="number blue">3</div>
          <div className="info">Человека собеседуется</div>
        </div>

        <div className="statistics">
          <div className="number green">150</div>
          <div className="info">Сотрудников находятся на стажировке</div>
        </div>

        <div className="statistics">
          <div className="number yellow">35</div>
          <div className="info">Сотрудников проходят испытательный срок</div>
        </div>

        <div className="statistics">
          <div className="number purpure">35</div>
          <div className="info">Сотрудника приступают к работе</div>
        </div>

        <div className="statistics">
          <div className="number red">15</div>
          <div className="info">Повышают квалификацию</div>
        </div>
      </div>
      <div className="dia" />
    </div>
  );
};

export default Diagramm;

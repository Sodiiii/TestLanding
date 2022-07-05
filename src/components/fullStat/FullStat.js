import React from "react";
import "./full.css";

export const FullStat = () => {
  return (
    <div className="fullstat_wrapper">
      <div className="fullstat">
        <h1 className="fullstat_top">ГОК г.Мирный</h1>
        <div className="stat_line" />
        <div className="fullstat_items">
          <div className="fullstat_item">
            <h4 className="stat_text">Сотрудников</h4>
            <div className="btn_stat black">300</div>
          </div>

          <div className="fullstat_item">
            <h4 className="stat_text">Прошли успешно</h4>
            <div className="btn_stat green">150</div>
          </div>

          <div className="fullstat_item">
            <h4 className="stat_text">Не сдали</h4>
            <div className="btn_stat purpure">100</div>
          </div>

          <div className="fullstat_item">
            <h4 className="stat_text">Проигнорировали</h4>
            <div className="btn_stat red">50</div>
          </div>
        </div>
      </div>
    </div>
  );
};

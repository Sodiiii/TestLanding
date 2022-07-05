import React from "react";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="side_wrapper">
      <div className="side_item">
        <h4 className="date">06.06.22</h4>
        <h2 className="title">1 инцидент на производстве</h2>
        <h4 className="item_text">
          Сотрудник не прислушался к технике безопасности и получил серьезную
          травму локтевого сустава....
        </h4>
        <a className="show_more" href="##">
          Смотреть подробнее
        </a>
      </div>

      <div className="side_item">
        <h4 className="date">03.06.22</h4>
        <h2 className="title">5 сотрудников уходят в отпуск</h2>
        <h4 className="item_text">
          С 10.06.22 сотрудники уходт в запланированный отпуск
        </h4>
        <a className="show_more" href="##">
          Смотреть подробнее
        </a>
      </div>

      <div className="side_item">
        <h4 className="date">02.06.22</h4>
        <h2 className="title">
          135 сотрудников прошли инструктаж по технике безопасности
        </h2>
        <h4 className="item_text">
          95% сотрудников прошли успешно технику безопасности
        </h4>
        <a className="show_more" href="##">
          Смотреть подробнее
        </a>
      </div>

      <div className="side_item">
        <h4 className="date">28.05.22</h4>
        <h2 className="title">Открыт набор сотрудников</h2>
        <h4 className="item_text">
          После создания нового отдела, мы открыли набор сотрудников. Кол-во
          вакансий составляет 35 предложений.
        </h4>
        <a className="show_more" href="##">
          Смотреть подробнее
        </a>
      </div>
    </div>
  );
};

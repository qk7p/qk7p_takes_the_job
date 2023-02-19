import React from "react";
import "./ProfileHeader.scss";
import { ProfileHeaderIconBar } from "./ProfileHeaderIconBar/ProfileHeaderIconBar";

export interface IProfileHeaderProps {
  onPrint: () => void;
}

export const ProfileHeader: React.FC<IProfileHeaderProps> = ({ onPrint }) => {
  return (
    <div className="ProfileHeader">
      <div className="ProfileHeaderPhotoContainer">
        <img src="images\me.jpeg" className="ProfilePhoto" />
      </div>
      <div className="ProfileHeaderInfoContainer">
        <h2>дмитрий</h2>
        <h1>морозов</h1>
        <p>Front-end разработчик</p>
      </div>
      <div className="ProfileContacts">
        <div>
          <p className="ProfileItemTitle">Локация</p>
          <p>МО, Раменское</p>
        </div>
        <div>
          <p className="ProfileItemTitle">Телефон</p>
          <a href="tel:+7968-647-20-77">8-968-647-20-77</a>
        </div>
        <div>
          <p className="ProfileItemTitle">Сайт</p>
          <p>qk7p.ru</p>
        </div>
        <div>
          <p className="ProfileItemTitle">Почта</p>
          <a href="mailto:d.morozov@qk7s.ru">d.morozov@qk7s.ru</a>
        </div>
      </div>
      <div className="ProfileHeaderIconBar">
        <ProfileHeaderIconBar onPrint={onPrint} />
      </div>
    </div>
  );
};

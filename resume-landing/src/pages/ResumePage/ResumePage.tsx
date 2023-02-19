import React, { useRef } from "react";
import { ProfileCard } from "./ProfileCard/ProfileCard";
import { ProfileCardItem } from "./ProfileCard/ProfileCardItem/ProfileCardItem";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import Globous from "../../assets/icons/Globous.png";
import Pi from "../../assets/icons/Pi.png";
import "./ResumePage.scss";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { RecommendItem } from "./ProfileCard/RecommendItem/RecommendItem";
import { useReactToPrint } from "react-to-print";

export const ResumePage: React.FC = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    
    <div className="ResumePage" ref={componentRef}>
      <ProfileHeader onPrint={handlePrint} />
      <ProfileCard title="Что изучаю">
        <ProfileCardItem iconType="React" description="React" />
        <ProfileCardItem iconType="TS" description="TypeScript" />
        <ProfileCardItem iconType="Redux" description="Redux" />
        <ProfileCardItem iconType="CSS" description="CSS" />
        <ProfileCardItem iconType="HTML" description="HTML" />
      </ProfileCard>
      <ProfileCard title="Мои проекты">
        <ProjectCard />
      </ProfileCard>
      <ProfileCard title="Мои навыки">
        <ProfileCardItem description="Английский уровня A2 - B1" />
        <ProfileCardItem description="Саморганизованность" />
        <ProfileCardItem description="Коммуникабельность" />
      </ProfileCard>
      <ProfileCard title="Что ожидаю">
        <ProfileCardItem
          description="Быть востребованным специалистом и реализовывать различные
                  идеи."
        />
        <ProfileCardItem description="Возможность постоянно развиваться и охватывать новые технологии." />
      </ProfileCard>
      <ProfileCard title="Опыт работы">
        <ProfileCardItem
          imgSrc={Globous}
          description="ведущий менеджер"
          subInfo="2012 - 2015 г."
          className="ProfileCardItemImgIcon"
        />
        <ProfileCardItem
          imgSrc={Pi}
          description="технолог"
          subInfo="2015 - 2017 г."
          className="ProfileCardItemImgIcon"
        />
        <ProfileCardItem
          iconType="DixiPro"
          description="технолог"
          subInfo="с 2017 г."
        />
      </ProfileCard>
      <ProfileCard title="Чем увлекаюсь">
        <ProfileCardItem iconType="Fishing" description="Ловля хищной рыбы" />
        <ProfileCardItem iconType="BirdWatching" description="Бёрдвотчинг" />
        <ProfileCardItem iconType="Music" description="Игра на сэмплере" />
      </ProfileCard>
      <ProfileCard title="Рекоммендации" className="ResumePageRecommendCard">
        <RecommendItem
          name="Сергей Кондахсазов"
          position="Руководитель КТО"
          phone="+7-926-520-92-94"
        />
        <RecommendItem
          name="Сергей Кулижонков"
          position="Генеральный директор"
          phone="+7-916-674-38-64"
        />
        <RecommendItem
          name="Инна Никитченко"
          position="Коммерческий директор"
          phone="+7-985-058-45-40"
        />
      </ProfileCard>
    </div>
  );
};

import { Button } from "components";
import React, { useState } from "react";
import "./RecommendItem.scss";

export interface IRecommendItemProps {
  className?: string;
  name: string;
  phone: string;
  position: string;
}

export const RecommendItem: React.FC<IRecommendItemProps> = ({
  className,
  name,
  phone,
  position,
}) => {
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  const showPhone = (event: React.MouseEvent) => {
    setIsPhoneVisible(true);
  };

  return (
    <div className="RecommendItem">
      <p className="RecommendItemName">{name}</p>
      <p className="RecommendItemPosition">{position}</p>
      {isPhoneVisible ? (
        <a href={`tel:${phone}`}>{phone}</a>
      ) : (
        <div className="RecommendItemPhoneContainer">
          <label>Телефон:</label>
          <Button onClick={showPhone}>показать</Button>
        </div>
      )}
    </div>
  );
};

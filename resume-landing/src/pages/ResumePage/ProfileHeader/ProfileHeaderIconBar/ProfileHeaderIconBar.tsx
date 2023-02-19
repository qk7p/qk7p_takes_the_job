import { IconBar } from "components";
import { IconBarListItem } from "components/IconBar/IconBar";
import React from "react";

export interface IProfileHeaderIconBarProps {
  onPrint: () => void;
}

export const ProfileHeaderIconBar: React.FC<IProfileHeaderIconBarProps> = ({
  onPrint,
}) => {
  const iconList: IconBarListItem[] = [
    {
      icon: "VK",
      onClick: () => {
        window.open("https://vk.com/mr.qk7p", "_blank");
      },
    },
    {
      icon: "TG",
      onClick: () => {
        window.open("https://t.me/qk7ps", "_blank");
      },
    },
    {
      icon: "WA",
      onClick: () => {
        window.open(
          " https://api.whatsapp.com/send?phone=79686472077&text=Привет",
          "_blank"
        );
      },
    },
    {
      icon: "GitHub",
      onClick: () => {
        window.open(" https://github.com/qk7p", "_blank");
      },
    },
    {
      icon: "Print",
      onClick: onPrint,
    },
  ];

  return (
    <div className="ProfileHeaderIconBar">
      <IconBar iconsList={iconList} />
    </div>
  );
};

import { FC, useState } from "react";
import { IconType } from "../icon/IconType";
import styles from "./tab.module.scss";
import classNames from "classnames";
import Icon from "../icon/Icon";
import { newGuid } from "@/utils/newGuid";

export type TabItem = {
  icon: IconType;
  label?: string;
  element: React.ReactNode;
  isActive?: boolean;
};

export interface ITabProps {
  items: TabItem[];
  className?: string;
}

const Tab: FC<ITabProps> = ({ items, className }) => {
  const [activeElement, setActiveElement] = useState<React.ReactNode>(
    items[0].element
  );

  const [data, setData] = useState(items);

  const handleClick = (index: number) => {
    setActiveElement(items[index].element);
    const tempArray = [...data];
    tempArray.forEach((element, _index) => {
      if (index !== _index) {
        element.isActive = false;
      } else {
        element.isActive = true;
      }
    });
    setData(tempArray);
  };

  return (
    <div className={classNames(styles.tab, className)}>
      <div className={styles.elements}>{activeElement}</div>
      <div className={styles.navbar}>
        {data.map((item, index) => (
          <div
            className={classNames(styles.navItem, {
              [styles.navItem_active]: item.isActive,
            })}
            onClick={() => handleClick(index)}
            key={newGuid()}
          >
            {item.icon && (
              <div className={styles.icon}>
                <Icon type={item.icon} />
              </div>
            )}
            {item.label && (
              <div
                className={classNames(styles.label, {
                  [styles.label_active]: item.isActive,
                })}
              >
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;

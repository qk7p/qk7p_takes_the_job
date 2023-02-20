import classNames from "classnames";
import IconButton from "components/Button/IconButton";
import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Carousel.scss";

export interface ICarouselProps {
  className?: string;
  firstElement?: number;
  data: React.ReactNode[];
}

export type SwipeDirection = "right" | "left" | "none";

export const Carousel: React.FC<ICarouselProps> = ({
  className,
  firstElement = 0,
  data,
}) => {
  const [activeElement, setActiveElement] = useState(firstElement);
  const nodeRef = useRef(null);
  const [itemMoved, setItemMoved] = useState(false);
  const [direction, setDirection] = useState<SwipeDirection>("none");

  const handleSwipeLeft = (event: React.MouseEvent) => {
    if (activeElement > 0) {
      setActiveElement((prev) => prev - 1);
      setDirection("left");
      setItemMoved(true);
    }
    if (activeElement == 0) {
      setActiveElement(data.length - 1);
      setDirection("left");
      setItemMoved(true);
    }
  };

  const handleSwipeRight = (event: React.MouseEvent) => {
    if (activeElement < data.length - 1) {
      setActiveElement((prev) => prev + 1);
      setDirection("right");
      setItemMoved(true);
    }
    if (activeElement == data.length - 1) {
      setActiveElement(0);
      setDirection("right");
      setItemMoved(true);
    }
  };

  return (
    <div className={classNames("Carousel", className)}>
      <IconButton
        type="Arrow"
        className="CarouselArrowLeft"
        onClick={handleSwipeLeft}
      />
      <IconButton
        type="Arrow"
        className="CarouselArrowRight"
        onClick={handleSwipeRight}
      />
      <CSSTransition
        timeout={300}
        nodeRef={nodeRef}
        in={itemMoved}
        onEntered={() => setItemMoved(false)}
        classNames={direction}
      >
        <div className="CarouselDataContainer" ref={nodeRef}>
          {data && data[activeElement]}
        </div>
      </CSSTransition>
    </div>
  );
};

import { Carousel } from "components";
import React, { useRef } from "react";
import { ProjectItem } from "./ProjectItem/ProjectItem";
import WavCompressorPreview from "/images/wav-compressor-preview.jpg";
import WorstSitePreview from "/images/worst-site-preview.jpg";
import { CSSTransition } from "react-transition-group";
import "./ProjectCard.scss";

const wavCompressor = (
  <ProjectItem
    title="Wav-Compressor"
    link="wav-compressor.qk7p.ru"
    description="Приложение для сжатия WAV файлов"
    previewImage={WavCompressorPreview}
  />
);

const worstSite = (
  <ProjectItem
    title="Worst Site Ever"
    link="theworldsworstwebsiteever.com"
    description="Просто затычка для теста"
    previewImage={WorstSitePreview}
  />
);

const initArray: React.ReactNode[] = [wavCompressor, worstSite];

export const ProjectCard: React.FC = () => {
  const nodeRef = useRef(null);

  return (
    <div className="ProjectCard">
        <Carousel
          data={initArray}
        />
    </div>
  );
};

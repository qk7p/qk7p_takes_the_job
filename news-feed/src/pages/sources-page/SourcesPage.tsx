import Sources from "@/components/sources/Sources";
import { FC } from "react";
import styles from "./sources-page.module.scss";

const SourcesPage: FC = () => {
  return (
    <div className={styles.sourcesPage}>
      <h1>Источники</h1>
      <Sources />
    </div>
  );
};

export default SourcesPage;

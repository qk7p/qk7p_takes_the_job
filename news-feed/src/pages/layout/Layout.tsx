import { FC } from "react";
import Header from "@components/header/Header";
import styles from "./layout.module.scss";
import Footer from "@/components/footer/Footer";
import Loading from "@/components/loading/Loading";

export interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.appHeader} />
      <div className={styles.content}>{children}</div>
      <Footer className={styles.appFooter} />
    </div>
  );
};

export default Layout;

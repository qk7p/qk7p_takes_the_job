import Page404 from "@/pages/404/page404";
import Layout from "@/pages/layout/Layout";
import LoginPage from "@/pages/login-page/LoginPage";
import NewsPage from "@/pages/news-page/NewsPage";
import RequireAuth from "@/routes/RequireAuth/RequireAuth";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./app.module.scss";
import RegistrationPage from "@/pages/registration-page/RegistrationPage";
import RegistrationSuccess from "@/pages/registration-page/registration-success/RegistrationSuccess";
import Profile from "../profile/Profile";
import Sources from "../sources/Sources";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Layout>
        <Routes>
          <Route path="/" element={<RequireAuth outlet={<NewsPage />} />} />

          <Route path="/registration" element={<RegistrationPage />} />
          <Route
            path={"registration/success"}
            element={<RegistrationSuccess />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;

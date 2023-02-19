import React from "react";
import { ResumePage } from "../../pages";
import Layout from "../Layout";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <ResumePage />
      </Layout>
    </div>
  );
};

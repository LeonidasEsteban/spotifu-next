import React from "react";
import Body from "../components/body";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Logo from "../components/logo";
import Menu from "../components/menu";
import List from "../components/list";
import Footer from "../components/footer";

export default function Base({ children }) {
  return (
    <Body>
      <Layout>
        <Sidebar>
          <Logo />
          <Menu />
          <List />
        </Sidebar>
        <div className="page">{children}</div>
        <Footer />
      </Layout>
    </Body>
  );
}

"use client";
import { App, Page } from "konsta/react";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <App theme="ios">
      <Page>{children}</Page>
    </App>
  );
};

export default Layout;

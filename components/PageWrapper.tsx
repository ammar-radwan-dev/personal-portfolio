import React, { ReactNode } from "react";
import Shell from "./Shell";
import SplitTitle from "./SplitTitle";
import Contact from "./Contact";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Shell>
      <section className="inner-page">
        {children}
        <Contact />
      </section>
    </Shell>
  );
};

export default PageWrapper;

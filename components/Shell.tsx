"use client";

import { ReactNode } from "react";
import ProfileCard from "./ProfileCard";
import Navbar from "./Navbar";
import { useReveal } from "@/hooks/useReveal";

const Shell = ({ children }: { children: ReactNode }) => {
  useReveal();
  return (
    <main className="site-shell">
      <Navbar />
      <div className="page-grid">
        <ProfileCard />
        <div className="content-column">{children}</div>
      </div>
    </main>
  );
};

export default Shell;

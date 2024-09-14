"use client";

import { ReactNode } from "react";
import { Header } from "./header";

type Props = {
  children: ReactNode;
};

const user = {
  id: "sample id",
  name: "三島 智昭",
  imageUrl: "/sample_profile.png",
  tag: "#キャンプ\n#プログラミング",
};

export const App: React.FC<Props> = ({ children }) => (
  <>
    <Header user={user} onProfileToggle={() => alert("toggle")} />
    {children}
  </>
);

import type { CSSProperties } from "react";

export type Theme = "light" | "dark";

export type Service = {
  n: string;
  icon: string;
  title: string;
  desc: string;
};

export type Project = {
  idx: string;
  title: string;
  desc: string;
  type: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  desc: string;
};

export type Stat = {
  n: string;
  l: string;
};

export type StyleMap = Record<string, CSSProperties>;

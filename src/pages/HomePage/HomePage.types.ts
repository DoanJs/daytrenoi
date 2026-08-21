import { PageData } from "../../models/site";

export type HomePageData = PageData;

export type QuickTestKey =
  | "tu-ky"
  | "cham-noi"
  | "giac-quan"
  | "phat-am";

export type QuickTestLevel = "thap" | "vua" | "cao";

export type QuickTestScale = [label: string, points: number];
export type QuickTestItem = [question: string, reverse: 0 | 1];
export type QuickTestBand = [
  min: number,
  max: number,
  level: QuickTestLevel,
  title: string,
  description: string,
];
export type QuickTestAgeGroup = [
  id: string,
  label: string,
  questions: string[],
];
export type QuickTestGroup = [
  title: string,
  questions: string[],
];

export interface HomeQuickTestConfig {
  id: QuickTestKey;
  icon: string;
  title: string;
  sub: string;
  intro: string;
  pos0: boolean;
  labMiss: string;
  labHas: string;
  scale: QuickTestScale[];
  items?: QuickTestItem[];
  ageGroups?: QuickTestAgeGroup[];
  groups?: QuickTestGroup[];
  bands: QuickTestBand[];
  actions: Record<QuickTestLevel, string[]>;
  note?: string;
}

export type HomeQuickTestMap = Record<
  QuickTestKey,
  HomeQuickTestConfig
>;

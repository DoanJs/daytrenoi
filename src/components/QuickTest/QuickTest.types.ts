export type QuickTestKey =
  | "tu-ky"
  | "cham-noi"
  | "giac-quan"
  | "phat-am";

export type QuickTestLevel = "thap" | "vua" | "cao";

export interface QuickTestScaleOption {
  label: string;
  score: number;
}

export interface QuickTestItem {
  text: string;
  reverseScore?: boolean;
  group?: string;
}

export interface QuickTestAgeGroup {
  id: string;
  label: string;
  items: string[];
}

export interface QuickTestBand {
  min: number;
  max: number;
  level: QuickTestLevel;
  title: string;
  description: string;
}

export interface QuickTestActions {
  thap: string[];
  vua: string[];
  cao: string[];
}

export interface QuickTestDefinition {
  id: QuickTestKey;
  icon: string;
  title: string;
  sub: string;
  intro: string;

  /**
   * true:
   * - câu bình thường có điểm > 0 được hiểu là "chưa đạt"
   *
   * false:
   * - câu có điểm > 0 được hiểu là "biểu hiện đang có"
   */
  pos0: boolean;

  labMiss: string;
  labHas: string;

  scale: QuickTestScaleOption[];

  items?: QuickTestItem[];
  groups?: {
    name: string;
    items: QuickTestItem[];
  }[];
  ageGroups?: QuickTestAgeGroup[];

  bands: QuickTestBand[];
  actions: QuickTestActions;

  note?: string;
}

export interface QuickTestData {
  eyebrow: string;
  title: string;
  description: string;

  tests: Record<QuickTestKey, QuickTestDefinition>;

  disclaimer: string;

  nextLinks: {
    label: string;
    href: string;
    external?: boolean;
    onlyFor?: QuickTestKey;
  }[];
}

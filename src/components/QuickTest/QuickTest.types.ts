export type QuickTestLevel = "thap" | "vua" | "cao";

export interface QuickTestBand {
  min: number;
  max: number;
  level: QuickTestLevel;
  title: string;
  description: string;
}

export interface QuickTestAgeGroup {
  id: string;
  label: string;
  questions: string[];
}

export interface QuickTestGroup {
  title: string;
  questions: string[];
}

export interface QuickTestDefinition {
  id: string;
  icon: string;
  title: string;
  sub: string;
  intro: string;
  scale: Array<[string, number]>;
  items?: Array<[string, number]>;
  ageGroups?: QuickTestAgeGroup[];
  groups?: QuickTestGroup[];
  bands: QuickTestBand[];
  note?: string;
}

export interface QuickTestData {
  eyebrow: string;
  heading: string;
  description: string;
  tests: QuickTestDefinition[];
  disclaimer: string;
  resultPrimaryLabel: string;
  resultSecondaryLabel: string;
  resultPrimaryUrl: string;
  resultSecondaryUrl: string;
  leadTitle: string;
  leadDescription: string;
  namePlaceholder: string;
  agePlaceholder: string;
  phonePlaceholder: string;
  submitLabel: string;
  zaloBaseUrl: string;
}

export interface PageData {
  texts: Record<string, string>;
  images: Record<string, string>;
  links: Record<string, string>;
  alts: Record<string, string>;
  placeholders: Record<string, string>;
}

export interface NavItem {
  label: string;
  href: string;
  page: string;
}

export interface HeaderData {
  brandTitle: string;
  brandSubtitle: string;
  owl: string;
  navItems: NavItem[];
  zaloLabel: string;
  zaloUrl: string;
}

export interface FooterColumn {
  title?: string;
  links?: Array<{ label: string; href: string }>;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  description: string;
  author: string;
  columns: FooterColumn[];
  copyright: string;
  bottomText: string;
}

export interface FloatingActionsData {
  zaloUrl: string;
  phoneUrl: string;
  zaloTitle: string;
  phoneTitle: string;
}

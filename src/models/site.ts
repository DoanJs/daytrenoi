import { Timestamp } from "firebase/firestore";

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

export interface BookModel {
  id: string;

  name: string;
  category: string;
  description: string;

  price: number;

  coverUrl: string;
  alt: string;

  zaloUrl?: string;

  // Có hiển thị trên web không
  isActive: boolean;

  // Thứ tự hiển thị
  sortOrder: number;

  // Nếu muốn gắn nhãn
  badge?: string;

  // Ví dụ "Cha mẹ", "Chuyên viên", ...
  targetAudience?: string[];

  createAt: Timestamp;
  updateAt: Timestamp;
}

export interface CourseModel {
  id: string;

  /**
   * VD:
   * ancs-1
   * choi-2
   * mxlh-4
   */
  courseId: string;

  title: string;

  schedule: string;

  location: string;

  tuitionFee: number;

  earlyBirdFee?: number;

  earlyBirdDeadline?: string;

  registerUrl: string;

  giftsRemaining?: number;

  giftDescription?: string;

  note?: string;

  isActive: boolean;

  sortOrder: number;

  createAt: Timestamp;

  updateAt: Timestamp;
}

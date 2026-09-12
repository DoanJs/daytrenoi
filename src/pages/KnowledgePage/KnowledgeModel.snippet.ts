// Thêm vào models/site.ts nếu chưa có
export interface KnowledgeModel {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  coverUrl: string;
  content: string;
  author: string;
  views: number;
  isActive: boolean;
  sortOrder: number;
  createAt?: any;
  updateAt?: any;
}

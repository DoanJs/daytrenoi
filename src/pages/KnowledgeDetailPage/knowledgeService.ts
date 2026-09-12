import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { KnowledgeModel } from "../KnowledgePage/KnowledgeModel.snippet";



const KNOWLEDGE_COLLECTION = "knowledgeArticles";

/* =====================================================
 * DANH SÁCH BÀI VIẾT PUBLIC
 * Giống logic getCourses()
 * ===================================================== */

export const getKnowledgeArticles = async (): Promise<KnowledgeModel[]> => {
  const snap = await getDocs(
    query(
      collection(db, KNOWLEDGE_COLLECTION),
      orderBy("sortOrder", "asc"),
    ),
  );

  return snap.docs
    .map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }))
    .filter((item: any) => item.isActive === true) as KnowledgeModel[];
};

/* =====================================================
 * CHI TIẾT BÀI VIẾT THEO SLUG
 * URL:
 * #/kien-thuc-khoa-hoc/mat-dieu-khien-chu-y-loi-noi-o-tre-nho-la-gi
 * ===================================================== */

export const getKnowledgeBySlug = async (
  slug: string,
): Promise<KnowledgeModel | null> => {
  const normalizedSlug = decodeURIComponent(slug || "").trim();

  if (!normalizedSlug) {
    return null;
  }

  const snap = await getDocs(
    query(
      collection(db, KNOWLEDGE_COLLECTION),
      where("slug", "==", normalizedSlug),
      limit(1),
    ),
  );

  if (snap.empty) {
    return null;
  }

  const docSnap = snap.docs[0];

  const article = {
    id: docSnap.id,
    ...docSnap.data(),
  } as KnowledgeModel;

  if (!article.isActive) {
    return null;
  }

  return article;
};

/* =====================================================
 * BÀI VIẾT CÙNG DANH MỤC
 * Filter + sort client-side để không cần composite index.
 * ===================================================== */

interface RelatedKnowledgeOptions {
  category?: string;
  excludeId?: string;
  limitCount?: number;
}

export const getRelatedKnowledgeArticles = async ({
  category,
  excludeId,
  limitCount = 4,
}: RelatedKnowledgeOptions): Promise<KnowledgeModel[]> => {
  if (!category) {
    return [];
  }

  const snap = await getDocs(
    query(
      collection(db, KNOWLEDGE_COLLECTION),
      where("category", "==", category),
    ),
  );

  return snap.docs
    .map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }))
    .filter(
      (item: any) =>
        item.isActive === true &&
        item.id !== excludeId,
    )
    .sort(
      (a: any, b: any) =>
        (a.sortOrder ?? 0) -
        (b.sortOrder ?? 0),
    )
    .slice(0, limitCount) as KnowledgeModel[];
};

import {
  collection,
  doc,
  getDocs,
  increment,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { KnowledgeModel } from "./KnowledgeModel.snippet";



const KNOWLEDGE_COLLECTION = "knowledgeArticles";

export const getKnowledgeArticles = async (): Promise<KnowledgeModel[]> => {
  const snap = await getDocs(
    query(
      collection(db, KNOWLEDGE_COLLECTION),
      where("isActive", "==", true),
      orderBy("sortOrder", "asc"),
    ),
  );

  return snap.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })) as KnowledgeModel[];
};

/* =====================================================
 * TĂNG LƯỢT XEM BÀI VIẾT
 * ===================================================== */

export const increaseKnowledgeViews = async (
  id: string,
): Promise<void> => {
  if (!id) return;

  await updateDoc(
    doc(
      db,
      KNOWLEDGE_COLLECTION,
      id,
    ),
    {
      views: increment(1),
    },
  );
};
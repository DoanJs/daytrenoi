import { headerMockData } from "../components/Header/Header.data";
import { footerMockData } from "../components/Footer/Footer.data";
import { floatingActionsMockData } from "../components/FloatingActions/FloatingActions.data";
import { quickTestMockData } from "../components/QuickTest/QuickTest.data";
import { homePageMockData } from "../pages/HomePage/HomePage.data";
import { parentPageMockData } from "../pages/ParentPage/ParentPage.data";
import { parentClassPageMockData } from "../pages/ParentClassPage/ParentClassPage.data";
import { trainingPageMockData } from "../pages/TrainingPage/TrainingPage.data";
import { transferPageMockData } from "../pages/TransferPage/TransferPage.data";
import { booksPageMockData } from "../pages/BooksPage/BooksPage.data";
import { contactPageMockData } from "../pages/ContactPage/ContactPage.data";

export const mockSiteData = {
  header: headerMockData,
  footer: footerMockData,
  floatingActions: floatingActionsMockData,
  quickTest: quickTestMockData,
  home: homePageMockData,
  parent: parentPageMockData,
  parentClass: parentClassPageMockData,
  training: trainingPageMockData,
  transfer: transferPageMockData,
  books: booksPageMockData,
  contact: contactPageMockData
};

export type SiteData = typeof mockSiteData;

/**
 * Hiện tại trả mock data.
 * Sau này thay phần thân hàm bằng getDoc/getDocs của Firebase/Firestore.
 * Các page/component không cần đổi JSX.
 */
export async function getSiteData(): Promise<SiteData> {
  return Promise.resolve(mockSiteData);
}

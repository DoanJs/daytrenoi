import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FloatingActions from "./components/FloatingActions/FloatingActions";
import HomePage from "./pages/HomePage/HomePage";
import ParentPage from "./pages/ParentPage/ParentPage";
import ParentClassPage from "./pages/ParentClassPage/ParentClassPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import TransferPage from "./pages/TransferPage/TransferPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { useHashRoute } from "./hooks/useHashRoute";
import { getSiteData, mockSiteData, SiteData } from "./services/siteDataService";
import { AdminManagementPage } from "./modules/admin-management";
import AdminGuard from "./modules/admin-management/auth/AdminGuard";
import CoursesPage from "./pages/CoursesPage/CoursesPage";

export default function App() {
  const { page } = useHashRoute();
  const [siteData, setSiteData] = useState<SiteData>(mockSiteData);

  useEffect(() => {
    let mounted = true;

    getSiteData()
      .then((data) => {
        if (mounted) setSiteData(data);
      })
      .catch((error) => {
        console.error("Không thể tải dữ liệu website:", error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  /**
   * ========================================
   * ADMIN
   * ========================================
   */
  if (page === "admin") {
  return (
    <AdminGuard>
      <AdminManagementPage />
    </AdminGuard>
  );
}

  const renderPage = () => {
    switch (page) {
      case "phu-huynh":
        return <ParentPage data={siteData.parent} />;
      case "lop-cha-me":
        return <ParentClassPage data={siteData.parentClass} />;
      case "dao-tao":
        return <TrainingPage data={siteData.training} />;
      case "chuyen-giao":
        return <TransferPage data={siteData.transfer} />;
      case "sach":
        return <BooksPage data={siteData.books} />;
      case "khoa-hoc":
        return <CoursesPage data={siteData.courses} />;
      case "lien-he":
        return <ContactPage data={siteData.contact} />;
      case "index":
      default:
        return <HomePage data={siteData.home} />;
    }
  };

  return (
    <>
      <Header data={siteData.header} currentPage={page} />
      <main>{renderPage()}</main>
      <Footer data={siteData.footer} />
      <FloatingActions data={siteData.floatingActions} />
    </>
  );
}

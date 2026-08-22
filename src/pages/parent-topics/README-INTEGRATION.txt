6 TRANG CHỦ ĐỀ PHỤ HUYNH
=========================

Bộ này chuyển 6 file HTML gốc sang React + TypeScript, mỗi trang gồm 4 file:
- Page.tsx
- Page.css
- Page.data.ts
- Page.types.ts

Các nội dung HTML gốc được giữ trong file data để UI không bị thay đổi cấu trúc nội dung.
Header/Footer không được lặp lại vì App hiện tại đã render Header/Footer dùng chung.
4 trang có bài test dùng component QuickTest dùng chung đã tạo trước đó.

1. COPY VÀO PROJECT
-------------------
Copy folder parent-topic-pages vào:

src/pages/parent-topics/

Nếu đặt đúng path trên, hãy sửa import QuickTest trong 4 page có test từ:
  ../../components/QuickTest/QuickTest
thành:
  ../../components/QuickTest/QuickTest

LƯU Ý: Nếu bạn giữ folder đúng src/pages/parent-topics/<Page>, path thực tế đến components là ../../../components/QuickTest/QuickTest.
Do đó nên sửa import thành:
  import QuickTest from "../../../components/QuickTest/QuickTest";

2. ROUTE HASH
-------------
useHashRoute hiện tại đã tách:
  #phu-huynh/cham-noi
=> page = "phu-huynh"
=> anchor = "cham-noi"

Trong App.tsx lấy cả anchor:

  const { page, anchor } = useHashRoute();

Import:

  import {
    ChamNoiPage,
    GiacQuanPage,
    KheHoMoiVomPage,
    MatTuPage,
    NoiNgongPage,
    TuKyPage,
  } from "./pages/parent-topics";

Sau đó ở case phu-huynh:

  case "phu-huynh": {
    switch (anchor) {
      case "cham-noi":
        return <ChamNoiPage />;
      case "giac-quan":
        return <GiacQuanPage />;
      case "khe-ho-moi-vom":
        return <KheHoMoiVomPage />;
      case "mat-tu":
        return <MatTuPage />;
      case "noi-ngong":
        return <NoiNgongPage />;
      case "tu-ky":
        return <TuKyPage />;
      default:
        return <ParentPage data={siteData.parent} />;
    }
  }

3. LINK TỪ PARENT PAGE
----------------------
Dùng:
  href="#phu-huynh/cham-noi"
  href="#phu-huynh/giac-quan"
  href="#phu-huynh/khe-ho-moi-vom"
  href="#phu-huynh/mat-tu"
  href="#phu-huynh/noi-ngong"
  href="#phu-huynh/tu-ky"

4. QUICK TEST
-------------
Các HTML gốc cham-noi / giac-quan / noi-ngong / tu-ky có nhúng lại bài test.
Bản React không copy JavaScript test cũ mà gọi component <QuickTest /> dùng chung, tránh trùng logic.

Nếu muốn mỗi trang tự mở đúng tab test tương ứng, có thể mở rộng QuickTest với prop initialTestKey.
Hiện tại để tương thích ngay với QuickTest bạn đang có, các page chỉ gọi <QuickTest /> nên không phát sinh lỗi TypeScript.

5. DATA
-------
Nội dung từng trang nằm trong Page.data.ts. Sau này nếu muốn chuyển dữ liệu sang Firestore, chỉ cần thay data truyền vào component, không phải viết lại toàn bộ page.

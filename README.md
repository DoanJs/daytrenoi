# OWLSPEAKS React + TypeScript — Original UI

Project này được chuyển trực tiếp từ file HTML gốc OWLSPEAKS.

## Mục tiêu
- Giữ nguyên DOM hierarchy / class CSS / inline style / responsive của file HTML gốc.
- React + TypeScript + Create React App.
- Chạy bằng `npm start`.
- Mỗi page nằm trong một folder riêng.
- Mỗi page có `.tsx`, `.css`, `.types.ts`, `.data.ts`.
- Nội dung hiện tại nằm trong mock data và được truyền vào page qua props.
- Ảnh base64 đã tách thành `public/images`.
- Quick Test đã chuyển từ DOM JavaScript sang React state.
- Không dùng `dangerouslySetInnerHTML`.
- Có `src/declarations.d.ts` để TypeScript nhận import CSS.

## Chạy project
```bash
npm install
npm start
```

## Build
```bash
npm run build
```

## Khi nối Firebase
Hiện tại `src/services/siteDataService.ts` trả về `mockSiteData`.

Sau này thay thân `getSiteData()` bằng Firestore:

```ts
export async function getSiteData(): Promise<SiteData> {
  // const snap = await getDoc(doc(db, "website", "owlspeaks"));
  // return snap.data() as SiteData;
}
```

UI của page không cần viết lại.

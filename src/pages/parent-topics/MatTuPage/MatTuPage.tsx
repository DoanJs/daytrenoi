import "./MatTuPage.css";
import { mat_tuPageData as defaultData } from "./MatTuPage.data";
import { MatTuPageData } from "./MatTuPage.types";

interface Props {
  data?: MatTuPageData;
}

export default function MatTuPage({ data = defaultData }: Props) {
  return (
    <div className="pg parent-topic-page mat-tu-page">
      <div dangerouslySetInnerHTML={{ __html: data.beforeQuickTestHtml }} />
      <div dangerouslySetInnerHTML={{ __html: data.afterQuickTestHtml }} />
    </div>
  );
}

import "./KheHoMoiVomPage.css";
import { khe_ho_moi_vomPageData as defaultData } from "./KheHoMoiVomPage.data";
import { KheHoMoiVomPageData } from "./KheHoMoiVomPage.types";

interface Props {
  data?: KheHoMoiVomPageData;
}

export default function KheHoMoiVomPage({ data = defaultData }: Props) {
  return (
    <div className="pg parent-topic-page khe-ho-moi-vom-page">
      <div dangerouslySetInnerHTML={{ __html: data.beforeQuickTestHtml }} />
      <div dangerouslySetInnerHTML={{ __html: data.afterQuickTestHtml }} />
    </div>
  );
}

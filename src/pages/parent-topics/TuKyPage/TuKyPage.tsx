import QuickTest from "../../../components/QuickTest/QuickTest";
import "./TuKyPage.css";
import { tu_kyPageData as defaultData } from "./TuKyPage.data";
import { TuKyPageData } from "./TuKyPage.types";

interface Props {
  data?: TuKyPageData;
}

export default function TuKyPage({ data = defaultData }: Props) {
  return (
    <div className="pg parent-topic-page tu-ky-page">
      <div dangerouslySetInnerHTML={{ __html: data.beforeQuickTestHtml }} />
      {data.hasQuickTest ? <QuickTest /> : null}
      <div dangerouslySetInnerHTML={{ __html: data.afterQuickTestHtml }} />
    </div>
  );
}

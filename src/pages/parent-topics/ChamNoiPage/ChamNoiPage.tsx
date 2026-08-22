import QuickTest from "../../../components/QuickTest/QuickTest";
import "./ChamNoiPage.css";
import { cham_noiPageData as defaultData } from "./ChamNoiPage.data";
import { ChamNoiPageData } from "./ChamNoiPage.types";

interface Props {
  data?: ChamNoiPageData;
}

export default function ChamNoiPage({ data = defaultData }: Props) {
  return (
    <div className="pg parent-topic-page cham-noi-page">
      <div dangerouslySetInnerHTML={{ __html: data.beforeQuickTestHtml }} />
      {data.hasQuickTest ? <QuickTest /> : null}
      <div dangerouslySetInnerHTML={{ __html: data.afterQuickTestHtml }} />
    </div>
  );
}

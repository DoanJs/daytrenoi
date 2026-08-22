import QuickTest from "../../../components/QuickTest/QuickTest";
import "./GiacQuanPage.css";
import { giac_quanPageData as defaultData } from "./GiacQuanPage.data";
import { GiacQuanPageData } from "./GiacQuanPage.types";

interface Props {
  data?: GiacQuanPageData;
}

export default function GiacQuanPage({ data = defaultData }: Props) {
  return (
    <div className="pg parent-topic-page giac-quan-page">
      <div dangerouslySetInnerHTML={{ __html: data.beforeQuickTestHtml }} />
      {data.hasQuickTest ? <QuickTest /> : null}
      <div dangerouslySetInnerHTML={{ __html: data.afterQuickTestHtml }} />
    </div>
  );
}

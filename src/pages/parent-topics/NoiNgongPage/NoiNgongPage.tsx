import QuickTest from "../../../components/QuickTest/QuickTest";
import "./NoiNgongPage.css";
import { noi_ngongPageData as defaultData } from "./NoiNgongPage.data";
import { NoiNgongPageData } from "./NoiNgongPage.types";

interface Props {
  data?: NoiNgongPageData;
}

export default function NoiNgongPage({ data = defaultData }: Props) {
  return (
    <div className="pg parent-topic-page noi-ngong-page">
      <div dangerouslySetInnerHTML={{ __html: data.beforeQuickTestHtml }} />
      {data.hasQuickTest ? <QuickTest /> : null}
      <div dangerouslySetInnerHTML={{ __html: data.afterQuickTestHtml }} />
    </div>
  );
}

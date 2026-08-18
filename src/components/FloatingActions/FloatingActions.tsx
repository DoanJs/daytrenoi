import { FloatingActionsData } from "../../models/site";

interface Props {
  data: FloatingActionsData;
}

export default function FloatingActions({ data }: Props) {
  return (
    <div className="float">
      <a className="zl" href={data.zaloUrl} target="_blank" rel="noreferrer" title={data.zaloTitle}>
        💬
      </a>
      <a className="ph" href={data.phoneUrl} title={data.phoneTitle}>
        📞
      </a>
    </div>
  );
}

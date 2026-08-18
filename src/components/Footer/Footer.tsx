import "./Footer.css";
import { FooterData } from "../../models/site";

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <img
              src={data.logo}
              alt={data.logoAlt}
              style={{ width: 92, height: "auto", marginBottom: 14 }}
            />
            <p>{data.description}</p>
            <p className="muted" style={{ color: "#8C8177" }}>{data.author}</p>
          </div>

          {data.columns.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links?.map((item) => (
                  <li key={`${column.title}-${item.label}`}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="fbot">
          <span>{data.copyright}</span>
          <span>{data.bottomText}</span>
        </div>
      </div>
    </footer>
  );
}

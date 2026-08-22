import "./Header.css";
import { HeaderData } from "../../models/site";

interface HeaderProps {
  data: HeaderData;
  currentPage: string;
}

export default function Header({ data, currentPage }: HeaderProps) {
  return (
    <nav className="top">
      <div className="nav-in">
        <a className="brand" href="#index">
          <div className="owl" style={{
            width: 'auto',
            height: '38px'
          }}>
            <img src="/images/speaks-owl-orange.png" alt="owl-orange"
            style={{
              height: '100%',
              width: 'auto'
            }}
            />
          </div>
          <div>
            <b>{data.brandTitle}</b>
            <span>{data.brandSubtitle}</span>
          </div>
        </a>

        <div className="nav-links m" id="nv">
          {data.navItems.map((item) => (
            <a
              key={item.page}
              href={item.href}
              data-p={item.page}
              className={currentPage === item.page ? "on" : undefined}
              target={ item.href === 'https://bacsihoangoanh.edubit.vn/' ? "_blank" : "_parent"}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={data.zaloUrl} target="_blank" rel="noreferrer">
            {data.zaloLabel}
          </a>
        </div>
      </div>
    </nav>
  );
}

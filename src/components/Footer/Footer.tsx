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

            {/* Social links */}
            <div className="footer-social">
              <h4>Theo dõi chúng tôi</h4>

              <div className="footer-social-links" style={{
                display:'flex',
                justifyContent: 'flex-start',
                gap: '24px'
              }}>
                <a
                  className="facebook"
                  href="https://www.facebook.com/amngutrilieubacsihoangoanh/?rdid=HM3WoSA0cYxcAFLv"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.022 1.792-4.696 4.533-4.696 1.312 0 2.686.236 2.686.236v2.973h-1.514c-1.491 0-1.955.93-1.955 1.885v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
                    />
                  </svg>
                </a>

                <a
                  className="youtube"
                  href="https://www.youtube.com/@drowlspeaks"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.016 3.016 0 0 0 .502 6.186C0 8.068 0 12 0 12s0 3.932.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.932 24 12 24 12s0-3.932-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                  </svg>
                </a>

                <a
                  className="website"
                  href="https://bacsihoangoanh.edubit.vn/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Website"
                  title="Website"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2c1.36 0 2.64.49 3.64 1.3A15.3 15.3 0 0 0 14.5 9h-5a15.3 15.3 0 0 0-1.14-3.7A7.97 7.97 0 0 1 12 4ZM6.26 6.76A17.3 17.3 0 0 1 7.5 9H4.55a8.04 8.04 0 0 1 1.71-2.24ZM4.07 11H8v2H4.07A8.03 8.03 0 0 1 4 12c0-.34.02-.67.07-1ZM4.55 15H7.5a17.3 17.3 0 0 1-1.24 2.24A8.04 8.04 0 0 1 4.55 15ZM12 20a7.97 7.97 0 0 1-3.64-1.3A15.3 15.3 0 0 0 9.5 15h5a15.3 15.3 0 0 0 1.14 3.7A7.97 7.97 0 0 1 12 20Zm3-7H9v-2h6v2Zm1.5 2h2.95a8.04 8.04 0 0 1-1.71 2.24A17.3 17.3 0 0 1 16.5 15ZM19.93 13H16v-2h3.93c.05.33.07.66.07 1s-.02.67-.07 1Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
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

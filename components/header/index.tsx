import Link from "next/link";
import "./header.scss";

export default function Header() {
  return (
    <div className={"main_header"}>
      <Link className="nav-item" href="/home">
        Trang chủ
      </Link>
      <Link className="nav-item" href="/analysis-center">
        Trung tam phan tich
      </Link>
      <Link className="nav-item" href="/deep-info">
        Du lieu chuyen sau
      </Link>
      <Link className="nav-item" href="/news">
        Tin tuc
      </Link>
      <Link className="nav-item" href="/test-ui">
        UI
      </Link>
    </div>
  );
}

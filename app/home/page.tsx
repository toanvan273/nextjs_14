"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="analysis-center">
      <h1>Trang chủ</h1>
      <Link style={{ textDecoration: "underline" }} href="/home/setting">
        Go to Setting
      </Link>
      <Link style={{ textDecoration: "underline" }} href="/blog/abc">
        Go to Slug
      </Link>
      <div>
        <button
          onClick={() => {
            router.push("/blog/abcd", { scroll: false });
          }}
        >
          Click to Slug
        </button>
      </div>
    </div>
  );
}

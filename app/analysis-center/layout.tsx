import Header from "@/components/header";
export default function Layout({ children }: { children: React.ReactNode }) {
  console.log(children);

  return (
    <div className="main-layout">
      <Header />
      <div>{children}</div>
    </div>
  );
}

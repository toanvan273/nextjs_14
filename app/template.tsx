import Header from "@/components/header";
export default function Template({ children }: { children: React.ReactNode }) {
  console.log(children);

  return (
    <div className="main-template">
      <Header />
      <div>{children}</div>
    </div>
  );
}

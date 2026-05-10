import Footer from "@/src/components/layout/footer/Footer";
import Header from "@/src/components/layout/header/Header";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex-1 flex flex-col">
        <Header isFixedHeader={false} />
        <main className="bg-[var(--background)]">{children}</main>
        <Footer />
      </div>
    </>
  );
}

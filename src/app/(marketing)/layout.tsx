import MarketingHeader from "@/app/components/MarketingHeader";
import Footer from "@/app/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MarketingHeader />
      <div>{children}</div>
      <Footer />
    </>
  );
}

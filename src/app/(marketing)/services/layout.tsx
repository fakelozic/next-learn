import Something from "./Something";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto">
      <Something />
      {children}
    </div>
  );
}

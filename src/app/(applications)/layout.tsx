export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="container mx-auto bg-green-100 py-4 rounded-sm mt-2">
        Header (Applications)
      </header>

      <div>{children}</div>
      <footer className="container mx-auto bg-green-100 py-6 rounded-t-sm mt-auto">
        Footer (Applications)
      </footer>
    </>
  );
}

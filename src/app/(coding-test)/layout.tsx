import TopBar from "../_components/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar isCodingPage isLoggedIn />
      {children}
    </>
  );
}

import "@/styles/globals.css";

export const metadata = {
  title: "How to Price",
  description: "Generated by Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-background relative min-h-screen bg-[radial-gradient(circle,#FFE1DA_2px,transparent_1px)] [background-size:32px_32px]">
        <main className="relative">{children}</main>

        <footer className="mx-auto mt-10 max-w-screen-md text-center text-sm">
          na
        </footer>
      </body>
    </html>
  );
}

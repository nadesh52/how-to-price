import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: {
    default: "คิดราคาช้อปปิ้งออนไลน์",
    template: "%s | คิดราคา"
  },
  description: "คิดราคาช้อปปิ้งออนไลน์ เห็นกำไรก่อนขายจริง",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="absolute inset-0 min-h-[calc(100vh-27px)] bg-white bg-[radial-gradient(circle,#FD5A46_2px,transparent_1px)] bg-fixed [background-size:32px_32px]">
        <main>
          <Navbar />
          {children}
        </main>
        <footer className="mx-auto mt-[42px] max-w-screen-md rounded-t-[24px] border-x-4 border-t-4 border-black bg-white p-4 text-center text-sm">
          nadesh52.github.io
        </footer>
      </body>
    </html>
  );
}

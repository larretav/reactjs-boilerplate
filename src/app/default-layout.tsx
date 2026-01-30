import { Navbar } from "@/components/layout/Navbar";


export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 py-10 ">
        {children}
      </main>

    </div>
  );
}

import "@/app/globals.css"
import Header from "@/app/(app)/components/header"
import Nav from "@/app/(app)/components/nav";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="flex flex-col h-screen w-screen isolate bg-black">
        <div className="flex flex-row h-full w-full">
          <Nav />
          <main className="flex flex-col h-full w-full bg-black flex-1 overflow-hidden">
            <Header></Header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

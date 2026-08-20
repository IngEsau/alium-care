import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { FloatingWhatsAppButton } from "./FloatingWhatsAppButton";
import { ScrollToHash } from "./ScrollToHash";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToHash />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

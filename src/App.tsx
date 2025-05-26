
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              {/* Placeholder routes for future pages */}
              <Route path="/fleet" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Fleet & Technology</h1><p className="text-gray-600">Coming Soon</p></div></div>} />
              <Route path="/quote" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Get a Quote</h1><p className="text-gray-600">Coming Soon</p></div></div>} />
              <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">About Us</h1><p className="text-gray-600">Coming Soon</p></div></div>} />
              <Route path="/careers" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Careers</h1><p className="text-gray-600">Coming Soon</p></div></div>} />
              <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Contact Us</h1><p className="text-gray-600">Coming Soon</p></div></div>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

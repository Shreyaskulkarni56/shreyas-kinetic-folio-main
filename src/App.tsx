import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./pages/Work";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from './contexts/ThemeContext';
import { About } from "./components/About";
import React, { useEffect } from "react";
import Index from "./pages/Index";

const queryClient = new QueryClient();

// Short summary: render Index and scroll to #about after mount
const IndexScrollToAbout = () => {
	// wait a short moment to ensure Index/DOM has rendered
	useEffect(() => {
		const t = window.setTimeout(() => {
			document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
		}, 150);
		return () => window.clearTimeout(t);
	}, []);
	return <Index />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            {/* Use wrapper so navigating to /about scrolls down in the home (Hero) page */}
            <Route path="/about" element={<IndexScrollToAbout />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Pages
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Consultations from "./pages/Consultations";
import NotFound from "./pages/NotFound";

// Knowledge pages
import FAQ from "./pages/knowledge/FAQ";
import Navigation from "./pages/knowledge/Navigation";
import YouTubeChannel from "./pages/knowledge/YouTubeChannel";
import CityOfGods from "./pages/knowledge/CityOfGods";

// Course pages
import Course1 from "./pages/courses/Course1";
import Course2 from "./pages/courses/Course2";
import ComingSoon from "./pages/courses/ComingSoon";
import CourseProgram from "./pages/courses/CourseProgram";

// Master pages
import AboutMaster from "./pages/master/AboutMaster";
import AskMaster from "./pages/master/AskMaster";
import PrivateLessons from "./pages/master/PrivateLessons";

// Workshop pages
import Workshop from "./pages/workshop/Workshop";
import PersonalMyth from "./pages/workshop/PersonalMyth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/consultations" element={<Consultations />} />

            {/* Knowledge Base */}
            <Route path="/knowledge/faq" element={<FAQ />} />
            <Route path="/knowledge/navigation" element={<Navigation />} />
            <Route path="/knowledge/youtube" element={<YouTubeChannel />} />
            <Route path="/knowledge/city-of-gods" element={<CityOfGods />} />

            {/* Courses */}
            <Route path="/courses/course-1" element={<Course1 />} />
            <Route path="/courses/course-2" element={<Course2 />} />
            <Route path="/courses/course-3" element={<ComingSoon title="3й курс – магія стихій з таро" />} />
            <Route path="/courses/course-4" element={<ComingSoon title="4й курс – підкорення астрологічних сил" />} />
            <Route path="/courses/program" element={<CourseProgram />} />

            {/* Master */}
            <Route path="/master/about" element={<AboutMaster />} />
            <Route path="/master/ask" element={<AskMaster />} />
            <Route path="/master/private-lessons" element={<PrivateLessons />} />

            {/* Workshop */}
            <Route path="/workshop/infinity-coins" element={<Workshop />} />
            <Route path="/workshop/seasonal" element={<Workshop />} />
            <Route path="/workshop/stamps" element={<Workshop />} />
            <Route path="/workshop/attributes" element={<Workshop />} />
            <Route path="/workshop/jewelry" element={<Workshop />} />
            <Route path="/workshop/personal-myth" element={<PersonalMyth />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

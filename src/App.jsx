import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;


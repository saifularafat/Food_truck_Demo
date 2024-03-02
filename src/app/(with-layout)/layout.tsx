import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const layout = ({ children }) => {
  return (
    <div className="">
      <div className="">
        
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-412px)] bg-slate-50">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;

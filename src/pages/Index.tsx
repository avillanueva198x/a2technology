import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CorporateHome from "@/components/CorporateHome";
const Index = () => {
  useEffect(() => { document.title = "A2 Technology | Tu aliado en tecnología"; }, []);
  return <div className="corporate-site"><Navbar /><main id="main-content"><CorporateHome /><Contact /></main><Footer /></div>;
};
export default Index;

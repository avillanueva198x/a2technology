import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CorporateHome from "@/components/CorporateHome";
const Index = () => {
  useEffect(() => { document.title = "A2 Technology | Software de gestión para negocios en Perú"; }, []);
  return <div className="corporate-site"><Navbar /><main id="main-content"><CorporateHome /><Contact /></main><Footer /></div>;
};
export default Index;

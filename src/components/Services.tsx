
import { 
  LayoutDashboard, 
  Globe, 
  Monitor, 
  MessageSquare, 
  Settings, 
  Users 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <LayoutDashboard className="h-10 w-10 text-a2tech-blue" />,
      title: "Software a Medida",
      description: "Desarrollamos soluciones personalizadas que se adaptan perfectamente a las necesidades de tu negocio."
    },
    {
      icon: <Globe className="h-10 w-10 text-a2tech-blue" />,
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos, responsivos y optimizados para brindar la mejor experiencia a tus clientes."
    },
    {
      icon: <Monitor className="h-10 w-10 text-a2tech-blue" />,
      title: "Sistemas de Gestión",
      description: "Automatiza y optimiza tus procesos con nuestros sistemas de gestión empresarial personalizados."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-a2tech-blue" />,
      title: "Consultoría IT",
      description: "Te asesoramos para que tomes las mejores decisiones tecnológicas para tu negocio y maximices tu inversión."
    },
    {
      icon: <Settings className="h-10 w-10 text-a2tech-blue" />,
      title: "Mantenimiento y Soporte",
      description: "Brindamos soporte continuo y mantenimiento para garantizar el óptimo funcionamiento de tus sistemas."
    },
    {
      icon: <Users className="h-10 w-10 text-a2tech-blue" />,
      title: "Capacitación",
      description: "Formamos a tu equipo para que aproveche al máximo las herramientas tecnológicas implementadas."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos una amplia gama de servicios tecnológicos diseñados para impulsar tu negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-a2tech-teal/30 group"
            >
              <div className="mb-4 bg-a2tech-light p-3 rounded-lg inline-block group-hover:bg-a2tech-teal/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-a2tech-blue">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

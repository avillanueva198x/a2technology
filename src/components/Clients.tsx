
const Clients = () => {
  const clients = [
    {
      name: "MANU BARRA CEVICHERA",
      logo: "🍽️",
      description: "Implementamos un sistema de gestión de pedidos y reservas que mejoró la eficiencia operativa del restaurante."
    },
    {
      name: "ESCUELA DE BELLEZA JUAN PABLO II",
      logo: "✂️",
      description: "Desarrollamos una plataforma para la gestión de estudiantes y cursos, facilitando los procesos administrativos."
    },
    {
      name: "HOTEL MELTHON CLASS",
      logo: "🏨",
      description: "Creamos un sistema de reservas online que incrementó las reservas directas y mejoró la experiencia del cliente."
    }
  ];

  return (
    <section id="clients" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Clientes</h2>
          <p className="section-subtitle">
            Empresas que confían en nuestras soluciones tecnológicas para impulsar su crecimiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 text-center group hover:border-a2tech-teal/30"
            >
              <div className="text-5xl mb-4 bg-a2tech-light h-20 w-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-a2tech-teal/10 transition-colors">
                {client.logo}
              </div>
              <h3 className="text-xl font-bold mb-3 text-a2tech-blue">{client.name}</h3>
              <p className="text-gray-600">{client.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10 text-a2tech-blue">Lo que dicen nuestros clientes</h3>
          
          <div className="bg-a2tech-light p-8 rounded-lg relative">
            <div className="text-4xl text-a2tech-teal absolute -top-5 left-8">"</div>
            <div className="text-4xl text-a2tech-teal absolute -bottom-5 right-8">"</div>
            
            <div className="text-center max-w-3xl mx-auto py-4">
              <p className="italic text-gray-700 mb-4">
                "A2 Technology transformó nuestra forma de gestionar el negocio. Su sistema personalizado ha sido clave para mejorar nuestra eficiencia y servicio al cliente. Estamos muy satisfechos con su profesionalismo y resultados."
              </p>
              <p className="font-medium text-a2tech-blue">Manuel Torres, Propietario de MANU BARRA CEVICHERA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

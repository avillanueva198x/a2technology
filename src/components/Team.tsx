
const Team = () => {
  const team = [
    {
      name: "Carlos Ramírez",
      position: "CEO & Fundador",
      bio: "Ingeniero de Software con más de 10 años de experiencia en desarrollo de soluciones empresariales.",
      avatar: "👨‍💼"
    },
    {
      name: "María Fernández",
      position: "CTO",
      bio: "Especialista en arquitectura de software y desarrollo de aplicaciones web de alta escalabilidad.",
      avatar: "👩‍💼"
    },
    {
      name: "Jorge Mendoza",
      position: "Consultor Senior",
      bio: "Experto en optimización de procesos y transformación digital de pequeñas y medianas empresas.",
      avatar: "👨‍💻"
    },
    {
      name: "Ana Valdivia",
      position: "UX/UI Designer",
      bio: "Diseñadora con enfoque en crear experiencias de usuario intuitivas y atractivas para todo tipo de aplicaciones.",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <section id="team" className="section-padding bg-a2tech-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestro Equipo</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Profesionales apasionados por la tecnología y comprometidos con tu éxito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-all text-center"
            >
              <div className="text-5xl mb-4 bg-white/10 h-24 w-24 rounded-full flex items-center justify-center mx-auto">
                {member.avatar}
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
              <p className="text-a2tech-teal mb-3">{member.position}</p>
              <p className="text-white/80 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Join us CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Quieres unirte a nuestro equipo?</h3>
          <p className="mb-6 max-w-2xl mx-auto text-white/80">
            Estamos siempre en búsqueda de talento apasionado por la tecnología y la innovación. 
            ¡Envíanos tu CV y forma parte de nuestra historia de éxito!
          </p>
          <a 
            href="mailto:careers@a2technology.com.pe" 
            className="bg-white text-a2tech-blue px-6 py-3 rounded-md font-medium hover:bg-a2tech-teal hover:text-white transition-colors inline-block"
          >
            Enviar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;

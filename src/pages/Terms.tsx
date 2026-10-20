import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding pt-32">
        <div className="container-custom max-w-3xl">
          <article className="prose prose-invert prose-headings:font-display prose-a:text-a2tech-teal max-w-none">
            <h1>Términos y Condiciones</h1>
            <p className="text-muted-foreground">
              <strong>Fecha de vigencia:</strong> 20 de octubre de 2026
            </p>

            <h2>1. Objeto</h2>
            <p>
              Estos términos regulan el uso de los sistemas de software como servicio (SaaS)
              desarrollados y operados por A2 Technology E.I.R.L., RUC [RUC], con domicilio en
              [DIRECCIÓN], Perú. El servicio se presta bajo un modelo de suscripción mensual, cuyo
              alcance y precio se detallan en la propuesta comercial aceptada por el cliente.
            </p>

            <h2>2. Disponibilidad del servicio</h2>
            <p>
              A2 Technology procura mantener el servicio disponible de forma razonable, pero no
              garantiza una disponibilidad del 100%. Pueden ocurrir interrupciones por
              mantenimiento, actualizaciones o causas ajenas a A2 Technology (por ejemplo, fallas de
              los proveedores de hosting o de terceros integrados).
            </p>

            <h2>3. Responsabilidades del cliente</h2>
            <ul>
              <li>Es responsable de la veracidad y legalidad de los datos que registra en el sistema.</li>
              <li>
                Es responsable de la confidencialidad de sus credenciales de acceso y de las
                acciones realizadas con su cuenta.
              </li>
              <li>
                Debe usar el servicio conforme a su finalidad y a la normativa peruana aplicable a
                su actividad (incluida la tributaria, cuando el sistema emite comprobantes
                electrónicos).
              </li>
            </ul>

            <h2>4. Propiedad intelectual</h2>
            <p>
              El software, su código fuente, diseño e infraestructura son propiedad de A2
              Technology. El cliente conserva la propiedad de los datos que registra al usar el
              servicio. Esta licencia no transfiere ningún derecho de propiedad intelectual sobre el
              software al cliente.
            </p>

            <h2>5. Suspensión por falta de pago</h2>
            <p>
              A2 Technology puede suspender el acceso al servicio si el pago de la suscripción
              mensual no se realiza dentro del plazo acordado, previa notificación al cliente. El
              acceso se restablece al regularizar el pago pendiente.
            </p>

            <h2>6. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia
              se resolverá ante los jueces y tribunales competentes del Perú.
            </p>

            <h2>7. Contacto</h2>
            <p>
              Para consultas sobre estos términos, escríbenos a{" "}
              <a href="mailto:a2technologype@gmail.com">a2technologype@gmail.com</a>.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding pt-32">
        <div className="container-custom max-w-3xl">
          <article className="prose prose-invert prose-headings:font-display prose-a:text-a2tech-teal max-w-none">
            <h1>Política de Privacidad</h1>
            <p className="text-muted-foreground">
              <strong>Fecha de vigencia:</strong> 20 de octubre de 2026
            </p>

            <h2>1. Responsable del tratamiento</h2>
            <p>
              A2 Technology E.I.R.L., RUC [RUC], con domicilio en [DIRECCIÓN], Perú (en adelante,
              "A2 Technology" o "nosotros"), es responsable del tratamiento de los datos personales
              descritos en esta política. Puedes contactarnos escribiendo a{" "}
              <a href="mailto:a2technologype@gmail.com">a2technologype@gmail.com</a>.
            </p>

            <h2>2. Qué datos tratamos</h2>
            <p>
              A2 Technology desarrolla y opera sistemas de software como servicio (SaaS) para
              negocios en Perú (puntos de venta, gestión de inventario, facturación electrónica,
              gestión hotelera y sistemas educativos, entre otros). En el marco de ese servicio
              tratamos:
            </p>
            <ul>
              <li>
                <strong>Datos de cuenta:</strong> nombre, correo electrónico, credenciales de acceso
                y rol dentro de la organización del cliente.
              </li>
              <li>
                <strong>Datos de operación del cliente:</strong> información de ventas, inventario,
                comprobantes de pago, imágenes de productos y demás datos que el cliente registra al
                usar el sistema contratado.
              </li>
            </ul>

            <h2>3. Finalidad del tratamiento</h2>
            <p>Usamos estos datos para:</p>
            <ul>
              <li>Prestar el servicio contratado y mantener las cuentas de acceso.</li>
              <li>
                Procesar y emitir comprobantes de pago electrónicos a través de nuestro proveedor
                de facturación.
              </li>
              <li>Generar reportes y funcionalidades propias de cada sistema.</li>
              <li>Brindar soporte técnico y atender incidencias.</li>
            </ul>

            <h2>4. Base legal</h2>
            <p>
              El tratamiento se realiza conforme a la Ley N.° 29733, Ley de Protección de Datos
              Personales del Perú, y su reglamento, sobre la base de la relación contractual con
              nuestros clientes y, cuando corresponde, el consentimiento del usuario final.
            </p>

            <h2>5. Conservación de los datos</h2>
            <p>
              Conservamos los datos mientras dure la relación contractual con el cliente y, luego de
              finalizada, durante los plazos exigidos por la normativa tributaria y contable peruana
              aplicable a los comprobantes y registros generados.
            </p>

            <h2>6. Proveedores que procesan datos en nuestro nombre</h2>
            <p>
              Para operar nuestros sistemas usamos los siguientes proveedores, cada uno limitado a
              la función indicada:
            </p>
            <ul>
              <li><strong>Railway:</strong> hosting de los servidores y bases de datos.</li>
              <li><strong>Cloudflare:</strong> protección y entrega de contenido (CDN, seguridad).</li>
              <li>
                <strong>Google Drive:</strong> almacenamiento de archivos e imágenes (por ejemplo,
                fotos de productos) que el cliente sube a su sistema.
              </li>
              <li><strong>APISPERU:</strong> emisión de comprobantes de pago electrónicos ante SUNAT.</li>
              <li><strong>Lovable / Vercel:</strong> hosting de las aplicaciones web (frontend).</li>
            </ul>

            <h2>7. Uso de los servicios de Google</h2>
            <p>
              Algunos de nuestros sistemas usan la API de Google Drive, con el alcance (scope){" "}
              <code>https://www.googleapis.com/auth/drive.file</code>, exclusivamente para guardar
              las imágenes y archivos que el cliente sube desde el sistema (por ejemplo, fotos de
              productos). Con este alcance nuestra aplicación accede únicamente a los archivos que
              ella misma crea en Google Drive; no accede, lista ni modifica ningún otro archivo de la
              cuenta de Google del cliente.
            </p>
            <p>
              A2 Technology no vende los datos obtenidos a través de las APIs de Google ni los
              comparte con terceros para publicidad, créditos o evaluación de riesgo. El uso y
              transferencia de información recibida de las APIs de Google por parte de A2 Technology
              se ajusta a la{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google API Services User Data Policy
              </a>
              , incluidos los requisitos de uso limitado (Limited Use requirements).
            </p>

            <h2>8. Derechos ARCO</h2>
            <p>
              Como titular de tus datos personales puedes ejercer tus derechos de acceso,
              rectificación, cancelación y oposición (derechos ARCO) sobre la información que
              tratamos. Para ejercerlos, escríbenos a{" "}
              <a href="mailto:a2technologype@gmail.com">a2technologype@gmail.com</a> indicando tu
              nombre, el derecho que deseas ejercer y la organización/sistema al que corresponde tu
              cuenta. Responderemos dentro de los plazos establecidos por la Ley N.° 29733.
            </p>

            <h2>9. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger los datos que
              tratamos, entre ellas cifrado en tránsito, control de acceso basado en roles y
              aislamiento lógico de la información entre distintos clientes (multi-tenant).
            </p>

            <h2>10. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política para reflejar cambios en nuestros sistemas o en la
              normativa aplicable. Publicaremos cualquier cambio en esta misma página con una nueva
              fecha de vigencia.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

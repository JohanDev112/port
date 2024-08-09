import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { Button, Box } from "@mui/material";

const Vertical = () => {
  return (
    <VerticalTimeline lineColor="#c2c2c2">
      {/* Trabajo */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "#1F2A48", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid" }}
        date="2023 - presente"
        iconStyle={{ background: "#1F2A48", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <h3 className="vertical-timeline-element-title font-extrabold">
          Freelancer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Hidalgo, MX</h4>
        <br />
        <ul>
          <li>
            Desarrollo de aplicaciones móviles con React Native y Express.
          </li>
          <li>
            Desarrollo web con tecnologías como: React, Astro, Next.js, Express
            y mejoramiento en UX/UI.
          </li>
        </ul>
      </VerticalTimelineElement>

      {/* E-Commerce */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#1F2A48", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid" }}
        date="2023"
        iconStyle={{ background: "#1F2A48", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <h3 className="vertical-timeline-element-title font-extrabold">
          Marketlane Ventures
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Hidalgo, MX</h4>
        <p>
          Desarrollo de un sitio e-commerce para expandir el alcance y mejorar
          las ventas del negocio de un cliente en Texas, EE.UU. <br />
          Se implementó mejoras en el SEO para el posicionamiento de la página,
          así como optimizar las compras mediante motores de pago como Stripe.{" "}
          <br />
          Tecnologías usadas: Next.js, Express, Prisma, PostgreSQL, Next OAuth,
          Google Console.
        </p>

        <Box
          display="flex"
          alignItems="center"
          marginX="auto"
          flexDirection="column"
          marginTop={2}
        >
          <Button
            sx={{ textTransform: "none" }}
            variant="contained"
            href="https://marketlane.vercel.app"
          >
            Ver proyecto
          </Button>
        </Box>
      </VerticalTimelineElement>

      {/* App Móvil */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#1F2A48", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid" }}
        date="2023"
        iconStyle={{ background: "#1F2A48", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <h3 className="vertical-timeline-element-title font-extrabold">
          App Siniestros
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Hidalgo, MX</h4>
        <p>
          Desarrollo de una aplicación móvil para reportar siniestros. <br />
          Se usó la API de Google Drive para subir los documentos y fotos
          generadas al momento de registrar o actualizar siniestros <br />
          Tecnologías usadas: Expo, Express, React Native, PostgreSQL, Neontech,
          Google Console.
        </p>
      </VerticalTimelineElement>

      {/* Educación */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#1F2A48", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid" }}
        date="2021 - presente"
        iconStyle={{ background: "#1F2A48", color: "#fff" }}
        icon={<IoSchoolSharp />}
      >
        <h3 className="vertical-timeline-element-title font-extrabold">
          Ingeniería de Software
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Universidad Autónoma del Estado de Hidalgo, MX.
        </h4>
        <p>
          Curso la carrera de Licenciatura en Ingeniería de Software, donde he
          trabajado con diferentes temas como POO, Bases de Datos, Desarrollo
          web, Cloud Tools, entre otras.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Vertical;

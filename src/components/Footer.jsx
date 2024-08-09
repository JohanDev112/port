import { Box, Typography, IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor="#1F2A48"
      color="#FFFFFF"
      padding={3}
      textAlign="center"
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Derechos reservados */}
      <Typography variant="body2" marginBottom={{ xs: 2, sm: 0 }}>
        © {new Date().getFullYear()} Johan González. Todos los derechos
        reservados.
      </Typography>

      {/* Redes Sociales */}
      <Stack direction="row" spacing={2}>
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#0A66C2",
            transition: "transform 0.3s, background-color 0.3s",
            "&:hover": {
              backgroundColor: "#0A66C220",
              transform: "scale(1.2)",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          aria-label="Instagram"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#E4405F",
            transition: "transform 0.3s, background-color 0.3s",
            "&:hover": {
              backgroundColor: "#E4405F20",
              transform: "scale(1.2)",
            },
          }}
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          aria-label="GitHub"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#FFFFFF",
            transition: "transform 0.3s, background-color 0.3s",
            "&:hover": {
              backgroundColor: "#FFFFFF20",
              transform: "scale(1.2)",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Footer;

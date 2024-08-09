import { Avatar, Box, Typography, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import foto from "/foto.jpeg";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "transform 0.3s, background-color 0.3s",
          "&:hover": {
            backgroundColor: "#00000020",
            transform: "scale(1.2)",
          },
        },
      },
    },
  },
});

const Profile = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        marginX="auto"
        padding={3}
        bgcolor="#535C91"
        borderRadius={2}
        color={"#FFFFFF"}
        maxWidth={{ xs: "100%", sm: "80%" }}
        textAlign={{ xs: "center", sm: "left" }}
      >
        <Box margin={{ xs: 2, sm: 0 }} marginLeft={{ sm: 3 }}>
          <Avatar
            src={foto}
            sx={{ width: 150, height: 150, marginBottom: { xs: 2, sm: 0 } }}
          />
        </Box>

        <Stack padding={3} spacing={2} maxWidth="60%">
          <Typography variant="h5" gutterBottom>
            Johan González
          </Typography>
          <Typography variant="body1" align="justify" gutterBottom>
            Soy un estudiante de Ingeniería de software interesado en
            desarrollar aplicaciones utilizando tecnologías modernas como
            microservicios con NestJS y NextJS, así como aplicaciones móviles
            con Expo y React Native utilizando TypeScript.
          </Typography>

          <Box
            display="flex"
            justifyContent={{ xs: "center", sm: "flex-start" }}
            marginTop={2}
          >
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/"
              rel="noopener noreferrer"
              sx={{ color: "#0A66C2" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              component="a"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#E4405F" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              component="a"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#FFFFFF" }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Profile;

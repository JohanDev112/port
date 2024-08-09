import { Avatar, Box, Typography, Stack, IconButton, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import foto from "/foto.jpeg";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Profile = () => {

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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        marginX="auto"
        padding={3}
        bgcolor="#1F2A48"
        borderRadius={2}
        color={"#FFFFFF"}
        maxWidth={{ xs: "95%", sm: "90%", md: "80%" }}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Box margin={{ xs: 2, md: 0 }} marginRight={{ md: 4 }}>
          <Avatar
            src={foto}
            sx={{ 
              width: { xs: 120, sm: 150 }, 
              height: { xs: 120, sm: 150 }, 
              marginBottom: { xs: 2, md: 0 } 
            }}
          />
        </Box>

        <Stack padding={{ xs: 1, sm: 2, md: 3 }} spacing={2} maxWidth={{ xs: "100%", md: "60%" }}>
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            gutterBottom
            fontWeight="semibold"
          >
            Johan González
          </Typography>
          <Typography 
            variant={isMobile ? "body2" : "body1"} 
            align={isMobile ? "center" : "justify"} 
            gutterBottom
          >
            Estudiante de Ingeniería de software con conocimiento en desarrollo
            de aplicaciones y web donde utilizo tecnologías modernas como React,
            NextJS, Expo y React Native donde TypeScript es mi lenguaje
            principal.
          </Typography>

          <Box
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            marginTop={2}
          >
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/"
              rel="noopener noreferrer"
              sx={{ color: "#0A66C2" }}
            >
              <LinkedInIcon fontSize={isMobile ? "small" : "medium"} />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              component="a"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#E4405F" }}
            >
              <InstagramIcon fontSize={isMobile ? "small" : "medium"} />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              component="a"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#FFFFFF" }}
            >
              <GitHubIcon fontSize={isMobile ? "small" : "medium"} />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Profile;

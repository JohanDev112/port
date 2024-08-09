import { useState } from "react";
import { Box, IconButton, TextField, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleWhatsApp = () => {
    const whatsappMessage = `Hola, soy ${name}. ${message}`;
    window.open(
      `https://wa.me/5543670010?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    const mailtoLink = `mailto:johangonzalez112@gmail.com?subject=Contacto&body=${encodeURIComponent(
      `Hola, soy ${name}. ${message}`
    )}`;
    window.open(mailtoLink, "_blank");
  };

  const buttonStyles = {
    width: isMobile ? '48px' : 'auto',
    height: isMobile ? '48px' : 'auto',
    minWidth: isMobile ? '48px' : '64px',
    borderRadius: isMobile ? '50%' : '4px',
    padding: isMobile ? '12px' : '6px 16px',
    fontSize: isMobile ? '0.75rem' : '1rem', // Tamaño de fuente ajustado
  };

  return (
    <Box
      component="form"
      sx={{
        marginTop: 4,
        padding: 3,
        bgcolor: "#1F2A48",
        borderRadius: 2,
        color: "#FFFFFF",
        maxWidth: { xs: "100%", sm: "80%" },
        marginX: "auto",
      }}
    >
      <Typography variant="h6" marginBottom={2} textAlign="center">
        Contacto
      </Typography>

      <Stack spacing={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputLabelProps={{ style: { color: "#ffffff" } }}
          InputProps={{
            style: { color: "#ffffff" },
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFFFFF",
                },
                "&:hover fieldset": {
                  borderColor: "#A8DADC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFFFFF",
                },
              },
            },
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{ style: { color: "#ffffff" } }}
          InputProps={{
            style: { color: "#ffffff" },
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFFFFF",
                },
                "&:hover fieldset": {
                  borderColor: "#A8DADC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFFFFF",
                },
              },
            },
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Mensaje"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          InputLabelProps={{ style: { color: "#ffffff" } }}
          InputProps={{
            style: { color: "#ffffff" },
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFFFFF",
                },
                "&:hover fieldset": {
                  borderColor: "#A8DADC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFFFFF",
                },
              },
            },
          }}
        />

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          marginTop={2}
        >
          <IconButton
            onClick={handleWhatsApp}
            sx={{
              ...buttonStyles,
              bgcolor: "#25D366",
              color: "#FFFFFF",
              "&:hover": {
                bgcolor: "#1EBF57",
                transform: "scale(1.05)",
                transition: "transform 0.3s",
              },
            }}
          >
            <WhatsAppIcon />
            {!isMobile && (
              <Typography sx={{ fontSize: buttonStyles.fontSize, ml: 1 }}>
                WhatsApp
              </Typography>
            )}
          </IconButton>
          <IconButton
            onClick={handleEmail}
            sx={{
              ...buttonStyles,
              bgcolor: "#D44638",
              color: "#FFFFFF",
              "&:hover": {
                bgcolor: "#C1351A",
                transform: "scale(1.05)",
                transition: "transform 0.3s",
              },
            }}
          >
            <EmailIcon />
            {!isMobile && (
              <Typography sx={{ fontSize: buttonStyles.fontSize, ml: 1 }}>
                Correo Electrónico
              </Typography>
            )}
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;

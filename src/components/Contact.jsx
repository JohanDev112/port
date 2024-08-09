import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Stack,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const whatsappMessage = `Hola, soy ${name}. ${message}`;
    window.open(`https://wa.me/5543670010?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const handleEmail = () => {
    const mailtoLink = `mailto:johangonzalez112@gmail.com?subject=Contacto&body=${encodeURIComponent(
      `Hola, soy ${name}. ${message}`
    )}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <Box
      component="form"
      sx={{
        marginTop: 4,
        padding: 3,
        bgcolor: "#535C91",
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
          InputLabelProps={{ style: { color: '#ffffff' } }}
          InputProps={{
            style: { color: '#ffffff' },
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFFFFF", // Contorno blanco por defecto
                },
                "&:hover fieldset": {
                  borderColor: "#A8DADC", // Contorno más claro en hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFFFFF", // Contorno blanco en focus
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
          InputLabelProps={{ style: { color: '#ffffff' } }}
          InputProps={{
            style: { color: '#ffffff' },
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFFFFF", // Contorno blanco por defecto
                },
                "&:hover fieldset": {
                  borderColor: "#A8DADC", // Contorno más claro en hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFFFFF", // Contorno blanco en focus
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
          InputLabelProps={{ style: { color: '#ffffff' } }}
          InputProps={{
            style: { color: '#ffffff' },
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFFFFF", // Contorno blanco por defecto
                },
                "&:hover fieldset": {
                  borderColor: "#A8DADC", // Contorno más claro en hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFFFFF", // Contorno blanco en focus
                },
              },
            },
          }}
        />

        <Stack direction="row" spacing={2} justifyContent="center" marginTop={2}>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            sx={{
              bgcolor: "#25D366",
              "&:hover": {
                bgcolor: "#1EBF57",
                transform: "scale(1.05)",
                transition: "transform 0.3s",
              },
            }}
          >
            WhatsApp
          </Button>
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            onClick={handleEmail}
            sx={{
              bgcolor: "#D44638",
              "&:hover": {
                bgcolor: "#C1351A",
                transform: "scale(1.05)",
                transition: "transform 0.3s",
              },
            }}
          >
            Correo Electrónico
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;

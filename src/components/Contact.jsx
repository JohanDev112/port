import { useState } from "react";
import { Box, TextField, Button, Stack, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Por favor, completa todos los campos antes de enviar.", {
        position: "top-center",
      });
      return;
    }

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_hsr3kke", 
        "template_dhwhagm", 
        templateParams,
        "nakCj7OnlVWVReTxp"
      )
      .then(() => {
        toast.success("¡Correo enviado exitosamente!", {
          position: "top-center",
        });
      })
      .catch(() => {
        toast.error(
          "Hubo un error al enviar el correo. Por favor, verifica tu conexión e inténtalo de nuevo.",
          {
            position: "top-center",
          }
        );
      });
  };

  return (
    <Box
      component="form"
      sx={{
        marginTop: 4,
        padding: 4,
        bgcolor: "#1F2A48",
        borderRadius: 2,
        color: "#FFFFFF",
        maxWidth: { xs: "90%", md: "70%", lg: "60%" },
        width: "90%",
        marginX: "auto",
      }}
      onSubmit={sendEmail}
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
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#25D366",
            color: "#FFFFFF",
            "&:hover": {
              bgcolor: "#1EBF57",
            },
            maxWidth: { xs: "100%", sm: "200px" }, 
            width: "100%", 
            alignSelf: "center", 
          }}
        >
          Enviar
        </Button>
        <ToastContainer position="top-right" />
      </Stack>
    </Box>
  );
};

export default Contact;

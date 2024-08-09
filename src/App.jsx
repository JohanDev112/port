import { Box, Stack } from "@mui/material";
import Profile from "./components/Profile";
import Vertical from "./components/Vertical";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box bgcolor={'#070F21'} display="flex" flexDirection="column" minHeight="100vh">
      {/* Navbar */}
      <Stack padding={10} flexGrow={1}>
        <Profile />
      </Stack>

      {/* Summary */}
      <Stack flexGrow={1}>
        <Vertical />
      </Stack>

      {/* Contact Form */}
      <Stack flexGrow={1} margin={3}>
        <Contact />
      </Stack>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default App;

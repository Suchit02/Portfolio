import { Box, Divider } from '@mui/material';
import './App.css';
import Layout from './Components/LayoutWrapper/Layout'
import About from './Components/Pages/AboutPage/About';
import Home from './Components/Pages/HomePage/Home';
import Services from './Components/Pages/ServiecesPage/Services';
import Projects from './Components/Pages/ProjectsPage/Projects';
import Contact from './Components/Pages/ContactPage/Contact';

function App() {
  return (
    <>
      <Layout>
        <Box overflow={'hidden'}>
          <Home />
          <Divider />
          <About />
          <Divider />
          <Services />
          <Divider />
          <Projects />
          <Divider />
          <Contact />
        </Box>
      </Layout>
    </>
  );
}

export default App;

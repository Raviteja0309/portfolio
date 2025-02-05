import React from 'react';
import { Container, Row, Col, Card, Button, Nav, Navbar } from 'react-bootstrap';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { Github, Linkedin, Mail, ExternalLink, Code2, Blocks, Database, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Ravi Teja Chintala</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
          color: 'white',
          py: 12
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={8} className="mx-auto text-center">
              <Typography variant="h2" component="h2" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                Ravi Teja Chintala
              </Typography>
              <Typography variant="h4" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.9)' }}>
                Frontend Developer
              </Typography>
              <div className="d-flex gap-3 justify-content-center">
                <Button variant="light" href="https://github.com" className="d-flex align-items-center gap-2">
                  <Github size={20} />
                  GitHub
                </Button>
                <Button variant="light" href="https://linkedin.com" className="d-flex align-items-center gap-2">
                  <Linkedin size={20} />
                  LinkedIn
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Box>

      {/* About Section */}
      <Container className="py-5" id="about">
        <Row>
          <Col md={8} className="mx-auto">
            <Typography variant="h3" component="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
              About Me
            </Typography>
            <Paper elevation={0} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                I'm a passionate frontend developer with 2 years of experience in building modern web applications. 
                I specialize in React, JavaScript, and modern CSS frameworks, with a strong focus on creating 
                responsive and accessible user interfaces.
              </Typography>
              <Button variant="link" href="mailto:alex@example.com" className="p-0 d-flex align-items-center gap-2">
                <Mail size={20} />
                ravichinna2715@gmail.com
              </Button>
            </Paper>
          </Col>
        </Row>
      </Container>

      {/* About Experience */}
      <Container className="py-5" id="about">
        <Row>
          <Col md={8} className="mx-auto">
            <Typography variant="h3" component="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
              Experience & Education
            </Typography>
            <Paper elevation={0} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                I'm a passionate frontend developer with 2 years of experience in building modern web applications. 
                I specialize in React, JavaScript, and modern CSS frameworks, with a strong focus on creating 
                responsive and accessible user interfaces.
              </Typography>
              <Button variant="link" href="mailto:alex@example.com" className="p-0 d-flex align-items-center gap-2">
                <Mail size={20} />
                ravichinna2715@gmail.com
              </Button>
            </Paper>
          </Col>
        </Row>
      </Container>

      {/* Skills Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 5 }} id="skills">
        <Container>
          <Typography variant="h3" component="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
            Skills & Technologies
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={3}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Code2 size={48} className="text-primary mb-3" />
                <Typography variant="h6" sx={{ mb: 2 }}>Frontend Development</Typography>
                <Typography variant="body2" color="text.secondary">
                  React, JavaScript, HTML5, CSS3
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Blocks size={48} className="text-primary mb-3" />
                <Typography variant="h6" sx={{ mb: 2 }}>UI Frameworks</Typography>
                <Typography variant="body2" color="text.secondary">
                  Bootstrap, Material-UI
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Database size={48} className="text-primary mb-3" />
                <Typography variant="h6" sx={{ mb: 2 }}>State Management</Typography>
                <Typography variant="body2" color="text.secondary">
                  Context API, React Maps
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Terminal size={48} className="text-primary mb-3" />
                <Typography variant="h6" sx={{ mb: 2 }}>Tools</Typography>
                <Typography variant="body2" color="text.secondary">
                  Git, Node
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Container className="py-5" id="projects">
        <Typography variant="h3" component="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
          Featured Projects
        </Typography>
        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src="https://cmsphoto.ww-cdn.com/superstatic/41269/art/grande/8594410-13544907.jpg?v=1611760844.6387932&force_webp=1"
                alt="E-commerce Dashboard"
              />
              <Card.Body>
                <Card.Title>Multi-Lingual Chat Application</Card.Title>
                <Card.Text>
                  A responsive website built with React and JavaScript, which allow users to have chat conversation with multiple languges.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src="https://ems2.eci.gov.in/static/media/evm_logo.02fe48bf149a4e162435.png"
                alt="Task Management App"
              />
              <Card.Body>
                <Card.Title>EMS 2.O</Card.Title>
                <Card.Text>
                  I supported and maintained website application for clients such as Electionics Corporation of India Limited (ECIL). I work with interactive UI design and API implementation using React JS.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#212529', color: 'white', py: 4, mt: 'auto' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <Typography variant="body2">
                &copy; 2025 Ravi Teja Chintala. All rights reserved.
              </Typography>
            </Col>
            <Col md={6}>
              <div className="d-flex gap-4 justify-content-center justify-content-md-end">
                <a href="https://github.com" className="text-white">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="text-white">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:alex@example.com" className="text-white">
                  <Mail size={24} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Box>
    </div>
  );
}

export default App;
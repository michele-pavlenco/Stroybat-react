import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../img/logoStroybat.png";

const Navigation = () => {
  return (
    // <Navbar
    // 	collapseOnSelect
    // 	expand="lg"
    // 	bg="light"
    // 	fixed="top">
    // 	<Container>
    // 		<Navbar.Brand href="../">
    // 			<img
    // 				src={Logo}
    // 				alt="Logo"
    // 				className="nav-logo"
    // 			/>
    // 		</Navbar.Brand>
    // 		<Navbar.Toggle
    // 			aria-controls="responsive-navbar-nav"
    // 			className="custom-toggler navbar-toggle">
    // 			<span className="icon-bar"></span>
    // 			<span className="icon-bar"></span>
    // 			<span className="icon-bar"></span>
    // 		</Navbar.Toggle>
    // 		<Navbar.Collapse id="responsive-navbar-nav">
    // 			<Nav className="ml-auto">
    // 				<Nav.Link
    // 					href="../#features"
    // 					className="page-scroll">
    // 					Features
    // 				</Nav.Link>
    // <Nav.Link
    // 	href="../#about"
    // 	className="page-scroll">
    // 	À propos
    // </Nav.Link>
    // 				<Nav.Link
    // 					href="../#services"
    // 					className="page-scroll">
    // 					Prestations de service
    // 				</Nav.Link>
    // 				<Nav.Link
    // 					href="../#portfolio"
    // 					className="page-scroll">
    // 					Galerie
    // 				</Nav.Link>
    // 				<Nav.Link
    // 					href="../#testimonials"
    // 					className="page-scroll">
    // 					Clientèle
    // 				</Nav.Link>
    // 				<Nav.Link
    // 					href="#contact"
    // 					className="page-scroll">
    // 					Contact
    // 				</Nav.Link>
    // 			</Nav>
    // 		</Navbar.Collapse>
    // 	</Container>
    // </Navbar>

    <Navbar sticky="top"  expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="../">
          <img src={Logo} alt="Logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../#features" className="page-scroll">
              Features
            </Nav.Link>
            <Nav.Link href="../#about" className="page-scroll">
              À propos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav
    // 	id="menu"
    // 	className="navbar navbar-default navbar-fixed-top">
    // 	<div className="container">
    // 		<div className="navbar-header">
    // 			<button
    // 				type="button"
    // 				className="navbar-toggle collapsed"
    // 				data-toggle="collapse"
    // 				data-target="#bs-example-navbar-collapse-1">
    // 				{" "}
    // 				<span className="sr-only">Toggle navigation</span>{" "}
    // 				<span className="icon-bar"></span>{" "}
    // 				<span className="icon-bar"></span>{" "}
    // 				<span className="icon-bar"></span>{" "}
    // 			</button>
    // 			<a
    // 				className="navbar-brand page-scroll"
    // 				href="../">
    // 				<img
    // 					className="nav-logo"
    // 					src={Logo}
    // 					alt="Logo"
    // 				/>
    // 			</a>{" "}
    // 		</div>

    // 		<div
    // 			className="collapse navbar-collapse"
    // 			id="bs-example-navbar-collapse-1">
    // 			<ul className="nav navbar-nav navbar-right">
    // 				<li>
    // 					<a
    // 						href="../#features"
    // 						className="page-scroll">
    // 						Features
    // 					</a>
    // 				</li>
    // 				<li>
    // 					<a
    // 						href="../#about"
    // 						className="page-scroll">
    // 						À propos
    // 					</a>
    // 				</li>
    // 				<li>
    // 					<a
    // 						href="../#services"
    // 						className="page-scroll">
    // 						Prestations de service
    // 					</a>
    // 				</li>
    // 				<li>
    // 					<a
    // 						href="../#portfolio"
    // 						className="page-scroll">
    // 						Galerie
    // 					</a>
    // 				</li>
    // 				<li>
    // 					<a
    // 						href="../#testimonials"
    // 						className="page-scroll">
    // 						Clientèle
    // 					</a>
    // 				</li>
    // 				<li>
    // 					<a
    // 						href="#contact"
    // 						className="page-scroll">
    // 						contact
    // 					</a>
    // 				</li>
    // 			</ul>
    // 		</div>
    // 	</div>
    // </nav>
  );
};

export default Navigation;

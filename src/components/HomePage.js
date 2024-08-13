import React from "react";
import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Arial', sans-serif",
      backgroundColor: "#000",
      color: "#fff",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",  // Full height of the viewport
      overflow: "hidden",
      backgroundImage:
        'url("https://www.playspots.in/wp-content/uploads/2021/03/yS0YQ5MYLH.jpg)',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "20px 40px",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 10,
    },
    logo: {
      width: "50px",
      height: "50px",
      
    },
    headerLinks: {
      display: "flex",
      alignItems: "center",
    },
    link: {
      display: "block",
      margin: "0 10px",
      color: "#fff",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#00cc00",
    },
    content: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "left",
      width: "100%",
      maxWidth: "1200px",
      padding: "20px",
      position: "relative",
      top: "100px",
    },
    title: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "20px",
      textShadow: "0 0 5px #000",
      maxWidth: "400px",
      color: "white",
    },
    description: {
      fontSize: "24px",
      marginBottom: "40px",
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      alignItems: "flex-start",
    },
    button: {
      padding: "8px 25px",
      border: "none",
      borderRadius: "25px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#00cc00",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#009900",
    },
    phoneMockups: {
      display: "flex",
      gap: "20px",
      marginLeft: "auto",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "20px",
      position: "absolute",
      bottom: "10px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    socialLinks: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    socialLink: {
      display: "block",
      width: "30px",
      height: "30px",
      backgroundColor: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "black",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
    },
    socialLinkHover: {
      backgroundColor: "#00cc00",
    },
  };

  const handleBookVenueClick = () => {
    navigate("/signup");
  };

  const handleGetListedClick = () => {
    navigate("/getlisted");
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="https://hdstockimages.com/wp-content/uploads/2024/01/65ba3b95d363c.png" alt="PlaySpots Logo" style={styles.logo} />
        <nav style={styles.headerLinks}>
          <Link to="/about" style={styles.link}>
            About
          </Link>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
          <Link to="/blog" style={styles.link}>
            Blog
          </Link>
        </nav>
      </header>
      <div style={styles.content}>
        <div>
          <h1 style={styles.title}>
            YOUR NEAREST <br /> SPORTS COMMUNITY
          </h1>
          <p style={styles.description}>IS JUST A TAP AWAY</p>
          <div style={styles.buttons}>
            <button
              style={styles.button}
              onClick={handleBookVenueClick}
            >
              To Book Venue
            </button>
            <button
              style={styles.button}
              onClick={handleGetListedClick}
            >
              To Get Listed
            </button>
          </div>
        </div>
        <div style={styles.phoneMockups}>
          <div style={styles.phone}></div>
          <div style={styles.phone}></div>
        </div>
      </div>
      <footer style={styles.footer}>
        <div style={styles.socialLinks}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

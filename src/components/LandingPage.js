import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/homepage');
    }, 4000); // 4 seconds before redirecting to the sign-in page

    return () => clearTimeout(timer);
  }, [navigate]);

  const styles = {
    landingPage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#0c0f2d',
    },
    heading: {
      color: 'white',
      fontSize: '8rem',
      fontWeight: '400',
      display: 'flex',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.2',
    },
    word: {
      opacity: 0,
      animation: 'fadeIn 1s forwards',
      flex: '1',
    },
    word1: {
      animationDelay: '0s',
    },
    word2: {
      animationDelay: '1s',
    },
    word3: {
      animationDelay: '2s',
    },
  };

  return (
    <>
      <GlobalStyle />
      <div style={styles.landingPage}>
        <h1 style={styles.heading}>
          <span style={{ ...styles.word, ...styles.word1 }}>Let </span>
          <span style={{ ...styles.word, ...styles.word2 }}>The </span>
          <span style={{ ...styles.word, ...styles.word3 }}>FUN </span>
          <span style={{ ...styles.word, ...styles.word3 }}>Begin!</span>
        </h1>
      </div>
    </>
  );
};

export default LandingPage;

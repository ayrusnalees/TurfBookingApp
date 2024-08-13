import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const PartnerWithUsForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async(data) => {
    try {
      // Sending data to the Spring Boot backend
      const response = await fetch('http://localhost:8080/partnerships', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Partnership created:', await response.json());
        setShowPopup(true); // Show the pop-up message
        reset(); // Reset form fields after submission
      } else {
        console.error('Failed to create partnership');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Name"
            style={styles.formControl}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p style={styles.errorText}>{errors.name.message}</p>}
          <input
            type="email"
            placeholder="Email Id"
            style={styles.formControl}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p style={styles.errorText}>{errors.email.message}</p>}
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Venue Name"
            style={styles.formControl}
            {...register('venue', { required: 'Venue Name is required' })}
          />
          {errors.venueName && <p style={styles.errorText}>{errors.venueName.message}</p>}
          <input
            type="text"
            placeholder="Choose Sport Type"
            style={styles.formControl}
            {...register('sportType', { required: 'Sport Type is required' })}
          />
          {errors.sportType && <p style={styles.errorText}>{errors.sportType.message}</p>}
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Contact Number"
            style={styles.formControl}
            {...register('contactNumber', {
              required: 'Contact Number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Invalid contact number',
              },
            })}
          />
          {errors.contactNumber && <p style={styles.errorText}>{errors.contactNumber.message}</p>}
          <input
            type="text"
            placeholder="Location"
            style={styles.formControl}
            {...register('location', { required: 'Location is required' })}
          />
          {errors.location && <p style={styles.errorText}>{errors.location.message}</p>}
        </div>
        {/* <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Booking Number"
            style={styles.formControl}
            {...register('bookingNumber')}
          />
          <input
            type="text"
            placeholder="Other Details"
            style={styles.formControl}
            {...register('otherDetails')}
          /> */}
        {/* </div> */}
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>

      {/* Popup Modal */}
      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupContent}>
            <h2>Thank you for choosing GoTurf</h2>
            <p>We have received your message, and our Onboarding team will get back to you soon.</p>
            <button style={styles.closeButton} onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  formGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  formControl: {
    width: '48%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#006400',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  errorText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    width: '80%',
    maxWidth: '400px',
  },
  closeButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#006400',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};



const PartnerWithUsPage = () => {
  const styles = {
    container: {
      textAlign: "center",
      fontFamily: "'Arial', sans-serif",
      color: "#333",
      margin: 0,
      padding: 0,
    },
    header: {
      backgroundColor: "#fff",
      padding: "20px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    logo: {
      width: "150px",
    },
    heroSection: {
      backgroundImage:
        "url('https://www.playspots.in/wp-content/uploads/2021/03/yS0YQ5MYLH.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      padding: "100px 0",
      position: "relative",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    heroContent: {
      position: "relative",
      zIndex: 2,
    },
    heroTitle: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    statsSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      padding: "40px 0",
      backgroundColor: "#f0f8f0",
    },
    statBox: {
      backgroundColor: "#e8ffed",
      padding: "20px",
      borderRadius: "12px",
      textAlign: "center",
      width: "200px",
    },
    statNumber: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#006600",
    },
    statLabel: {
      fontSize: "18px",
      color: "#333",
    },
    businessSection: {
      padding: "60px 20px",
      backgroundColor: "#fff",
    },
    businessTitle: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    businessSubTitle: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "40px",
      color: "#006600",
    },
    businessImage: {
      width: "100%",
      maxWidth: "600px",
      marginTop: "20px",
    },
    formSection: {
      backgroundColor: "#e8ffed",
      padding: "40px 20px",
      borderRadius: "12px",
      maxWidth: "800px",
      margin: "40px auto",
    },
    formTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#006600",
    },
    formGroup: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "20px",
    },
    formControl: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      width: "100%",
    },
    submitButton: {
      backgroundColor: "#006600",
      color: "#fff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "20px",
      backgroundColor: "#f0f8f0",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="https://www.playspots.in/wp-content/uploads/2021/03/playspots-logo.png"
          alt="PlaySpots Logo"
          style={styles.logo}
        />
      </header>
      <div style={styles.heroSection}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>PARTNER WITH US</h1>
        </div>
      </div>
      <div style={styles.statsSection}>
        <div style={styles.statBox}>
          <div style={styles.statNumber}>400000+</div>
          <div style={styles.statLabel}>Users</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statNumber}>1000+</div>
          <div style={styles.statLabel}>Venues</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statNumber}>160+</div>
          <div style={styles.statLabel}>Cities</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statNumber}>50+</div>
          <div style={styles.statLabel}>Sports</div>
        </div>
        <div style={styles.statBox}>
          <div style={styles.statNumber}>18</div>
          <div style={styles.statLabel}>States</div>
        </div>
      </div>

      <div style={styles.businessSection}>
        <h2 style={styles.businessTitle}>Grow Your Business With</h2>
        <h3 style={styles.businessSubTitle}>GoTurf</h3>
        {/* <img src="/images/business.jpg" alt="Business Image" style={styles.businessImage} /> */}
      </div>

      {/* Form Section */}
      <div style={styles.formSection}>
        <h2 style={styles.formTitle}>Partnership Form</h2>
        <PartnerWithUsForm /> {/* Using the form component */}
      </div>

      <footer style={styles.footer}>
        <p>© 2024 GoTurf. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PartnerWithUsPage;
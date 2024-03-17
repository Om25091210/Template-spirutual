import React from 'react';
import styles from './Contact.module.css';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast as notify } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // State
  const [email, setEmail] = useState('');
  const time = new Date().toLocaleString();

  // Toast configurations
  const toastConfig = {
    position: 'top-right',
    autoClose: 3000, // 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style :{
        fontSize: '14px'
    }
  };

  // Validation of Email
  const validateEmail = (email) => {
    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Submit event
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation of Email
    if (!validateEmail(email)) {
      // Email is not valid
      notify.error('Invalid email format', toastConfig);
      return;
    }

    try {
      const response = await axios.get(
        'https://script.google.com/macros/s/AKfycbwfbNMAr2cpOSnNIjkvB56w2ZWc1JSr04q2DrF8khDvzKLol7ej1FK5ce4MEYBYATuANQ/exec',
        {
          params: {
            email: email,
            date: time,
          },
        }
      );

      // Clearing Fields
      setEmail('');

      // Show success toast
      notify.success('Email submitted successfully', toastConfig);
    } catch (error) {
      console.error('Error submitting Email', error);

      // Show error toast
      notify.error('Failed to submit email', toastConfig);
    }
  };



    return (
        <>
            <section className={styles.container}>
                <div className={styles.discordContainer}>
                    <div className={styles.contactHead}>
                        <img src='https://unistudio.co/html/nerko/assets/images/divider-02.svg' alt="head" />
                    </div>
                    <div className={styles.discordContent}>
                        {/* <img className={styles.star_1} src='https://unistudio.co/html/nerko/assets/images/objects/star-01.svg' alt='' /> */}
                        {/* <img lassName={styles.img2} src='ttps://unistudio.co/html/nerko/assets/images/objects/star-01.svg' alt='' />
                        <img lassName={styles.img3} src='	https://unistudio.co/html/nerko/assets/images/objects/star-01.svg' alt='' />
                        <img lassName={styles.img4} src='	https://unistudio.co/html/nerko/assets/images/objects/star-01.svg' alt='' />  */}
                        <div className={styles.discordHeading}>
                            <h1>Join the  </h1>
                        </div>

                        <div className={styles.discordTitle}>
                            <h1>WAITLIST</h1>
                        </div>
    

                        <div className={styles.emailBox}>
                            <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder='Enter your Email' className={styles.emailInput} 
                            onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                
                            <button type="submit"  className={styles.submitBtn}>Send</button>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>

                </div>

            </section>
            <footer>
                <div className={styles.socialContainer}>

                    <div className={styles.leftImage}>
                        {/* <img src='assets/images/stake-img.png' alt='contact-image' /> */}
                    </div>

                    <div className="footer">
                        <div className={styles.socialItems}>
                            <div className={styles.socialIcons}>
                                <a href='https://www.facebook.com/MultiplayrHQ' target='_blank' rel="noopener noreferrer">
                                     <i className="fa fa-facebook fa-lg " aria-hidden="true"></i>
                                </a>
                                <a href='https://www.instagram.com/multiplayrhq' target='_blank' rel="noopener noreferrer">
                                     <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                                </a>
                                <a href='https://twitter.com/MultiplayrHQ' target='_blank' rel="noopener noreferrer">
                                    <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/multiplayr/about/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
                                </a>
                                      <i className="fa fa-youtube fa-lg "></i>
                            </div>
                        </div>
                        <div className={styles.condition}>
                            <span>Privacy</span>
                            <span>Terms of use</span>
                        </div>
                        <div className={styles.reserved}>
                            <p style={{ color: "gray", fontSize: "14px" }}><span className='condition'>@2024 Multiplayr Esports Private Limited. All rights reserved.</span></p>
                        </div>
                    </div>

                    <div className={styles.rightImage}>
                        {/* <img src='assets/images/stake-img.png' alt='contact-image' /> */}
                    </div>

                </div>
                
            </footer>
        </>
    )
}
export default Contact
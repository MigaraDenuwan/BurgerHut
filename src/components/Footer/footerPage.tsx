import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBackground}>
        <div className={styles.footerContent}>
          <div className={styles.logoContainer}>
            <img className={styles.logoImage} src="/images/logo.jpg" alt="Logo" />
            <div className={styles.logoOverlay}></div>
          </div>
          <div className={styles.companyInfo}>
            <div className={styles.companyName}>xtellig pvt ltd</div>
            <div className={styles.rightsReserved}>All rights reserved © 2024 : ACN 669 812 471</div>
            <div className={styles.policyContainer}>
              <div className={styles.policy}>Privacy Policy</div>
              <div className={styles.dot}></div>
              <div className={styles.policy}>Terms and Conditions</div>
            </div>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactIcons}>
            <div className={styles.iconContainer}>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <img className={styles.iconImage} src="/images/XDark Logo.png" alt="Icon" />
              </a>
              <div className={styles.iconOverlay}></div>
            </div>
            <div className={styles.iconContainer}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img className={styles.iconImage} src="/images/LinkedInDarkLogo.png" alt="Icon" />
              </a>
              <div className={styles.iconOverlay}></div>
            </div>
            <div className={styles.iconContainer}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img className={styles.iconImage} src="/images/InstergramDark.png" alt="Icon" />
              </a>
              <div className={styles.iconOverlay}></div>
            </div>
            <div className={styles.iconContainer}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img className={styles.iconImage} src="/images/FaceBookDarkLogo.png" alt="Icon" />
              </a>
              <div className={styles.iconOverlay}></div>
            </div>
          </div>
          <div className={styles.contactEmail}>
              <a href="mailto:contact@xtellig pvt ltd.com">contact@xtellig pvt ltd.com</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

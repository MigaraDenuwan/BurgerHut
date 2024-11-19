import React from 'react';
import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.textContainer}>
      <div className={styles.title}>
        <h1 className={styles.mainTitle}>Transform Your Dining Experience with</h1>
        <h1 className={styles.subTitle}>Our Innovative Digital Menu</h1>
      </div>
      
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <div className={styles.stepTitle}>Step 01</div>
          <p className={styles.stepDescription}>
            Scan the QR Code Embark on a culinary journey by scanning the QR code on your table using your smartphone.
          </p>
        </div>
        
        <div className={styles.step}>
          <div className={styles.stepTitle}>Step 02</div>
          <p className={styles.stepDescription}>
            Explore and Personalize Discover our diverse digital menu and tailor your dining experience to your unique tastes.
          </p>
        </div>

        <div className={styles.step}>
          <div className={styles.stepTitle}>Step 03</div>
          <p className={styles.stepDescription}>
            Effortless Ordering, Instant Gratification Witness the magic as your selections seamlessly reach our cashier and kitchen, ensuring swift fulfillment.
          </p>
        </div>

        <div className={styles.step}>
          <div className={styles.stepTitle}>Step 04</div>
          <p className={styles.stepDescription}>
            Savour Every Moment Relish in the pleasure of timely and delicious dishes delivered right to your table, making every bite memorable.
          </p>
        </div>
        <div className={styles.line} style={{ left: '159px', top: '240.5px' }}></div>
        <div className={styles.line} style={{ left: '540px', top: '240.5px' }}></div>
        <div className={styles.rotatedLine} style={{ left: '378.5px', top: '237.5px' }}></div>
      </div>
    </div>
  );
};

export default Title;

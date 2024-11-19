"use client"; 

import React from 'react';
import styles from './SubPlansPremium.module.css';

const SubPlan: React.FC = () => {
  return (
   <div className={styles.card}>
    <div className={styles.header}>
    <img src="/images/crown.png" alt="crown" />
        <div className={styles.qrCode}>
            <img src="/images/QRimage.png" alt="QR Code" />
        </div>
        <h2 className={styles.planTitle}>Primium</h2>
        <p className={styles.planSubtitle}>Subscription Plan</p>
    </div>
    <div className={styles.slidingBox}>
    <div className={styles.priceContainer}>
        <span className={styles.price}>Rs 29,900</span>
    </div>
        <div className={styles.description}>
        <div className={styles.Group34}>
      <div className={styles.title}>
        Seamless Connectivity Across Devices
      </div>
      <div className={styles.title} style={{ top: '81px' }}>
        Bespoke QR Menu
      </div>
      <div className={styles.title} style={{ top: '162px' }}>
        Glowing Customer Testimonials
      </div>
      <div className={styles.title} style={{ top: '243px' }}>
        Enhanced Dining Experience with Built-in POS
      </div>
      <div className={styles.description1} style={{ top: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lacus, congue a turpis a, bibendum finibus lacus.
      </div>
      <div className={styles.description1} style={{ top: '101px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lacus, congue a turpis a, bibendum finibus lacus.
      </div>
      <div className={styles.description1} style={{ top: '182px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lacus, congue a turpis a, bibendum finibus lacus.
      </div>
      <div className={styles.description1} style={{ top: '283px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lacus, congue a turpis a, bibendum finibus lacus.
      </div>
      <div className={styles.maskGroup} style={{ top: '3px' }}>
        <img src="/images/trueImageWhite.png" alt="icon" className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.maskGroup} style={{ top: '84px' }}>
        <img src="/images/trueImageWhite.png" alt="icon" className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.maskGroup} style={{ top: '165px' }}>
        <img src="/images/trueImageWhite.png" alt="icon" className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.maskGroup} style={{ top: '246px' }}>
        <img src="/images/trueImageWhite.png" alt="icon" className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
    </div>
        </div>
    </div>
</div>


  );
};

export default SubPlan;

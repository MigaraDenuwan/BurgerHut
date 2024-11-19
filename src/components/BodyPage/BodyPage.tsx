import React from 'react';
import styles from './BodyPage.module.css';
import SubPlan from '../SubPlans/Subplan';
import SubPlansPrimium from '../SubPlansPrimium/SubPlansPrimium';

const BodyPage: React.FC = () => {
  return (
    <div>
      <div className={styles.OurPricingPlans}>Our Pricing Plans</div>
      
      <div className={styles.subPlanContainer}>
        <SubPlan />
        <SubPlansPrimium />
      </div>
      
      <div className={styles.TrustedBy750Restaurants}>Trusted by 750+ Restaurants</div>
      <div className={styles.LoremIpsum}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lacus, congue a turpis a, bibendum finibus lacus. Nam arcu nunc, dapibus in condimentum non, interdum eleifend justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec bibendum augue porta, convallis nunc at, aliquet mauris. Nam massa eros, semper vel venenatis sit amet, imperdiet quis purus. Curabitur ut risus nulla. Vestibulum feugiat congue velit non sollicitudin. Donec nec mauris rutrum, rhoncus ipsum et, pulvinar dolor. Nam vel ex mollis, pellentesque urna non, faucibus ligula.
      </div>
      <div className={styles.Rectangle12}>
      <div className={styles.RestaurantMenuForUltimateDiningExperience}>
        Restaurant Menu for Ultimate Dining Experience
      </div>
      <div className={styles.LoremIpsum2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lacus, congue a turpis a, bibendum finibus lacus. Nam arcu nunc, dapibus in condimentum non, interdum eleifend justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
      </div>
      </div>
    </div>
  );
};

export default BodyPage;

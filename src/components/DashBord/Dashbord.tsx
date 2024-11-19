import styles from './Dashbord.module.css'; // Make sure the CSS file exists

const Dashbord = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/images/BackgroundImage.jpeg"
          alt="Header Image"
          width="1367"
          height="705"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default Dashbord;

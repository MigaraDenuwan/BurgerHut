import Dashbord from './components/DashBord/Dashbord';
import Title from './components/Title/Title';
import Slideshow from './components/SlideShow/slideShow';
import FormComponent from './components/FormComponent/FormComponent';
import ContactUs from './components/Contact/ContactUs';
import Footer from './components/Footer/footerPage';
import BodyPage from './components/BodyPage/BodyPage';
import styles from './App.module.css';

const App = () => {
  return (
    <>
      <Dashbord />
      <div className={styles.titleContainer}>
        <Title />
      </div>
      <div className={styles.phone}>
        <Slideshow />
      </div>
      <div className={styles.form}>
        <FormComponent />
      </div>
      <div className={styles.contact}>
        <ContactUs />
      </div>
      <div className={styles.subPlans}>
        <BodyPage />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <main></main>
      <div style={{ height: '300vh' }}></div>
    </>
  );
}

export default App

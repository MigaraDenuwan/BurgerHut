import styles from './App.module.css';
import BodyPage from './components/BodyPage/BodyPage';
import ContactUs from './components/Contact/ContactUs';
import Dashbord from './components/DashBord/Dashbord';
import Footer from './components/Footer/footerPage';
import FormComponent from './components/FormComponent/FormComponent';
import Slideshow from './components/SlideShow/slideShow';
import Title from './components/Title/Title';

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

export default App;
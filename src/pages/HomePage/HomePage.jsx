import s from "./HomePage.module.css";
import contactBook from '../../assets/icon-contact-book.png'
const HomePage = () => {
  return (
    <div className={s.homeTitle}>
      <h1>Welcome to Contacts Book!</h1>
      <img src={contactBook} alt="Contacts Book" />
    </div>
  );
};

export default HomePage;

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assests/pages/navbar';
import HomePage from './assests/pages/home';
import CoursePage from './assests/pages/course';
import EventPage from './assests/pages/event';
import ContactPage from './assests/pages/contact';
import LoginPage from './assests/pages/login';


function App() {
  return (
    <Header>
    <HomePage />
      {/* <CoursePage/> */}
      {/* <EventPage /> */}
      {/* <ContactPage/> */}
      {/* <LoginPage/> */}
    </Header> 
  );
}

export default App;

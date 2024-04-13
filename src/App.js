import './style.css';
import Expertise from './components/Expertise';
import AboutUs from './components/AboutUs';
import ContactForm from './components/Contact';
import Copyright from './components/Copyright';
import Header from './components/Header';
import Main from './components/Main';
import Works from './components/Works';
import {gsap, Power3} from 'gsap';
import Parallax from './components/Parallax';

function App() {

  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <div className='app'>
      <Header timeline={tl} ease={ease} />
      <Main timeline = {tl} ease={ease} />
      <Works />
      <Expertise />
      <AboutUs />
      <Parallax />
      <ContactForm />
      <Copyright />
    </div>
  );
}

export default App;

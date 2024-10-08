import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Me } from "./components/Me/Me";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";





function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Nav />
      <Me />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

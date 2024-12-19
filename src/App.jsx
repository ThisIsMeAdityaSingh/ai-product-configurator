import "./App.css";
import { GradientHoverButton } from "./components/gradient-hover-button";

export default function App(){
  return (
    <main className="hp-main-container">
      <header className="hp-header-container">
        <section>
          <ul>
            <li>View your past designs</li>
            <li>View open sourced designes</li>
          </ul>
        </section>
        <section>
          <div className="hp-header-login">Login</div>
        </section>
      </header>
      <section className="hp-main-content">
        <div className="main-text">
          <center>Design Your Dream Outfit.</center>
          <center>Share Your Style, Inspire the World</center>
        </div>
        <center className="sub-text">Design your dream outfit with AI. Tell us how you want it to look, and we'll make it happen 😊 Love your design? 
          Open source it for the world to see or order your personalized piece.</center>
        <section className="hp-button-group">
          <GradientHoverButton text={"Start Designing Now"} />
          <GradientHoverButton theme="light" text={"Explore Our Templates"} />
        </section>
      </section>
    </main>
  );
}


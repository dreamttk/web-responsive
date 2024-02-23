import "./App.css";
import React, { useEffect, useState } from "react";
import Logo from "./pic/Logo.png";
import Logow from "./pic/Logow.png";
import sun from "./pic/sun.png";
import sun1 from "./pic/sun1.png";
import Ellipse96 from "./pic/Ellipse96.png";
import Ellipse97 from "./pic/Ellipse97.png";
import Ellipse98 from "./pic/Ellipse98.png";
import clipboard from "./pic/clipboard.png";
import people from "./pic/people.png";
import Frame7 from "./pic/Frame7.png";
import Frame71 from "./pic/Frame71.png";
import Frame8 from "./pic/Frame8.png";
import timer from "./pic/timer.png";
import iwilfinbg from "./pic/iwilfinbg.png";
import rafiki1 from "./pic/rafiki1.png";
import amico1 from "./pic/amico1.png";
import bro1 from "./pic/bro1.png";
import Avatar1 from "./pic/Avatar1.png";
import Avatar2 from "./pic/Avatar2.png";
import Avatar3 from "./pic/Avatar3.png";
import Avatar4 from "./pic/Avatar4.png";
import Avatar5 from "./pic/Avatar5.png";
import Avatar6 from "./pic/Avatar6.png";
import Rate from "./pic/Rate.png";
import mg from "./pic/mg.png";
import b from "./pic/b.png";
import instagram from "./pic/instagram.png";
import Figma from "./pic/Figma.png";
import linkedin from "./pic/linkedin.png";
import twitter from "./pic/twitter.png";
import telegram from "./pic/telegram.png";
import MediumLogo from "./pic/MediumLogo.png";

function App() {
  const [theme, setTheme] = useState("white");
  const ChangeTheme = () => {
    if (theme === "white") {
      setTheme("black");
    } else {
      setTheme("white");
    }
  };
  useEffect(() => {
    if (theme === "white") {
      document.body.style.backgroundColor = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#1f1f1f";
    }
  },[theme]);
  return (
    <>
      <div className={`top-bar-wep bg-${theme}`}>
        <div className="logo-tian">
          <img
            className="pic-logo-tian"
            src={theme === "white" ? Logo : Logow}
          />
        </div>
        <div className={`box-menu font-${theme}`}>
          <b className="font-menu">Home</b>
          <b className="font-menu1">About us</b>
          <b className="font-menu2">Couses</b>
          <b className="font-menu">FAQ</b>
          <button className="but-contact">Contact Us</button>
          <div onClick={() => ChangeTheme()} className="sun-box">
            <img src={theme === "white" ? sun : sun1} />
          </div>
        </div>
      </div>

      <img className="Avatar1" src={Avatar1} />

      <img className="Avatar3" src={Avatar3} />
      <img className="Avatar4" src={Avatar4} />
      <img className="Avatar5" src={Avatar5} />
      <img className="Avatar6" src={Avatar6} />
      <img className="Rate" src={Rate} />
      <img className="mg" src={mg} />
      <img className="b" src={b} />

      <div className={`crop-star bg-${theme}`}>
        <div className="start-travel">
          <b className={`font80px font-${theme}`}>
            Where the joy of learn meets the power of community
          </b>
          <p className="font-col2-cc">
            Dive deep in immersive, interactive small groups. Expand horizons,
            engage in discussions, and elevate your learning journey with us.
          </p>
          <div className="set-start-video">
            <button className="but-start">Start your travel</button>
            <button className={`but-video bg-${theme}`}>Watch video</button>
          </div>
        </div>
      </div>

      {/* tag box */}
      <div className="crop-tag-box">
        <div className="tag-box">
          <div className="tag-row">
            <div className="tag-fill">
              <img className="set-icon-fill" src={clipboard} />
            </div>
            <div className="tag-hug">
              <b className="font-hug1">Explore topics</b>
              <p className="font-hug2">
                Explore our selection of
                <br /> courses in development
              </p>
            </div>
          </div>
          <div className="tag-row">
            <div className="tag-fill">
              <img className="set-icon-fill" src={people} />
            </div>
            <div className="tag-hug">
              <b className="font-hug1">Meet new friends</b>
              <p className="font-hug2">
                Join the network with million of
                <br />
                students and learn
              </p>
            </div>
          </div>
          <div className="tag-row">
            <div className="tag-fill">
              <img className="set-icon-fill" src={people} />
            </div>
            <div className="tag-hug">
              <b className="font-hug1">Learn code</b>
              <p className="font-hug2">
                Learn all about code and
                <br />
                become in a developer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`popular-box bg-${theme}`}>
        <div className={`poppilar-font font-${theme}`}>
          <b>Popular courses</b>
        </div>
        <div className="courses">
          <div className="courses-row">
            <div className="pic-couses">
              <img
                className="set-frame7"
                src={theme === "white" ? Frame7 : Frame71}
              />
            </div>
            <b className={`font-top font-${theme}`}>
              Frontend Development with JavaScript
            </b>
            <p className="font-col1">By Cristian Muñoz</p>
            <div>
              <img className="set-timer" src={timer} />
              <b className={`font-col2 font-${theme}`}>Duration:7 weeks</b>
            </div>
            <p className="font-col1">$80.00 USD 80% discount</p>
            <div className="pic-couses">
              <button className={`but-buy but-${theme}`}>
                Buy now $14.00 USD
              </button>
            </div>
          </div>

          <div className="courses-row">
            <div className="pic-couses">
              <img
                className="set-frame8"
                src={theme === "white" ? Frame8 : Frame71}
              />
            </div>
            <b className={`font-top font-${theme}`}>
              Frontend Development with JavaScript
            </b>
            <p className="font-col1">By Cristian Muñoz</p>
            <div>
              <img className="set-timer" src={timer} />
              <b className={`font-col2 font-${theme}`}>Duration:7 weeks</b>
            </div>
            <p className="font-col1">$80.00 USD 80% discount</p>
            <div className="pic-couses">
              <button className={`but-buy but-${theme}`}>
                Buy now $14.00 USD
              </button>
            </div>
          </div>

          <div className="courses-row">
            <div className="pic-couses">
              <img
                className="set-frame8"
                src={theme === "white" ? Frame8 : Frame71}
              />
            </div>
            <b className={`font-top font-${theme}`}>
              Frontend Development with JavaScript
            </b>
            <p className="font-col1">By Cristian Muñoz</p>
            <div>
              <img className="set-timer" src={timer} />
              <b className={`font-col2 font-${theme}`}>Duration:7 weeks</b>
            </div>
            <p className="font-col1">$80.00 USD 80% discount</p>
            <div className="pic-couses">
              <button className={`but-buy but-${theme}`}>
                Buy now $14.00 USD
              </button>
            </div>
          </div>
          <div className="courses-row">
            <div className="pic-couses">
              <img
                className="set-frame8"
                src={theme === "white" ? Frame8 : Frame71}
              />
            </div>
            <b className={`font-top font-${theme}`}>
              Frontend Development with JavaScript
            </b>
            <p className="font-col1">By Cristian Muñoz</p>
            <div>
              <img className="set-timer" src={timer} />
              <b className={`font-col2 font-${theme}`}>Duration:7 weeks</b>
            </div>
            <p className="font-col1">$80.00 USD 80% discount</p>
            <div className="pic-couses">
              <button className={`but-buy but-${theme}`}>
                Buy now $14.00 USD
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="crop-emily">
        <b className="font38">Emily Rolando</b>
        <b className="font-recently">
          I recently started learning to code with Tian and it's been <br />
          a game-changer. The lessons are clear and engaging, perfect for <br />
          beginners like me. I've already built my first app thanks to their{" "}
          <br />
          hands-on approach. Highly recommend Tian for anyone starting <br />
          their coding journey!
        </b>
      </div>

      <div className={`box-col-3 box-bg-${theme}`}>
        <div className="box-col-01">
          <div className="pic-left-col">
            <img className="pic-box-col3" src={rafiki1} />
          </div>
          <div className="pic-right-col">
            <div className="font-right1">
              <b className={`font38 font-${theme}`}>Explore topics</b>
              <p className="font-col-dive">
                Dive deep into our diverse catalog featuring a
                <br />
                curated selection of courses in the realms of arts <br />
                and writing. Experience knowledge crafted by <br />
                experts, designed to inspire and nurture your <br />
                creative journey.
              </p>
            </div>
          </div>
        </div>

        <div className="box-col-01">
          <div className="pic-left-col">
            <img className="pic-box-col3" src={amico1} />
          </div>
          <div className="pic-right-col">
            <div className="font-right1">
              <b className={`font38 font-${theme}`}>Meet new Friends</b>
              <p className="font-col-dive">
                Connect with our expansive network, match with
                <br />
                like-minded peers, and learn code together
              </p>
            </div>
          </div>
        </div>
        <div className="box-col-01">
          <div className="pic-left-col">
            <img className="pic-box-col3" src={bro1} />
          </div>
          <div className="pic-right-col">
            <div className="font-right1">
              <b className={`font38 font-${theme}`}>Find </b>
              <p className="font-col-dive">
                Connect with people around the world
                <br />
                in a huge community with million of students
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`cards-box bg-${theme}`}>
        <div className="logo-bot">
          <img
            className="pic-logo-tian"
            src={theme === "white" ? Logo : Logow}
          />
          <div className="icon-box">
            <img className="sun-box" src={instagram} />
            <img className="sun-box" src={Figma} />
            <img className="sun-box" src={linkedin} />
            <img className="sun-box" src={twitter} />
            <img className="sun-box" src={MediumLogo} />
          </div>
        </div>
        <div className="menu-products">
          <div className={`grid-menu font-${theme}`}>
            <div className="items items1">
              <b>Products</b>
            </div>
            <div className="items items1">
              <b>Resources</b>
            </div>
            <div className="items items1">
              <b>Company</b>
            </div>

            <div className="items items2">Courses</div>
            <div className="items items2">Careers</div>
            <div className="items items2">QA</div>

            <div className="items items3">Development</div>
            <div className="items items3">Blog</div>
            <div className="items items3">
              Terms and conditions
              <br />
              Privacy policy
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

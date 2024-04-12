import NavBar from "../Navbar/Navbar";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
      <>
        <div
          className={styles.herocontainer}
          style={{
            backgroundImage: 'url("/assets/woman.jpg")',
            backgroundSize: "cover",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
        <NavBar />
          <div className={styles.overlay}>
            <div className={styles.content}>
              <svg viewBox= "0 0 960 300">
                <symbol id="s-text">
                  <text text-anchor="middle" x="50%" y="80%">
                    {" "}
                    CODHER
                  </text>
                </symbol>

                <g className="g-ants">
                  <use xlinkHref="#s-text" className={styles.text_copy}></use>
                  <use xlinkHref="#s-text" className={styles.text_copy}></use>
                  <use xlinkHref="#s-text" className={styles.text_copy}></use>
                  <use xlinkHref="#s-text" className={styles.text_copy}></use>
                  <use xlinkHref="#s-text" className={styles.text_copy}></use>
                </g>
              </svg>
              <p>
                An all day hackathon to channel all that inner coddess energy to
                give shape to your amazing ideas. Team up with fellow queen bees
                for an awesome hackathon experience, complete with mentors
                who'll provide you with all the guidance you need. Hack from the
                comfort of your homes/hostel rooms as it's going to be online
                this time. Join us to hack and slay, one line of code at a time.
              </p>
              <a href="https://hack2skill.com/hack/acmceg-codher"><button className={styles.glitch_btn} role="button">Register Now!</button></a>

            </div>
          </div>
        </div>
      </>
    );
}

export default Hero;
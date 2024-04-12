import styles from "./events.module.css"
function Events() {
    return (
      <>
        <div className={styles.event_container} id="pre_events">
          <h2 class="glitch layers" data-text="Pre-events"><span>Pre-events</span></h2>
          <div className={styles.responsive_grid}>
            <div className={styles.event_card}>
              <div>
                <img src="/assets/logicLinkPoster.jpeg" alt="LogicLink" />
              </div>
              <div className = {styles.event_content}>
                <h3>LogicLink- Digital Expedition</h3>
                <p>
                  LogicLink-Digital Expedition invites participants to embark on
                  an individual coding adventure,facing challenges
                  sequentially.The primary goal is to navigate the digital
                  expedition, overcoming coding challenges at each level
                </p>
              </div>
            </div>

            <div className={styles.event_card}>
              <div>
                <img src="/assets/PixelPoster.jpeg" alt="Pixel Perfect" />
              </div>
              <div className = {styles.event_content}>
                <h3>Pixel Perfect!</h3>

                <p>
                  Event merges art and web-dev into one. Participants try to
                  craft the best art pieces they can withing the stipulated time
                  limit... with a twist!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Events;

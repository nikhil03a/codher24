import styles from './Navbar.module.css'

const Navbar = () => {
    return(
        <>
  <div className={styles.nav_container}>
  <h1 className={styles.logo}><a href='https://auceg.acm.org' target='blank'><img src='/assets/ACMLogo.png'/></a></h1>
  <input type="checkbox" id="nav_toggle" className={styles.nav_toggle}/>
  <nav>
    <ul>
      <li><a href="#pre_events">Pre-Events</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#faq">FAQ</a></li>
    </ul>
  </nav>
  <label for="nav_toggle" className={styles.nav_toggle_label}>
    <span></span>
  </label>
</div>
        </>
    )
}

export default Navbar;
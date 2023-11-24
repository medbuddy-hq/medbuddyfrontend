import styles from './HealthCareIndexComponent.module.css'
import svgObject from '@/styles/svgIcons';

const HealthCareIndexComponent = props => {
    return <section className={styles.container}>
   <ul className={styles.welcome_container}>
    <div className={styles.hamburger}>{}</div>
        <li>
          <div className={styles.welcome_text}>
            <h3>Welcome Back!</h3>
          </div>
          <div className={styles.welcome_name}>
            <h4>Winston Ekpong!</h4>
          </div>
        </li>
        <li className={styles.notifications}>{svgObject.notification}</li>
      </ul>
    </section>
}

export default HealthCareIndexComponent;
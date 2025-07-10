import styles from '@/components/css-modules/introduction.module.css';
import { Polaroid } from 'loowis-component-library'

export default function Introduction () {

    return (
        <div className={styles.introduction}>
            <div className={styles.text}>
                <h1 className={styles.title}>
                    Hello 👋
                </h1>
                <p className={styles.information}>
                    I&apos;m Lewis — a fullstack software engineer with a focus on web development.<br /> This site is a place to share some of the projects I&apos;ve worked on in my own time. <br /><br />
                    This site is a place to share some of the projects I&apos;ve worked on in my own time. If you're interested in anything here or want to connect, feel free to reach out via my contact links in the footer.
                </p>
            </div>
            <div className={styles.picture}>
                <Polaroid filename='/picture.jpg' title='Me (in Prague ✈️)' alt='A picture of Lewis Inches'/>
            </div>

        </div>
    );
}
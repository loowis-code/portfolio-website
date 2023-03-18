import Typography from '@mui/material/Typography';
import styles from '@/components/css-modules/aboutme.module.css';

export default function AboutMe () {

    return (
        <div className={styles.aboutme}>
                    <h2 className={styles.header}>
                        About Me
                    </h2>
                    <p className={styles.text}>
                        Hi, I&apos;m Lewis Inches, a software engineer based in Edinburgh. I am currently working at Skyscanner after graduating in May 2022 from Heriot-Watt University.
                    </p>
        </div>
    );
}
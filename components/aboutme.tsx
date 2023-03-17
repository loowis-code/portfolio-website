import Typography from '@mui/material/Typography';
import styles from '@/components/css-modules/aboutme.module.css';

export default function AboutMe () {

    return (
        <div className={styles.aboutme}>
                    <h1 className={styles.header}>
                        About Me
                    </h1>
                    <Typography className={styles.text} variant="body1">
                        Hi, I&apos;m Lewis Inches, a software engineer based in Edinburgh. I am currently working at Skyscanner after graduating in May 2022 from Heriot-Watt University.
                    </Typography>
        </div>
    );
}
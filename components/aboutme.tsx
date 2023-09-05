import styles from '@/components/css-modules/aboutme.module.css';

export default function AboutMe () {

    return (
        <div className={styles.aboutme}>
                    <h2 className={styles.header}>
                        About Me
                    </h2>
                    <p className={styles.text}>
                        Hi, I&apos;m Lewis Inches, a software engineer based in Edinburgh.
                        I am currently working at Skyscanner after graduating in May 2022 from Heriot-Watt University.
                    </p>
                    <p className={styles.text}>During my time at Skyscanner I have worked in frontend, backend and mobile roles and briefly in a product role.</p>
        </div>
    );
}
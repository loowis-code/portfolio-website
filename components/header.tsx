import styles from '@/components/css-modules/header.module.css';

export default function Header () {

    return (
        <div className={styles.header}>
            <div className={styles.info}>
                <h1 className={styles.name}>Lewis Inches</h1>
                <h3 className={styles.title}>software engineer</h3>
            </div>

            <div className={styles.pages}>
                <p className={styles.page}>about me</p>
                <p className={styles.page}>projects</p>
                <p className={styles.page}>contact</p>
            </div>
        </div>
    );
}
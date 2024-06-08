import styles from '@/components/css-modules/header.module.css';
import { useEffect } from 'react';

export default function Header () {


    useEffect(() => {
        window.addEventListener('wheel', function() {
            const header = document.querySelector<HTMLElement>(`.${styles.header}`);
            if (window.scrollY < 150 && header !== null) {
                header.style.opacity = '1';
            } else if (header !== null){
                header.style.opacity = '0.5';
            }
        });
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.info} tabIndex={0}>
                <h1 className={styles.name}>Lewis Inches</h1>
                <h3 className={styles.title}>software engineer</h3>
            </div>

            <div className={styles.pages}>
                <p className={styles.page} tabIndex={0}>about me</p>
                <p className={styles.page} tabIndex={0}>projects</p>
                <p className={styles.page} tabIndex={0}>résumé 🔗</p>
                <p className={styles.page} tabIndex={0}>contact</p>
            </div>
        </div>
    );
}
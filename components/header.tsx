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
                <a className={styles.page} href={'#aboutme'}  tabIndex={0}>about me</a>
                <a className={styles.page} href={'#projects'}  tabIndex={0}>projects</a>
                <a className={styles.page} href={'/resume.pdf'} tabIndex={0}>résumé 🔗</a>
            </div>
        </div>
    );
}
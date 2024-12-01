import styles from '@/components/css-modules/header.module.css';
import { useEffect } from 'react';

export default function Header () {

    useEffect(() => {
        let name = document.getElementById('name');
        if (!name) return;
        let letters = Array.from(name.children) as HTMLElement[];
        let colors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#4b369d', '#70369d'];
        letters.forEach(function (letter, index) {
            letter.style.backgroundColor = colors[index];

        });
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.name} id='name'>
                <div className={styles.letter}>L</div>
                <div className={styles.letter}>O</div>
                <div className={styles.letter}>O</div>
                <div className={styles.letter}>W</div>
                <div className={styles.letter}>I</div>
                <div className={styles.letter}>S</div>
            </div>
            <div className={styles.navTabs}>
                <a href='' className={styles.navTab}>HOME</a>
                <a href='#about-me' className={styles.navTab}>ABOUT ME</a>
                <a href='#projects' className={styles.navTab}>PROJECTS</a>
            </div>
        </div>

    );
}
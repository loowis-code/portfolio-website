import styles from '@/components/css-modules/cv.module.css';

export default function CV () {

    return (
        <div className={styles.card}>
            <div>
                <h2 tabIndex={0}>Skills</h2>
                <ul className={styles.list}>
                    <li tabIndex={0}>JavaScript</li>
                    <li tabIndex={0}>TypeScript</li>
                    <li tabIndex={0}>React</li>
                    <li tabIndex={0}>Next.js</li>
                    <li tabIndex={0}>Python</li>
                    <li tabIndex={0}>Kotlin</li>
                    <li tabIndex={0}>Java</li>
                </ul>
            </div>
        </div>
    );
}
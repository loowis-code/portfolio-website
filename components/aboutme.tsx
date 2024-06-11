import styles from '@/components/css-modules/aboutme.module.css';

export default function AboutMe () {

    return (
        <div className={styles.card}>
            <div>
                <h2 className={styles.header} tabIndex={0} id={"aboutme"}>About Me</h2>
                <p tabIndex={0}>
                    From 2018 to 2022 I studied at Heriot-Watt University in Edinburgh and graduated with a First Class Honours degree in Computer Science. During my studies I took internship roles
                    at the NCSC and BT.
                </p>
                <p tabIndex={0}>
                    After graduating I joined the Skyscanner graduate programme where I rotated around 4 different areas, Frontend, Backend, Mobile and Product. After finishing the programme I moved
                    into my current permanent role as a fullstack engineer.
                </p>
            </div>
        </div>
    );
}
import styles from '@/components/css-modules/aboutme.module.css';

export default function AboutMe () {

    return (
        <div className={styles.card}>
            <div>
                <h2 className={styles.header} tabIndex={0} id={"aboutme"}>About Me</h2>
                <p tabIndex={0}>
                    From 2018 to 2022, I studied Computer Science at Heriot-Watt University in Edinburgh, graduating with First Class Honours. <br /><br />
                    During my time there, I completed internships at both the National Cyber Security Centre (NCSC) and BT, gaining early exposure to real-world engineering environments.<br /><br />
                    After graduating, I joined the Skyscanner graduate programme, where I rotated across four key areas: Frontend, Backend, Mobile, and Product. <br />This gave me a broad perspective on software development and how different disciplines come together to build great products.
                    I&apos;m now working as a fullstack engineer, where I continue to apply and grow that experience across the stack.<br /><br />
                </p>
            </div>
        </div>
    );
}
import styles from '@/components/css-modules/projects.module.css';

export default function Projects () {

    return (
        <div className={styles.card}>
                <h2 className={styles.header} tabIndex={0} id={"projects"}>Projects</h2>
                <div className={styles.body}>
                    <div className={styles.information}>
                        <h3 tabIndex={0}>Photography Website</h3>
                        <p className={styles.description} tabIndex={0}>
                            A website used to display my photography, built using Next.js and FaunaDB.
                        </p>
                        <div className={styles.links}>
                            <a tabIndex={0} className={styles.link} href="https://www.lewisinches.pictures">Website Link</a>
                            <a tabIndex={0} className={styles.link} href="https://github.com/LewisI224/photography-website">Project on Github</a>
                        </div>
                    </div>
                    
                    <div className={styles.imageWrapperR}>
                        <img tabIndex={0} className={styles.image} src="/photography_website.png" alt="Screenshot preview of photography website"></img>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.imageWrapperL}>
                        <img tabIndex={0} className={styles.image} src="/ez-insulin.png" alt="Screenshot preview of photography website"></img>
                    </div>
                    <div className={styles.information}>
                        <h3 tabIndex={0}>Insulin Calculator</h3>
                        <p className={styles.description} tabIndex={0}>
                            A simple starter app to calulate insulin dosages based on current blood sugar readings and estimated carbohydrate content.
                        </p>
                        <div className={styles.links}>
                            <a tabIndex={0} className={styles.link} href="/ez-insulin.sdk">Download SDK 🔗</a>
                            <a tabIndex={0} className={styles.link} href="https://github.com/LewisI224/EzInsulin">Project on Github</a>
                        </div>
                    </div>
                    

                </div>

        </div>
    );
}
import Grid from '@mui/material/Unstable_Grid2';
import CV from '@/components/cv';
import Projects from '@/components/projects';
import styles from '@/components/css-modules/cv_and_projects.module.css';

export default function CVAndProjects () {

    return (
        <Grid className={styles.main} container spacing={2}>
            <Grid xs={6}>
                <CV />
            </Grid>

            <Grid xs={6}>
                <Projects />
            </Grid>
        </Grid>
    );
}
import Grid from '@mui/material/Unstable_Grid2';
import styles from '@/components/css-modules/header.module.css';

export default function Header () {

    return (
        <Grid>
            <Grid display="flex" justifyContent="center" alignItems="center">
                <h1 className={styles.main}>
                Lewis Inches
                </h1>
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center">
                <h2 className={styles.main}>
                Software Engineer
                </h2>
            </Grid>
        </Grid>
    );
}
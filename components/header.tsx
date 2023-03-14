import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import styles from '@/components/css-modules/header.module.css';

export default function Header () {

    return (
        <Grid className={styles.main}>
            <Grid display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h2" >
                Lewis Inches
                </Typography>
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h4">
                Software Engineer
                </Typography>
            </Grid>
        </Grid>
    );
}
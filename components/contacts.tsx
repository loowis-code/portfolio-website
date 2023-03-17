import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2';
import styles from '@/components/css-modules/contacts.module.css';

export default function Contacts () {

    return (
        <div className={styles.main}>
            <Typography className={styles.text} variant="h5">Social Profiles</Typography>
            <Grid className={styles.links} container spacing={2}>
                <Grid>
                    <Link href="https://www.linkedin.com/in/lewisinches" underline="none" color="inherit"><LinkedInIcon /></Link>
                </Grid>
                <Grid>
                    <Link href="https://www.linkedin.com/in/lewisinches" underline="none" color="inherit"><TwitterIcon /></Link>
                </Grid>
                <Grid>
                    <Link href="https://www.linkedin.com/in/lewisinches" underline="none" color="inherit"><InstagramIcon /></Link>
                </Grid>
                <Grid>
                    <Link href="https://www.linkedin.com/in/lewisinches" underline="none" color="inherit"><GitHubIcon /></Link>
                </Grid>
            </Grid>
            
        </div>
    );
}
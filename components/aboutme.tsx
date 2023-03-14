import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import styles from '@/components/css-modules/aboutme.module.css';

export default function AboutMe () {

    return (
        <div className={styles.main}>
            <Grid className={styles.aboutme} container spacing={2}>
                <Grid xs={8}>
                    <Typography variant="h4">
                        About Me
                    </Typography>
                    <Typography variant="body1">
                        Hi, I'm Lewis Inches, a software engineer based in Edinburgh. I am currently working at Skyscanner after graduating in May 2022 from Heriot-Watt University.
                    </Typography>
                    <Typography variant="body1">
                        <br></br>While at University I had internships at the NCSC and BT, where I helped design and implement a series of virtualized lab environments
                        for colleagues to use to enhance their knowledge and skills and to develop and test new software solutions before deploying to client systems.
                    </Typography>
                </Grid>
                <Grid xs={4} display="flex" justifyContent="right">
                    <Avatar className={styles.avatar} alt='Lewis Inches' src='/picture_of_me.jpg' sx={{ width: 250, height: 250 }}/>
                </Grid>
            </Grid>
        </div>
    );
}
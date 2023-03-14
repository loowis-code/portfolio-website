import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from '@/components/css-modules/cv.module.css';

export default function CV () {

    return (
        <div>
            <Typography variant="h4">CV</Typography>


            <Card className={styles.card} sx={{ my: 1}}>
                <CardContent>
                    <Typography className={styles.main} variant="h5">Education</Typography>
                    <Typography className={styles.main} variant="body1">
                    Studied at Heriot-Watt University from 2018 to 2022 and achieved a first class honours degree in Computer Science.
                    </Typography>
                </CardContent>
            </Card>

            <Card className={styles.card} sx={{ my: 1}}>
                <CardContent>
                    <Typography className={styles.main} variant="h5">Experience</Typography>
                    <Typography className={styles.main} variant="body1">
                    In the Summer of 2020 I took part in a summer learning programme with the NCSC about Cyber Security, the following summer I had an internship with BT Security in Glasgow.
                    <br></br>
                    <br></br>
                    Since September 2022 I have been working as a Software Engineer at Skyscanner 
                    </Typography>
                </CardContent>
            </Card>

        </div>
    );
}
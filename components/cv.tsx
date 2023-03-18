import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from '@/components/css-modules/cv.module.css';

export default function CV () {

    return (
        <div>
            <h2 className={styles.header}>CV</h2>


            <Card className={styles.card} sx={{ my: 1}}>
                <CardContent>
                    <h3 className={styles.subheader}>Education</h3>
                    <p className={styles.main}>
                    I studied at Heriot-Watt University in Edinburgh from 2018 to 2022 and achieved a first class bachelors degree in Computer Science.
                    </p>
                </CardContent>
            </Card>

            <Card className={styles.card} sx={{ my: 1}}>
                <CardContent>
                    <h3 className={styles.subheader}>Experience</h3>
                    <p className={styles.main}>
                    During the summer of 2020 I took part in a summer learning programme with the NCSC about Cyber Security. 
                    <br></br>
                    <br></br>
                    In 2021 I had an internship with BT Security in Glasgow, I helped to develop a system capable of delivering
                    a variety of virtualised environments.
                    <br></br>
                    This allowed new client systems to be tested in advance of deployment
                    and would help train staff on new technologies and ways of working.
                    <br></br>
                    <br></br>
                    Since September 2022 I have been working as a Software Engineer at Skyscanner as part of the graduate program.
                    <br></br>
                    During this program I will be rotating through different teams within the company including Frontend, Backend, Mobile and Product.
                    </p>
                </CardContent>
            </Card>

        </div>
    );
}
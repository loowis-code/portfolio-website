import Grid from '@mui/material/Unstable_Grid2';
import styles from '@/components/css-modules/header.module.css';

export default function Header () {

    return (
        <div className={`container text-center ${styles.main}`}>
            <div className='row'>
                <div className="col"></div>
                <div className="col"><h1 className={`container text-center ${styles.header}`}>Lewis Inches</h1></div>
                <div className="col"></div>
                
            </div>
            <div className='row'>
                <div className="col"></div>
                <div className="col"><h2 className={`container text-center ${styles.subheader}`}>Software Engineer</h2></div>
                <div className="col"></div>
                
            </div>
        </div>
    );
}
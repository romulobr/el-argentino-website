import styles from './header.module.css';
import {
    FaWhatsapp,
    FaPhoneVolume,
    FaInstagram,
    FaWhatsappSquare,
    FaPhoneSquare,
    FaInstagramSquare
} from 'react-icons/fa';

function Header({logo, phone, email}) {
    return (<header className={styles.header || 'monkeys'}>
        <div>
            <img src={logo}/>
        </div>
        <div className={styles.contactInfo}>
            <div className={styles.contactIcon}>
                <span><FaWhatsappSquare/></span>{phone}
            </div>
            <div className={styles.contactIcon}>
                <span><FaPhoneSquare/></span>{phone}
            </div>
            <div className={styles.contactIcon}>
                <span><FaInstagramSquare/></span>Instagram
            </div>
        </div>
    </header>)
}

export default Header
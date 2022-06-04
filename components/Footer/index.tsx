import Image from "next/image";
import EmailIcon from "../Icons/EmailIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";
import styles from '../../styles/components/Footer.module.css';
import BigAsteriskIcon from "../Icons/BigAsteriskIcon";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.line}>
                <h1 className={styles.title}>
                    Hey Ho,<br/>
                    <strong>Let&apos;s Code!</strong>
                </h1>

                <Image
                    src="/assets/logo.png"
                    className={styles.image}
                    height={198}
                    width={102}/>
            </div>
            <div className={styles.line}>
                <div className={styles.socialContainer}>
                    <a href="#">
                        <LinkedinIcon/>
                    </a>
                    <a href="#">
                        <InstagramIcon/>
                    </a>
                    <a href="#">
                        <WhatsappIcon/>
                    </a>
                    <a href="#">
                        <EmailIcon/>
                    </a>
                </div>
                <div className={styles.linkContainer}>
                    <div>
                        <h4 className={styles.linkTitle}>Hard Code</h4>
                        <ul className={styles.linkList}>
                            <li className={styles.item}>
                               <a href="#">Manifesto</a>
                            </li>
                            <li className={styles.item}>
                                <a href="#">Metodologia</a>
                            </li>
                            <li className={styles.item}>
                                <a href="#">Mercado</a>
                            </li>
                            <li className={styles.item}>
                                <a href="#">Vagas</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.linkTitle}>Serviços</h4>
                        <ul className={styles.linkList}>
                            <li className={styles.item}>
                                <a href="#">MVP Express</a>
                            </li>
                            <li className={styles.item}>
                                <a href="#">HEAD Express</a>
                            </li>
                            <li className={styles.item}>
                                <a href="#">FINTECH Express</a>
                            </li>
                            <li className={styles.item}>
                                <a href="#">PROJECT Express</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <BigAsteriskIcon className={styles.background}/>
        </footer>
    )
}

export default Footer;
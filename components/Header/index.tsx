import Image from "next/image";
import WhatsappIcon from "../Icons/WhatsappIcon";
import styles from '../../styles/components/Header.module.css';
import useMobile from "../../hooks/useMobile";
import DrawerTrigger from "../Drawer";

const Header = () => {
    const { isMobile } = useMobile();

    return (
        <header className={styles.header}>
            <div>
                <Image
                    className={styles.logo}
                    src="/assets/logo.png"
                    width={64}
                    height={128}
                    layout="raw"
                    alt="Hardcode Logo"/>
            </div>
            { !isMobile && (
                <>
                    <nav className={styles.nav}>
                        <a className={styles.link} href="#manifesto">Manifesto</a>
                        <a className={styles.link} href="#metodologia">Metodologia</a>
                        <a className={styles.link} href="#servico">Serviços</a>
                    </nav>
                    <button type="button" className={styles.button}>
                        <WhatsappIcon/>
                        Let&apos;s Code
                    </button>
                </>
            )}
            {
                isMobile && (
                    <DrawerTrigger>
                        <nav className={styles.nav}>
                            <a className={styles.link} href="#manifesto">Manifesto</a>
                            <a className={styles.link} href="#metodologia">Metodologia</a>
                            <a className={styles.link} href="#servico">Serviços</a>
                        </nav>
                        <button type="button" className={styles.button}>
                            <WhatsappIcon/>
                            Let&apos;s Code
                        </button>
                    </DrawerTrigger>
                )
            }
        </header>
    )
}

export default Header;
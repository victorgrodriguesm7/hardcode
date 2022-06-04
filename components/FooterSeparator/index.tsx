
import Image from "next/image";
import styles from '../../styles/components/FooterSeparator.module.css';

const FooterSeparator = () => {

    return (
        <section className={styles.imageContainer}>
            <Image
                src="/assets/footer-separator.png"
                layout="fill"
                className={styles.image}/>
        </section>
    )
}

export default FooterSeparator;
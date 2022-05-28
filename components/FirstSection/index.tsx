import Image from "next/image";
import AsteriskIcon from "../Icons/AsteriskIcon";
import styles from '../../styles/components/FirstSection.module.css';
import ArrowDownIcon from "../Icons/ArrowDownIcon";

const FirstSection = () => {

    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Desenvolvimento<br/>de <strong>Tecnologia</strong></h1>
                    <h3 className={styles.subtitle}>Para startups sem time <br/>de tecnologia.</h3>
                    <button type="button" className={styles.knowMore}>
                        <ArrowDownIcon className={styles.arrowDown}/>
                        Saiba mais
                    </button>
                </div>
                <Image
                    src="/assets/first-section/hero.png"
                    layout="raw"
                    width={689}
                    height={535}
                    className={styles.backgroundImage}/>
                <AsteriskIcon className={styles.backgroundAsterisk}/>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <h4 className={styles.cardTitle}>METODOLOGIA iBDD</h4>
                    <p className={styles.cardDescription}>Focada na comunicação entre a necessidade do cliente e o time de desenvolvimento do produto.</p>
                    <p className={styles.cardDescription}>Evite o horror sem fim de lidar com times de tecnologia.</p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.cardTitle}>MUITA EXPERIÊNCIA</h4>
                    <p className={styles.cardDescription}>Gestores do tempo da internet discada e que sobreviveram o bug do milênio.</p>
                    <p className={styles.cardDescription}>Você não vai precisar falar “tecniquês” para conseguir desenvolver o seu produto.</p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.cardTitle}>DESENVOLVIMENTO ÁGIL</h4>
                    <p className={styles.cardDescription}>Com sprints de quinze dias você já tem resultado no seu projeto no curto prazo.<br/>Foque no seu modelo de negócio e deixe sua tecnologia conosco.</p>
                    <p className={styles.cardDescription}>Foque no seu modelo de negócio e deixe sua tecnologia conosco.</p>
                </div>
            </div>
        </section>
    )
}

export default FirstSection;
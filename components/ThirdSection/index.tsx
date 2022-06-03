import Image from 'next/image';
import styles from '../../styles/components/ThirdSection.module.css';
import IdeaIcon from '../Icons/IdeaIcon';
import SmileIcon from '../Icons/SmileIcon';

const ThirdSection = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Metodologia IBDD</h1>
            <div>
                <div className={styles.icon}>
                    <IdeaIcon className={styles.firstIcon}/>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        Idea
                    </div>
                    <p className={styles.cardDescription}>Uma ideia na cabeça e um celular na mão! Todo unicórnio começou a sua jornada de sucesso assim.</p>
                </div>
                <div className={styles.doubleCardContainer}>
                    <div>
                        <div className={styles.card}>
                            Business
                        </div>
                        <div className={styles.card}>
                            Design
                        </div>
                    </div>
                    <p className={styles.cardDescription}>Compreendemos o seu modelo de negócio e propomos entregas que gerem valor no curto prazo.</p>
                    <p className={styles.cardDescription}>Desenvolvemos layout navegáveis que facilitam a comunicação e gestão do desenvolvimento do produto.</p>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        Development
                    </div>
                    <p className={styles.cardDescription}>A primeira linha de código é escrita após a aprovação do produto, garantindo uma entrega de qualidade.</p>
                </div>
                <div className={styles.icon}>
                    <SmileIcon className={styles.lastIcon}/>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src="/assets/third-section/background.png"
                    width={827}
                    height={332}/>
            </div>
        </section>
    );
}

export default ThirdSection;
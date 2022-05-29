import Image from 'next/image';
import styles from '../../styles/components/SecondSection.module.css';

const SecondSection = () => {
    return (
        <section className={styles.container}>
            <Image
                src="/assets/second-section/steve-jobs.png"
                width={992}
                height={407}
                className={styles.background}
                layout="raw"
                />
            <div className={styles.content}>
                <h1 className={styles.title}>Manifesto<br/>Hard Code</h1>
                <div className={styles.textContainer}>
                    <div>
                        <p className={styles.text}>Na adolescência você sonhou em ser um <strong>rock star</strong>, mas o tempo passou e hoje a sua vida é pagar boletos, enfrentar duas horas de trânsito e trabalhar em uma empresa que não consegue se ver mais nela.</p>
                        <p className={styles.text}>Depois de dois anos trabalhando em casa, você teve que voltar para a vida de escritório e percebeu que nem uma pandemia conseguiu fazer a <strong>transformação digital</strong> que seu trabalho precisava.</p>
                    </div>
                    <div>
                        <p className={styles.text}>Todos os dias você fica sabendo de mais um jovem que ficou milionário criando uma startup que você já tinha tido a ideia com seus amigos antes. <strong>Até quando você vai viver essa vida?</strong></p>
                        <p className={styles.text}>Te apoiamos empreender. Somos a experiência em empreendedorismo e tecnologia que sua startup precisa.</p>

                        <span className={styles.subtitle}>Hey ho, let's code!</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection;
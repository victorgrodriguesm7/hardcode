
import Image from 'next/image';
import { forwardRef } from 'react';
import styles from '../../styles/components/ForthSection.module.css';
import ArrowRightIcon from '../Icons/ArrowRightIcon';

const ForthSection: React.ForwardRefRenderFunction<HTMLElement, {}> = ({}, ref) => {

    return (
        <section className={styles.container} ref={ref}>
            <div className={styles.section}>
                <div className={styles.leftContainer}>
                    <h1 className={styles.title}>MVP Express</h1>
                    <p className={styles.text}>Qual será a próxima startup de sucesso que não foi você quem criou?</p>
                    <p className={styles.text}>Tire sua ideia da cabeça e coloque nos celulares de todos os consumidores. Em apenas <strong>três meses</strong> te damos suporte na estruturação jurídica e no desenvolvimento do produto.</p>
                    <p className={styles.text}>Ajudamos com a ideação, descoberta do modelo de negócio, pesquisa de mercado, prototipação e lançamento da startup.</p>
                    <p className={styles.text}>Entregamos um produto mínimo viável validado e material de apoio para capitação de investimento.</p>
                    <button
                        type="button"
                        className={styles.button}>
                        Let&apos;s Code <ArrowRightIcon className={styles.arrowRight}/>
                    </button>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/forth-section/MVP.png"
                        layout='fill'
                        />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/forth-section/HEAD.png"
                        layout='fill'
                        />
                </div>
                <div className={styles.rightContainer}>
                    <h1 className={styles.title}>HEAD Express</h1>
                    <p className={styles.text}>Seu negócio está crescendo porém ainda falta liderança em algum setor? Nós te ajudamos com isso!</p>
                    <p className={styles.text}><strong className={styles.subtitle}>Growth</strong>Liderança com décadas de experiência na gestão dos times de produtos digitais, marketing e vendas.</p>
                    <p className={styles.text}><strong className={styles.subtitle}>Tech</strong>Sabemos o quanto é difícil encontrar um desenvolvedor, ainda mais um gestor. Por isso compartilhamos com nossos clientes.</p>
                    <p className={styles.text}><strong className={styles.subtitle}>Legal</strong>Preocupado com a LGPD? Precisa criar acordo de sócios e outros contratos? Conte com nossos serviços!</p>
                    <button
                        type="button"
                        className={styles.button}>
                        Let&apos;s Code <ArrowRightIcon className={styles.arrowRight}/>
                    </button>
                </div>
            </div>
            
            <div className={styles.section}>
                <div className={styles.leftContainer}>
                    <h1 className={styles.title}>FINTECH Express</h1>
                    <p className={styles.text}>Você sabia que 2/3 das pessoas preferem ir no dentista do enfrentar o gerente do banco? Você já viu o tamanho da concentração bancária brasileira e sua margem de lucro?</p>
                    <p className={styles.text}>O setor financeiro é um dos que mais atrai atenção de investidores.</p>
                    <p className={styles.text}>Wallet, Conta Digital, Cartão de Crédito, Investimentos, Crédito Direto, etc. Duas décadas de experiência de desenvolvimento de produtos digitais mas com a cabeça focada na transformação digital que você precisa.</p>
                    <p className={styles.text}>Não importa a Fintech que vai montar, a HARD CODE é o seu time de tecnologia.</p>
                    <button
                        type="button"
                        className={styles.button}>
                        Let&apos;s Code <ArrowRightIcon className={styles.arrowRight}/>
                    </button>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/forth-section/FINTECH.png"
                        layout='fill'
                        />
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/forth-section/PROJECT.png"
                        layout='fill'
                        />
                </div>
                <div className={styles.rightContainer}>
                    <h1 className={styles.title}>PROJECT Express</h1>
                    <p className={styles.text}>Não acha desenvolvedor para contratar? Desenvolvedor sumiu ou está te traindo com outra empresa? Projeto atrasou?</p>
                    <p className={styles.text}>“Em vez de você ficar pensando nele. Em vez de você viver chorando por ele. Liga pra mim, não, não liga pra ele. “</p>
                    <p className={styles.text}>Empreendedor não sofra mais com isso, fale com um especialista que o seu problema de tecnologia.</p>
                    <p className={styles.text}>Com a metodologia iBDD você sempre vai falar com especialista em gestão de projetos e vai garantir entrega e geração de valor para o caixa da sua empresa.</p>
                    <button
                        type="button"
                        className={styles.button}>
                        Let&apos;s Code <ArrowRightIcon className={styles.arrowRight}/>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default forwardRef(ForthSection);
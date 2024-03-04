import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bem-Vindo',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Bem-vindo ao <code>AnoteGA</code>. Este é um projeto, onde viso documentar todo meu aprendizado em programação, com o intuito de ajudar outras pessoas que estão iniciando na área.
      </>
    ),
  },
  {
    title: 'Documentação de Qualidade',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Este projeto foi feito utilizando Docusaurus, um framework de código aberto para construir sites estáticos. Ele foi criado para ser fácil de usar e configurar, e permite que você se concentre em escrever documentação de alta qualidade.
      </>
    ),
  },
  {
    title: 'Código Aberto',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Esteja livre para contribuir com o projeto, seja corrigindo erros, adicionando novas funcionalidades ou até mesmo sugerindo melhorias. O código fonte do projeto está disponível no <a href="https://github.com/Davi-Ga/anotega">GitHub</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

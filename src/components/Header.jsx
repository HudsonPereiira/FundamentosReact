import styles from './Header.module.css' // Importa o arquivo CSS específico para estilizar o componente Header
import ignitelogo from '../assets/ignite-logo.svg'; // Importa a imagem do logotipo do Ignite

export function Header() { // Declara o componente funcional Header
    return (
        <header className={styles.header}> {/* Aplica a classe CSS 'header' para estilizar o elemento <header> */}
            <img src={ignitelogo} alt="Logotipo do Ignite" /> {/* Exibe o logotipo do Ignite com uma descrição alternativa */}
            <strong> Ignite FEED</strong> {/* Exibe o texto em negrito como título do componente */}
        </header>
    );
}
